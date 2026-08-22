# Brain Africa Labs — TikTok Audit Flow

This folder adds a reviewer-friendly application journey without replacing the existing public Brain Africa Labs website.

## User journey
1. Dashboard
2. Create campaign
3. Select video
4. Select TikTok
5. Connect TikTok / OAuth
6. TikTok account connected
7. Caption + privacy
8. Review & Publish
9. Publishing status
10. Success

## Backend configuration
Edit `config.js` and set the three real n8n webhook paths:
- `oauthStart`: starts the TikTok OAuth flow
- `account`: optional account lookup endpoint
- `publish`: accepts the publish request and calls your existing n8n TikTok workflow

The browser must NEVER contain `TIKTOK_CLIENT_SECRET`.

## Important TikTok audit point
An unaudited TikTok client can be restricted to private posting. Keep the reviewer demo private until TikTok approves the relevant capabilities.

## Suggested demo
Use `mangeons_PubV1.mp4`, connect `Mangeons Official`, select `Only me`, publish, and show the returned publish ID/status.
