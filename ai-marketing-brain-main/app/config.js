/* Brain Africa Labs - TikTok Audit Demo configuration
 * Replace ONLY these endpoint values with your real n8n webhook URLs.
 * Do not put TikTok client_secret in this file.
 */
window.BAL_CONFIG = {
  appName: 'Brain Africa Labs',
  apiBaseUrl: 'https://n8n.brainafricalabs.com',
  endpoints: {
    oauthStart: '/webhook/tiktok-oauth-start',
    account: '/webhook/tiktok/account',
    publish: '/webhook/tiktok/publish'
  },
  demo: {
    accountName: 'Mangeons Official',
    defaultPrivacy: 'SELF_ONLY',
    sampleVideoName: 'mangeons_PubV1.mp4'
  }
};
