import React from 'react'
import HEAD from 'next/head'
import GlobalStyle from './GlobalStyle'
import { BackTop } from 'antd'
import { IoIosArrowDropupCircle } from 'react-icons/io'

interface Props {
    children: any
    title?: string
    description?: string
}


const Page = ({ children, title = 'Ahmed Atef Portfolio', description = "Ahmed atef portfolio made by next.js and antd with styled components" }: Props) => {
    return (
        <>
            <HEAD>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                {description && <meta content={description} name="description" />}
                <meta content="follow, index" name="robots" />
                <meta
                    content="/favicons/browserconfig.xml"
                    name="msapplication-config"
                />
                <link
                    href="/favicons/apple-touch-icon.png"
                    rel="apple-touch-icon"
                    sizes="180x180"
                />
                <link
                    href="/favicons/favicon-32x32.png"
                    rel="icon"
                    sizes="32x32"
                    type="image/png"
                />
                <link
                    href="/favicons/favicon-16x16.png"
                    rel="icon"
                    sizes="16x16"
                    type="image/png"
                />
                <link href="/favicons/site.webmanifest" rel="manifest" />
                <link href="/favicons/favicon.ico" rel="shortcut icon" />
                <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,600;0,700;1,300;1,400;1,600;1,700|Bitter|Roboto+Slab|Open+Sans:400,800&display=swap" rel="stylesheet"></link>
            </HEAD>
            <GlobalStyle />
            {children}
            <BackTop>
                <div style={{
                    height: 50,
                    width: 50,
                    lineHeight: '40px',
                    borderRadius: 30,
                    backgroundColor: "black",
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}><IoIosArrowDropupCircle size="30" /></div>
            </BackTop>
        </>
    )
}

export default Page
