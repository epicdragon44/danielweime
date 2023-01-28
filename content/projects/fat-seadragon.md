---
title: "FatSeaDragon"

metaDesc: "An open-source port of the ancient OpenSeaDragon deep image viewer for modern React.js projects."

date: "Jun 2022"

tags:
    - open-source
    - javascript
    - react.js
    - react-mui
    - styled-components
---

# FatSeaDragon

A (heavy) Open-Source (BSD-3) Material UI Wrapper of OpenSeaDragon for React.js.

[![GitHub](https://img.shields.io/github/license/epicdragon44/fatseadragon)](https://github.com/epicdragon44/fatseadragon)

[![npm](https://img.shields.io/npm/v/fatseadragon)](https://www.npmjs.com/package/fatseadragon)

![alt text](https://i.ibb.co/9v1fNV2/Screenshot-from-2022-06-07-15-30-23.png)

### How to Install:

```
npm install fatseadragon
```

### Dependencies:

OpenSeaDragon, React MUI, and Styled-Components.

NOT compatible with Typescript.

### How to use:

FatSeaDragon requires 5 parameters as props:

-   **prefixUrl**, a _string_ specifying a folder which contains all the deep zoom image slices
-   **tileSources**, a _string_ specifying a direct Url to the dzi or json file that contains metadata about how to read the deep zoom image
-   **height**: a _string_ specifying how tall to render the viewer (it takes units such as vh)
-   **width**: a _string_ specifying how wide to render the viewer (it takes units such as vw)
-   **showNavigator**: a _boolean_ that indicates whether to show a small navigator

```
import * as React from 'react';
import { FatSeaDragon } from 'fatseadragon';

export default function App() {

  return (
    <>
      <FatSeaDragon
        prefixUrl="http://exampledomain.com/images/outputs/"
        tileSources="http://exampledomain.com/images/outputs/testimage1_outdzi.dzi"
        height="50vh"
        width="50vw"
        showNavigator={true}
      />
    </>
  );
}
```
