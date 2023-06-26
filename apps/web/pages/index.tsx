import { HeadSeo, TextButton } from '@mgslab/ui';
import { useIntl } from 'react-intl';


export default function Home(props: { locale?: string; switchLanguage: () => void }) {
    const intl = useIntl()
    const { locale, switchLanguage } = props

    return (
        <div>
            <HeadSeo title="Test page" description="This is test page" />
            <TextButton>Welcome to my app</TextButton>
        </div>
    )
}
