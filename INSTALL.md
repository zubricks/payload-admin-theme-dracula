### [Payload](https://payloadcms.com)

#### Install the theme

If your project already uses `@zubricks/payload-admin-ui-themes`, install the Dracula theme package:

```bash
pnpm add @zubricks/payload-admin-theme-dracula
```

If you need both packages, install them together:

```bash
pnpm add @zubricks/payload-admin-ui-themes @zubricks/payload-admin-theme-dracula
```

#### Activate the theme

Add Dracula to the Admin UI themes plugin in your Payload config:

```ts
import { draculaTheme } from "@zubricks/payload-admin-theme-dracula";
import { payloadAdminUIThemes } from "@zubricks/payload-admin-ui-themes";
import { buildConfig } from "payload";

export default buildConfig({
  plugins: [
    payloadAdminUIThemes({
      defaultTheme: "dracula",
      themes: [draculaTheme],
    }),
  ],
});
```

Restart Payload, open your user menu, choose **Settings**, and select **Dracula** under Admin UI Theme.

Payload's appearance setting switches between the official variants:

- **Dark:** Dracula Classic
- **Light:** Alucard Classic
