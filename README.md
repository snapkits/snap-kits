# Github Deploy
This branch is specially made for deploying in github. 
It will be updated time to time, when new version is release.

There will be few differences in this branch and main branch.

1. Add this command to your **package.json** file:
```json
"export": "next export"
```
2. Change the **next.config.js** file to **next.config.mjs**, and replace everything inside with the following:
```js
/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};
export default nextConfig;
```
The extension change is so that the compiler can understand exports, and the update we make inside the file solves a couple of problems:
1. Next.js uses its own image optimization, which doesn’t play nicely with GitHub Pages by default. We change this to the **akamai** option which works properly. You can read more about this [here](https://nextjs.org/docs/basic-features/image-optimization)
2. We need to define an **asset prefix** because GitHub uses Jekyll by default to build static pages, and Jekyll ignores all files prefixed with `_` which Next.js uses