<img width="1200" height="801" alt="Dracula Theme" src="https://github.com/user-attachments/assets/44f79ecc-237b-4e56-aa01-46fd868d91b7" />

# Dracula Admin UI theme for Payload 4. 
Dark mode uses Dracula Classic, while light mode uses the official Alucard Classic companion.

<img width="934" height="612" alt="Dracula - Alucard - Light" src="https://github.com/user-attachments/assets/6a75c251-18e8-4c1b-b492-a6852cad8da2" />

## Install

### Already using `@zubricks/payload-admin-ui-themes`?

Install only the Dracula theme package:

```bash
pnpm add @zubricks/payload-admin-theme-dracula
```

### Starting without either package?

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
