# universal-okta-auth

> A lightweight, framework-agnostic JavaScript plugin for integrating Okta login into React, Angular, Vue, or any JavaScript project.

## 🚀 Features
- Easy-to-use API: `login()`, `logout()`, `isAuthenticated()`
- Pure JavaScript – works in any frontend
- Uses `@okta/okta-auth-js` under the hood

## 📦 Installation

```bash
npm install universal-okta-auth @okta/okta-auth-js
```

## ⚙️ Usage

```js
import { UniversalOktaAuth } from 'universal-okta-auth';

const auth = new UniversalOktaAuth({
  issuer: 'https://dev-123456.okta.com/oauth2/default',
  clientId: 'yourClientId',
  redirectUri: 'http://localhost:3000/callback',
  scopes: ['openid', 'profile', 'email']
});

// To initiate login
auth.login();

// To handle callback after redirect
await auth.handleRedirectCallback();

// Check if authenticated
const isLoggedIn = await auth.isAuthenticated();

// Get tokens
const accessToken = await auth.getAccessToken();
const idToken = await auth.getIdToken();

// Logout
await auth.logout();
```

## 🛡 License

MIT

## 🔗 Links
- [Okta Auth JS Docs](https://github.com/okta/okta-auth-js)
- [Okta Developer Guide](https://developer.okta.com/)

---

> Made with ❤️ for the JavaScript community