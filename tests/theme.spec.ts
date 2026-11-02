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

  it("contains the complete Dracula and Alucard Classic palettes", async () => {
    const stylesheet = await readFile(
      fileURLToPath(new URL("../src/theme.css", import.meta.url)),
      "utf8",
    );

    const palettes = [
      {
        background: "#282a36",
        "current-line": "#6272a4",
        selection: "#44475a",
        foreground: "#f8f8f2",
        comment: "#6272a4",
        red: "#ff5555",
        orange: "#ffb86c",
        yellow: "#f1fa8c",
        green: "#50fa7b",
        cyan: "#8be9fd",
        purple: "#bd93f9",
        pink: "#ff79c6",
      },
      {
        background: "#fffbeb",
        "current-line": "#6c664b",
        selection: "#cfcfde",
        foreground: "#1f1f1f",
        comment: "#6c664b",
        red: "#cb3a2a",
        orange: "#a34d14",
        yellow: "#846e15",
        green: "#14710a",
        cyan: "#036a96",
        purple: "#644ac9",
        pink: "#a3144d",
      },
    ];

    for (const palette of palettes) {
      for (const [token, color] of Object.entries(palette)) {
        expect(stylesheet).toContain(`--dracula-${token}: ${color}`);
      }
    }
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
    expect(stylesheet).toContain("--accessibility-focus-color: #815cd6");
    expect(stylesheet).toContain("--color-bg-elevated: #343746");
    expect(stylesheet).toContain("--color-bg-secondary-hover: #efeddc");
    expect(stylesheet).toContain("--admin-welcome-background:");
    expect(stylesheet).not.toContain('data-theme="light"] .app-header');
  });
});
