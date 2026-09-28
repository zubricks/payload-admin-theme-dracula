import type { AdminUITheme } from "@zubricks/payload-admin-ui-themes";

export const draculaTheme: AdminUITheme = {
  description: "Dracula Classic in dark mode with its Alucard light companion.",
  id: "dracula",
  label: "Dracula",
  Provider: "@zubricks/payload-admin-theme-dracula/client#DraculaThemeProvider",
};
