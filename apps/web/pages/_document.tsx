import createEmotionServer from '@emotion/server/create-instance';
import { createEmotionCache } from '@mgslab/libs/configs';
import { ServerStyleSheets } from '@mui/styles';
import Document, {
    DocumentContext,
    DocumentProps,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';
import * as React from 'react';

interface MyDocumentProps extends DocumentProps {
    emotionStyleTags: JSX.Element[]
}
export default function MgsLabDocument({ emotionStyleTags }: MyDocumentProps) {
    return (
        <Html lang="en">
            <Head>
                {emotionStyleTags || ''}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

MgsLabDocument.getInitialProps = async (ctx: DocumentContext) => {
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = createEmotionCache()
    const { extractCriticalToChunks } = createEmotionServer(cache)

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props: any) =>
                sheets.collect(<App {...props} emotionCache={cache} />),
        })

    const initialProps = await Document.getInitialProps(ctx)
    // This is important. It prevents Emotion to render invalid HTML.
    // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html)
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ))

    return {
        ...initialProps,
        styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
        emotionStyleTags,
    }
}
