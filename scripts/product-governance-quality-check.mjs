import { existsSync, readFileSync, statSync } from "node:fs";
import { readdir } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const failures = [];
let checks = 0;

const requiredDocs = [
  "README.md",
  "docs/governance/PRODUCT_GOVERNANCE_BASELINE.md",
  "docs/governance/GITHUB_OPERATING_MODEL.md",
  "docs/governance/DECISION_LOG.md",
  "docs/governance/STATUS_AND_EVIDENCE_DISCIPLINE.md",
  "docs/governance/BRANCH_PROTECTION_REQUIRED_CHECKS_POLICY.md",
  "docs/governance/GITHUB_BRANCH_PROTECTION_RECON_2026-07-06.md",
  "docs/governance/CONTINUOUS_QUALITY_LOOP.md",
  "docs/governance/CRYSTALLINE_SOFTWARE_MINIMALISM.md",
  "docs/roadmap/OPEN_PRODUCTIZATION_DECISIONS.md"
];

const forbiddenStatusTokens = new Set([
  "AUDIT_VALID",
  "BRANCH_PROTECTION_CONFIGURED",
  "REQUIRED_CHECKS_ENFORCED",
  "RUNTIME_CI_PROTECTED",
  "NGOSYSTEM_PRODUCTION_READY",
  "NGOSYSTEM_RUNTIME_LIVE",
  "NGOSYSTEM_LEGAL_READY",
  "PUBLIC_SAAS_LAUNCHED",
  "PRODUCTION_READY",
  "LEGAL_READY",
  "TENANT_PRODUCTION_READY"
]);

const allowedExtensions = new Set([".md", ".json", ".mjs", ".yml", ".yaml"]);
const maxFileBytes = 250_000;
const forbiddenFiles = new Set(["package-lock.json"]);
const dependencyFields = [
  "dependencies",
  "devDependencies",
  "optionalDependencies",
  "peerDependencies",
  "bundledDependencies"
];

function normalizePath(filePath) {
  return filePath.split(path.sep).join("/");
}

function fail(message) {
  failures.push(message);
}

function assert(condition, message) {
  checks += 1;
  if (!condition) fail(message);
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(fullPath));
      continue;
    }
    files.push(fullPath);
  }
  return files;
}

function extractStatusBlocks(text) {
  const blocks = [];
  const statusBlockPattern = /Status:\s*\r?\n\s*```text\r?\n([\s\S]*?)\r?\n```/g;
  for (const match of text.matchAll(statusBlockPattern)) {
    blocks.push(match[1].split(/\r?\n/).map((line) => line.trim()).filter(Boolean));
  }
  return blocks;
}

function checkMarkdownLinks(filePath, text) {
  const rel = normalizePath(path.relative(root, filePath));
  const linkPattern = /\[[^\]]+\]\(([^)]+)\)/g;
  for (const match of text.matchAll(linkPattern)) {
    const target = match[1].trim();
    if (
      target.startsWith("http://") ||
      target.startsWith("https://") ||
      target.startsWith("mailto:") ||
      target.startsWith("#")
    ) {
      continue;
    }

    const targetWithoutAnchor = target.split("#")[0];
    if (!targetWithoutAnchor) continue;
    const resolved = path.resolve(path.dirname(filePath), targetWithoutAnchor);
    assert(
      existsSync(resolved),
      `${rel}: local markdown link target missing: ${target}`
    );
  }
}

function checkStatusBlocks(filePath, text) {
  const rel = normalizePath(path.relative(root, filePath));
  const blocks = extractStatusBlocks(text);
  assert(blocks.length > 0, `${rel}: missing Status text block`);
  if (blocks.length === 0) return;

  const firstBlock = blocks[0];
  assert(
    firstBlock.includes("NO_RUNTIME_EFFECT"),
    `${rel}: first status block must include NO_RUNTIME_EFFECT`
  );
  assert(
    firstBlock.includes("NOT_PRODUCTION_READY"),
    `${rel}: first status block must include NOT_PRODUCTION_READY`
  );

  for (const [blockIndex, block] of blocks.entries()) {
    for (const token of block) {
      assert(
        !forbiddenStatusTokens.has(token),
        `${rel}: forbidden status token in Status block ${blockIndex + 1}: ${token}`
      );
    }
  }
}

function checkReadmeLinks(readmeText) {
  for (const doc of requiredDocs.filter((item) => item !== "README.md")) {
    assert(
      readmeText.includes(doc),
      `README.md: required governance document is not linked: ${doc}`
    );
  }
}

function checkPackageManifest() {
  const packagePath = path.join(root, "package.json");
  const packageJson = JSON.parse(readFileSync(packagePath, "utf8"));
  assert(packageJson.private === true, "package.json: product-governance package must remain private");
  assert(packageJson.type === "module", "package.json: checker runtime must remain ESM");

  for (const field of dependencyFields) {
    const value = packageJson[field];
    const count = value && typeof value === "object" ? Object.keys(value).length : 0;
    assert(count === 0, `package.json: ${field} must stay empty unless a decision records why`);
  }

  const scripts = packageJson.scripts ?? {};
  assert(scripts.check === "npm run check:quality-loop", "package.json: check script drifted");
  assert(
    scripts["check:quality-loop"] === "node scripts/product-governance-quality-check.mjs",
    "package.json: quality-loop script drifted"
  );
}

const files = await walk(root);
const trackedLikeFiles = files.filter((filePath) => {
  const rel = normalizePath(path.relative(root, filePath));
  return !rel.startsWith(".git/");
});

for (const requiredDoc of requiredDocs) {
  assert(existsSync(path.join(root, requiredDoc)), `required document missing: ${requiredDoc}`);
}

for (const filePath of trackedLikeFiles) {
  const rel = normalizePath(path.relative(root, filePath));
  const ext = path.extname(filePath);
  assert(!forbiddenFiles.has(rel), `${rel}: generated dependency artifact is not allowed`);
  assert(allowedExtensions.has(ext), `${rel}: unexpected file extension for product-governance repository`);

  const size = statSync(filePath).size;
  assert(size <= maxFileBytes, `${rel}: file exceeds ${maxFileBytes} bytes`);

  if (ext === ".md") {
    const text = readFileSync(filePath, "utf8");
    checkStatusBlocks(filePath, text);
    checkMarkdownLinks(filePath, text);
  }
}

const readmeText = readFileSync(path.join(root, "README.md"), "utf8");
checkReadmeLinks(readmeText);
checkPackageManifest();

console.log("PRODUCT_GOVERNANCE_QUALITY_LOOP_CHECK");
console.log(`result=${failures.length === 0 ? "PASS" : "FAIL"}`);
console.log(`checks=${checks}`);
console.log(`files_scanned=${trackedLikeFiles.length}`);

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(`FAIL ${failure}`);
  }
  process.exit(1);
}
