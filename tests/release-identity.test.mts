import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { BONDIE_PLUGIN_ID } from "../src/constants.ts";

function record(value: unknown): Record<string, unknown> {
  assert.ok(value && typeof value === "object" && !Array.isArray(value));
  return value as Record<string, unknown>;
}

function readJson(name: string): Record<string, unknown> {
  return record(JSON.parse(readFileSync(new URL("../" + name, import.meta.url), "utf8")) as unknown);
}

test("preserves the registered Community identity independently of display branding", () => {
  const manifest = readJson("manifest.json");
  const pkg = readJson("package.json");
  const lock = readJson("package-lock.json");
  const versions = readJson("versions.json");
  assert.equal(manifest.id, "bondie-docferry");
  assert.equal(BONDIE_PLUGIN_ID, manifest.id);
  assert.equal(manifest.name, "MediaFerry");
  assert.equal(manifest.version, pkg.version);
  assert.equal(manifest.version, lock.version);
  assert.equal(manifest.version, record(record(lock.packages)[""]).version);
  assert.ok(typeof manifest.version === "string");
  assert.equal(versions[manifest.version], manifest.minAppVersion);
});
