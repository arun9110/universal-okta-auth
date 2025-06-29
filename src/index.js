import OktaAuth from '@okta/okta-auth-js';

export class UniversalOktaAuth {
  constructor(config) {
    this.oktaAuth = new OktaAuth({
      issuer: config.issuer,
      clientId: config.clientId,
      redirectUri: config.redirectUri,
      scopes: config.scopes || ['openid', 'profile', 'email']
    });
  }

  login() {
    this.oktaAuth.token.getWithRedirect();
  }

  async handleRedirectCallback() {
    const tokens = await this.oktaAuth.token.parseFromUrl();
    this.oktaAuth.tokenManager.setTokens(tokens.tokens);
  }

  async logout() {
    await this.oktaAuth.signOut();
  }

  async isAuthenticated() {
    const idToken = await this.oktaAuth.tokenManager.get('idToken');
    return !!idToken;
  }

  async getAccessToken() {
    const accessToken = await this.oktaAuth.tokenManager.get('accessToken');
    return accessToken?.accessToken || null;
  }

  async getIdToken() {
    const idToken = await this.oktaAuth.tokenManager.get('idToken');
    return idToken?.idToken || null;
  }
}