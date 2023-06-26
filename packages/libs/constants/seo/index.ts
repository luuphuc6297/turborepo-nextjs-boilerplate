import { MGS_URL, WEBSITE_URL } from '@mgslab/libs/constants';

export const SEO_IMG_DEFAULT = `${WEBSITE_URL}/og-image.png`;
export const LOGO = "/mgslab-logo-white-word.svg";
export const LOGO_ICON = "/cal-com-icon-white.svg";
export const FAVICON_16 = "/favicon-16x16.png";
export const FAVICON_32 = "/favicon-32x32.png";

export const SEO_IMG_OGIMG = `${MGS_URL}/_next/image?w=1200&q=100&url=${encodeURIComponent(
    "/api/social/og/image"
)}`;