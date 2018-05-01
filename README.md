## chrome-dev-jwt

Chrome Extension for creating a JWT and saving it as a cookie.  To make this useful, you'll want to include your development domain (i.e. `www.myapp.local`) in these files:
* The `permissions` collection in *public/manifest.json*
* The `domains` const at the top of *src/form.js*


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
