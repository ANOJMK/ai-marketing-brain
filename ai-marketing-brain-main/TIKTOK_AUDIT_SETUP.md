# TikTok Audit Setup

1. Deploy the complete site.
2. Open `/app/dashboard.html`.
3. Edit `app/config.js` with the real n8n webhook paths before using Connect/Publish.
4. Ensure the TikTok OAuth callback returns to `/app/tiktok-connected.html` after successful authorization.
5. Keep the audit demonstration private while the TikTok client is unaudited.
6. Never put the TikTok client secret in frontend files.

The existing n8n workflow remains the backend automation layer; the reviewer sees Brain Africa Labs as the product UI.
