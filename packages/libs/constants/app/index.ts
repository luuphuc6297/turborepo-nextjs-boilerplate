const VERCEL_URL = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : "";
const RAILWAY_STATIC_URL = process.env.RAILWAY_STATIC_URL ? `https://${process.env.RAILWAY_STATIC_URL}` : "";
const HEROKU_URL = process.env.HEROKU_APP_NAME ? `https://${process.env.HEROKU_APP_NAME}.herokuapp.com` : "";
const RENDER_URL = process.env.RENDER_EXTERNAL_URL ? `https://${process.env.RENDER_EXTERNAL_URL}` : "";

export const WEBAPP_URL =
    process.env.NEXT_PUBLIC_WEBAPP_URL ||
    VERCEL_URL ||
    RAILWAY_STATIC_URL ||
    HEROKU_URL ||
    RENDER_URL ||
    "http://localhost:3000";


/** @deprecated use `WEBAPP_URL` */
export const BASE_URL = WEBAPP_URL;
export const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL || "https://cal.com";
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "MsgLab.com";
export const SUPPORT_MAIL_ADDRESS = process.env.NEXT_PUBLIC_SUPPORT_MAIL_ADDRESS || "help@mgslab.com";
export const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME || "Mgs.com, Inc.";
export const SENDER_ID = process.env.NEXT_PUBLIC_SENDER_ID || "Mgs";
export const SENDER_NAME = process.env.NEXT_PUBLIC_SENDGRID_SENDER_NAME || "MsgLab.com";
export const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_WEBAPP_URL || `https://${process.env.VERCEL_URL}`;

// This is the URL from which all Cal Links and their assets are served.
// Use website URL to make links shorter(cal.com and not app.cal.com)
// As website isn't setup for preview environments, use the webapp url instead
export const MGS_URL = new URL(WEBAPP_URL).hostname.endsWith(".vercel.app") ? WEBAPP_URL : WEBSITE_URL;