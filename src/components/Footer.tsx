import { TFunction } from "next-i18next"
import React from "react"

import { FaGithubSquare, FaLinkedin, FaTwitter, FaDev } from "react-icons/fa"
import styled from "styled-components"
import { withTranslation } from "../../i18n"
import { IAppStyledProps } from "../types/IAppStyledProps"

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }: IAppStyledProps) => theme.darkerAccent};
    padding: 25px 10px;

    .social-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-items: center;
        align-items: center;
        max-width: 400px;
        margin-bottom: 10px;

        a {
            font-size: 3rem;
            color: ${({ theme }: IAppStyledProps) => theme.text};
            text-decoration: none;
            transition: all 0.3s ease-in-out;
            display: inline-block;
            padding: 10px;
            &:hover {
                color: #1FB4FF;
            }
        }
    }

        p {
            text-align: center;
            margin: 0 auto;
            color: ${({ theme }: IAppStyledProps) => theme.text};
        }
`

const Footer = ({ t }: { t: TFunction }) => (
    <FooterContainer>
        <div className="social-container">
            <a
                href="https://www.linkedin.com/in/ahmed-atef-dev"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin />
            </a>
            <a
                href="https://github.com/ahmedatefdev"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithubSquare />
            </a>
            <a
                href="https://twitter.com/AhmedAtefWD1"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaTwitter />
            </a>
            <a
                href="https://dev.to/ahmedatetae"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaDev />
            </a>
        </div>
        <p>{t("copy-right")}</p>
    </FooterContainer>
)

export default withTranslation("footer")(Footer)
