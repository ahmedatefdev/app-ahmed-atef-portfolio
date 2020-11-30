import Error from 'next/error'
import { withTranslation } from '../../i18n';

const Custom404 = ({ t }) => {
    return <Error statusCode={404} title="Page Not Found" />
}



export default withTranslation('error')(Custom404);