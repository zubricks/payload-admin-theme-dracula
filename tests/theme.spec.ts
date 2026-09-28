import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

import { draculaTheme } from "../src/index.js";

describe("Dracula Admin theme", () => {
  it("exports an installable theme manifest", () => {
    expect(draculaTheme).toEqual({
      description:
        "Dracula Classic in dark mode with its Alucard light companion.",
      id: "dracula",
      label: "Dracula",
      Provider:
        "@zubricks/payload-admin-theme-dracula/client#DraculaThemeProvider",
    });
  });

  it("contains the authoritative Dracula and Alucard palette anchors", async () => {
    const stylesheet = await readFile(
      fileURLToPath(new URL("../src/theme.css", import.meta.url)),
      "utf8",
    );

    expect(stylesheet).toContain("--dracula-background: #282a36");
    expect(stylesheet).toContain("--dracula-purple: #bd93f9");
    expect(stylesheet).toContain("--dracula-background: #fffbeb");
    expect(stylesheet).toContain("--dracula-purple: #644ac9");
  });

  it("uses the broader Dracula palette for semantic UI roles", async () => {
    const stylesheet = await readFile(
      fileURLToPath(new URL("../src/theme.css", import.meta.url)),
      "utf8",
    );

    expect(stylesheet).toContain("--color-text-brand: var(--dracula-cyan)");
    expect(stylesheet).toContain("--color-text-selected: var(--dracula-pink)");
    expect(stylesheet).toContain("--color-bg-success: var(--dracula-green)");
    expect(stylesheet).toContain("--color-bg-warning: var(--dracula-orange)");
    expect(stylesheet).toContain("--admin-welcome-background:");
    expect(stylesheet).not.toContain('data-theme="light"] .app-header');
  });
});
