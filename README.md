# chrome-dev-jwt

## Overview

Chrome Extension that allows you to:

1. Create a custom claims JSON object
1. Encode as a JWT
1. Save the JWT as a cookie on the domain of your choice

![Extension Screenshot](https://raw.githubusercontent.com/bennydtown/chrome-dev-jwt/master/public/images/extension-screenshot.png)


### To make this useful..

1. Include your development domain (i.e. `www.myapp.local`) in these files:
  * The `permissions` collection in *public/manifest.json*
  * The `domains` const at the top of *src/form.js*

1. Edit the form or validation to enforce the specific


## Getting Started

1. Install yarn: https://yarnpkg.com/lang/en/docs/install/#mac-stable
1. `git clone https://github.com/bennydtown/chrome-dev-jwt.git`
1. `cd chrome-dev-jwt`
1. `yarn install`


## Dev

### Run tests

```
yarn test
```

### Run in dev server (will not allow saving cookies)

```
yarn start
````

## Install on your browser as extension

1. `yarn build`
1. In Chrome, open `chrome://extensions/`
1. make sure **Developer Mode** is On
1. `Load Unpacked Extension`
1. Select the `chrome-dev-jwt/build` folder
