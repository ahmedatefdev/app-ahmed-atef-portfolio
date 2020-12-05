import Document, { Head, Main, NextScript, Html } from 'next/document';
import { SheetsRegistry, JssProvider, createGenerateId } from 'react-jss'
import React from 'react';

class FindPairsDocument extends Document {
    static async getInitialProps(ctx) {
        const registry = new SheetsRegistry()
        const generateId = createGenerateId()
        const originalRenderPage = ctx.renderPage
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => (
                    <JssProvider registry={registry} generateId={generateId}>
                        <App {...props} />
                    </JssProvider>
                ),
            })

        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    <style id="server-side-styles">{registry.toString()}</style>
                </>
            ),
        }
    }

    render() {
        return (
            <Html lang="en-US">
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <meta name="mobile-web-app-capable" content="yes" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default FindPairsDocument;