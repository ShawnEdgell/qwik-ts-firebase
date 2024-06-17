# 🌟 Qwik-TS-Firebase

Welcome to the **Qwik-TS-Firebase** project! This repository is your gateway to a blazing fast, highly optimized web application built with Qwik, Qwik UI, and Firebase. 🚀

## 🛠️ Technology Stack

- **Qwik**: The ultra-fast, resumable framework for the web.
- **Qwik UI**: A collection of high-quality, reusable components for Qwik.
- **Firebase**: Backend-as-a-Service providing hosting, authentication, and more.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Bun**: The fast, all-in-one JavaScript runtime.

## Static Site Generator (Node.js)

```shell
bun build.server
```

## Vercel Edge

This starter site is configured to deploy to [Vercel Edge Functions](https://vercel.com/docs/concepts/functions/edge-functions), which means it will be rendered at an edge location near to your users.

## Installation

The adaptor will add a new `vite.config.ts` within the `adapters/` directory, and a new entry file will be created, such as:

```
└── adapters/
    └── vercel-edge/
        └── vite.config.ts
└── src/
    └── entry.vercel-edge.tsx
```

Additionally, within the `package.json`, the `build.server` script will be updated with the Vercel Edge build.

## Production build

To build the application for production, use the `build` command, this command will automatically run `bun build.server` and `bun build.client`:

```shell
bun build
```

[Read the full guide here](https://github.com/QwikDev/qwik/blob/main/starters/adapters/vercel-edge/README.md)

## Dev deploy

To deploy the application for development:

```shell
bun deploy
```

Notice that you might need a [Vercel account](https://docs.Vercel.com/get-started/) in order to complete this step!

## Production deploy

The project is ready to be deployed to Vercel. However, you will need to create a git repository and push the code to it.

You can [deploy your site to Vercel](https://vercel.com/docs/concepts/deployments/overview) either via a Git provider integration or through the Vercel CLI.
