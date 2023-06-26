import { getSeoImage, seoConfig } from '@mgslab/libs/configs'
import { APP_NAME } from '@mgslab/libs/constants'
import { constructAppImage, constructGenericImage, truncateOnWord } from '@mgslab/libs/helpers'
import { AppImageProps, MeetingImageProps } from '@mgslab/libs/interfaces'
import { merge } from 'lodash'
import type { NextSeoProps } from 'next-seo'
import { NextSeo } from 'next-seo'

export type SEOHeadProps = {
    seoTitle?: string
    seoDescription?: string
    seoURL?: string
    seoImage?: string
    favicon?: string
    keywords?: string
    children?: React.ReactNode
}

export type HeadSeoProps = {
    title: string
    description: string
    siteName?: string
    url?: string
    canonical?: string
    nextSeoProps?: NextSeoProps
    app?: AppImageProps
    meeting?: MeetingImageProps
    isBrandingHidden?: boolean
}

/**
 * Build full seo tags from title, desc, canonical and url
 */
const buildSeoMeta = (pageProps: {
    title: string
    description: string
    image: string
    siteName?: string
    url?: string
    canonical?: string
}): NextSeoProps => {
    const { title, description, image, canonical, siteName = seoConfig.headSeo.siteName } = pageProps
    return {
        title: title,
        canonical: canonical,
        openGraph: {
            site_name: siteName,
            type: 'website',
            title: title,
            description: description,
            images: [
                {
                    url: image,
                },
            ],
        },
        additionalMetaTags: [
            {
                property: 'name',
                content: title,
            },
            {
                property: 'description',
                content: description,
            },
            {
                name: 'description',
                content: description,
            },
            {
                property: 'image',
                content: image,
            },
        ],
    }
}

export const HeadSeo = (props: HeadSeoProps): JSX.Element => {
    const {
        title,
        description,
        siteName,
        // canonical = defaultUrl,
        nextSeoProps = {},
        app,
        meeting,
        isBrandingHidden,
    } = props

    const image = getSeoImage('ogImage') + constructGenericImage({ title, description })

    const truncatedDescription = truncateOnWord(description, 158)

    const pageTitle = `${title}${isBrandingHidden ? '' : ` | ${APP_NAME}`}`

    let seoObject = buildSeoMeta({
        title: pageTitle,
        image,
        description: truncatedDescription,
        // canonical,
        siteName,
    })

    if (app) {
        const pageImage = getSeoImage('ogImage') + constructAppImage({ ...app, description: truncatedDescription })
        seoObject = buildSeoMeta({
            title: pageTitle,
            description: truncatedDescription,
            image: pageImage,
            // canonical,
            siteName,
        })
    }

    const seoProps: NextSeoProps = merge(nextSeoProps, seoObject)

    return <NextSeo {...seoProps} />;
}
