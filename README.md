<img width="1280" height="779" alt="payload-admin-dracula-theme" src="https://github.com/user-attachments/assets/07828e9e-b33d-468c-a121-9e73898a2550" />

# @zubricks/payload-admin-theme-dracula

Dracula Admin UI theme for Payload 4. Dark mode uses Dracula Classic, while light mode uses its
official Alucard Classic companion.

This is a theme package for `@zubricks/payload-admin-ui-themes`; it does not duplicate the core
Payload plugin.

## Install

### Already using `@zubricks/payload-admin-ui-themes`

Install only the Dracula theme package:

```bash
pnpm add @zubricks/payload-admin-theme-dracula
```

### Starting without either package

Install the core Admin UI themes plugin and the Dracula theme package together:

```bash
pnpm add @zubricks/payload-admin-ui-themes @zubricks/payload-admin-theme-dracula
```

## Configure

```ts
import { draculaTheme } from "@zubricks/payload-admin-theme-dracula";
import { payloadAdminUIThemes } from "@zubricks/payload-admin-ui-themes";

export default buildConfig({
  plugins: [
    payloadAdminUIThemes({
      defaultTheme: "dracula",
      themes: [draculaTheme],
    }),
  ],
});
```

Payload's light/dark setting chooses between the two official variants:

- Dark: Dracula Classic
- Light: Alucard Classic

The implementation follows the exact colors and UI guidance in the
[official Dracula specification](https://draculatheme.com/spec).

This package is an independent Payload port and is not currently an official Dracula organization
project.
