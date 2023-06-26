import { CacheProvider, EmotionCache } from '@emotion/react'
import { createEmotionCache } from '@mgslab/libs/configs'
import { theme } from '@mgslab/ui'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import axiosClient from 'apis/clients/axios-client'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { NextPage } from 'next/types'
import { messages } from 'public/static/locales'
import React from 'react'
import { IntlProvider } from 'react-intl'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { SWRConfig } from 'swr'

type ExtendedAppProps = AppProps & {
    Component: NextPage
    emotionCache: EmotionCache
}


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
            refetchOnWindowFocus: false,
        },
    },
})


export default function App(props: ExtendedAppProps) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

    const { locale = 'en' } = useRouter()
    const [lng, setLng] = React.useState<string>(locale)

    const changeLanguage = () => {
        setLng((cur) => (cur === 'vi' ? 'vi' : 'en'))
    }

    return (
        <CacheProvider value={emotionCache}>
            {/* <AuthProvider> */}
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {/* <AppNotificationProvider> */}
                <QueryClientProvider client={queryClient}>
                    <SWRConfig
                        value={{
                            fetcher: (url) => axiosClient.get(url),
                            shouldRetryOnError: false,
                        }}
                    >
                        <IntlProvider
                            locale={lng}
                            messages={{
                                ...(lng === 'vi' ? messages.vi : messages.en),
                            }}
                        >
                            <Component
                                {...pageProps}
                                switchLanguage={changeLanguage}
                                locale={lng}
                            />
                        </IntlProvider>
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            style={{ fontSize: '14px' }}
                        />
                    </SWRConfig>
                </QueryClientProvider>
                {/* </AppNotificationProvider> */}
            </ThemeProvider>
            {/* </AuthProvider> */}
        </CacheProvider>
    )
}