# MediaFerry 0.1.4

Restores the registered Community plugin ID `bondie-docferry`. The display name
remains MediaFerry. Version 0.1.3 incorrectly changed the ID to `mediaferry`;
the repository name does not require changing an existing plugin ID.

## Installation And Migration

Existing installs with ID `bondie-docferry` update in place. Install the matching
`main.js`, `manifest.json`, and `styles.css` into
`<vault>/.obsidian/plugins/bondie-docferry/`. Keep existing `data.json`.

For manual testers who installed 0.1.3 under `mediaferry`:

1. Disable that installation and close Obsidian. Back up the plugin folder
   outside `.obsidian/plugins`; never delete configuration to fix an ID.
2. If no `bondie-docferry` directory exists, rename the backed-up original
   `mediaferry` directory to `bondie-docferry`, then replace only the three
   runtime assets with 0.1.4.
3. If both directories exist, do not overwrite either configuration or merge
   `data.json` blindly. Retain both backups and choose the installation whose
   settings/history you need, or contact support for migration help.
4. Start Obsidian and enable MediaFerry. Verify folders and account state.
   Sign in again if the host's installation-scoped secret is unavailable.
   Do not copy session tokens manually.

Stored notes are not moved or deleted. Protocol handler, SecretStorage key
names, service origins, membership and payment behavior remain unchanged.
The two IDs must not be enabled simultaneously.

## Review

Release tag and manifest version are exactly `0.1.4`. CI builds and attests the
three install assets, then downloads them to verify hashes and the registered
ID. This publishes a GitHub correction, not a claim that official review passed.
