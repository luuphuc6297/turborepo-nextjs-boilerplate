import { APP_NAME, SEO_IMG_DEFAULT, SEO_IMG_OGIMG } from '@mgslab/libs/constants'
import { AppImageProps, GenericImageProps, MeetingImageProps } from '@mgslab/libs/interfaces'
import { DefaultSeoProps, NextSeoProps } from 'next-seo'
import type { Router } from 'next/router'

export type HeadSeoProps = {
    title: string
    description: string
    siteName?: string
    url?: string
    canonical?: string
    nextSeoProps?: NextSeoProps
    app?: AppImageProps
    meeting?: MeetingImageProps
}

const seoImages = {
    default: SEO_IMG_DEFAULT,
    ogImage: SEO_IMG_OGIMG,
}

export const getSeoImage = (key: keyof typeof seoImages): string => {
    return seoImages[key]
}

export const seoConfig: {
    headSeo: Required<Pick<HeadSeoProps, 'siteName'>>
    defaultNextSeo: DefaultSeoProps
} = {
    headSeo: {
        siteName: APP_NAME,
    },
    defaultNextSeo: {
        twitter: {
            handle: '@mgslab',
            site: '@mgslab',
            cardType: 'summary_large_image',
        },
    },
} as const

/**
 * This function builds a canonical URL from a given host and path omitting the query params. Note: on homepage it omits the trailing slash
 * @param origin The protocol + host, e.g. `https://cal.com` or `https://cal.dev`
 * @param path NextJS' useRouter().asPath
 * @returns
 */
export const buildCanonical = ({ origin, path }: { origin: Location['origin']; path: Router['asPath'] }) => {
    return `${origin}${path === '/' ? '' : path}`.split('?')[0]
}


