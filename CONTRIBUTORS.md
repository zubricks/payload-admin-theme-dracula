# 🤝🏻 Contributors

> "We learn big things from small experiences" - **Bram Stoker**

Dracula Theme is an open-source project driven by and for the community. Most apps that support the theme are contributions from our community.

As much as the team is responsible for the core theme and wants to support all available applications, we can only do so much ourselves.

That's why the community is essential for this project to keep evolving. Below are some tips for contributors.

## 🎃 Recommendations

This repository follows the official Dracula theme structure:

- [`README.md`](README.md): Introduction and guide for GitHub users.
- [`screenshot.png`](screenshot.png) or [`screenshot/`](screenshot/): Preview images displayed on [draculatheme.com](https://draculatheme.com).
- [`INSTALL.md`](INSTALL.md): Installation instructions displayed on the website.
- [`src/theme.css`](src/theme.css): Payload design-token mappings for Dracula Classic and Alucard Classic.
- [`tests/theme.spec.ts`](tests/theme.spec.ts): Checks for the theme manifest and official palette anchors.

Before opening a pull request, run:

```bash
pnpm install
pnpm test
pnpm lint
pnpm build
```

## 🦉 The Dracula Theme Team

The creators behind the scenes are [Lucas de França](https://github.com/luxonauta) and [Zeno Rocha](https://github.com/zenorocha).

Reach out via [email](mailto:support@draculatheme.com) or follow them on X: [Zeno Rocha](https://x.com/zenorocha) and [Luxonauta (Lucas)](https://x.com/luxonauta).

## 🌐 How the website gets updated

Theme pages on [draculatheme.com](https://draculatheme.com) are generated at build time from the files in each theme repository (`README.md`, `INSTALL.md`, and screenshots). The website is rebuilt separately, usually in batches, so merged updates may not appear immediately.
