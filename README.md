# Blog Test with React, Mui, Next.js and TypeScript

Simple blog where I show a bit of my architecture, technologies and way of implementing a project with React, Material-UI, Next.js and hook-oriented axios. I will continue the project in the future and do more advanced implementations with Redux and context.

The apis that I have used for this project contain ramdom information and I have taken them from https://dummyapi.io/docs.

## How to use

You can see the result of the project online [here](https://blog-react-nextjs-typescript-test.vercel.app/).

Download the example [or clone the repo](https://github.com/johnjaider1000/blog-react-test):

<!-- #default-branch-switch -->

```sh
curl -L -O https://github.com/johnjaider1000/blog-react-test/archive/refs/heads/main.zip && unzip -a main.zip && rm -rf main.zip && cd nextjs-typescript-mui-base-main
```

Install it and run:

```sh
npm install
npm run dev
```

or:

<!-- #default-branch-switch -->

[![Edit on StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github.com/johnjaider1000/blog-react-test)

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/mui/material-ui/tree/master/examples/nextjs-with-typescript)

## The idea behind the example

The project uses [Next.js](https://github.com/vercel/next.js), which is a framework for server-rendered React apps.
It includes `@mui/material` and its peer dependencies, including `emotion`, the default style engine in MUI v5. If you prefer, you can [use styled-components instead](https://mui.com/material-ui/guides/interoperability/#styled-components).

## The link component

Next.js has [a custom Link component](https://nextjs.org/docs/api-reference/next/link).
The example folder provides adapters for usage with MUI.
More information [in the documentation](https://mui.com/material-ui/guides/routing/#next-js).

## What's next?

<!-- #default-branch-switch -->

You now have a working example project.
You can head back to the documentation, continuing browsing it from the [templates](https://mui.com/material-ui/getting-started/templates/) section.
