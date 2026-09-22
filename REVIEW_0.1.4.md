# MediaFerry 0.1.4 release review

Reviewed on 2026-09-22 using the obsidian-plugin-release checklist.

## Correction

The existing Community registration is `bondie-docferry`. Version 0.1.3
incorrectly renamed that identifier to `mediaferry`. Version 0.1.4 restores
the registered ID while retaining the MediaFerry display name. The manifest,
constant, package metadata, installation instructions and version map agree.
The migration instructions in RELEASE_NOTES.md cover manual 0.1.3 installs.

The authentication protocol handler, credential keys, service endpoints and
membership policy are unchanged. This correction does not deploy a server or
change subscriptions. Existing privacy and optional-payment disclosures remain
applicable. Two development-only dependency updates clear audit advisories.

## Evidence

- `npm run verify`: lint, 50 tests, TypeScript/bundle, JavaScript syntax and
  release metadata validation passed.
- `npm audit --audit-level=high`: zero vulnerabilities reported.
- Isolated real Obsidian 1.13.7 on the 1.12.7 macOS installer: loaded the exact
  0.1.4 candidate under `bondie-docferry`, opened the ribbon/home and settings,
  checked all four settings and disabled/re-enabled the plugin successfully.
- No real account, payment or production data was mutated by that host test.
- The release workflow publishes the exact numeric tag, attests the three
  assets, then verifies published/non-prerelease status, registered ID,
  manifest version and downloaded asset hashes against the CI build.

This scoped identity correction is not a new Android/iOS or live billing E2E
certification. Official review remains a separate action by the product team.
