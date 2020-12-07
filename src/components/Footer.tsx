import { TFunction } from "next-i18next"
import React from "react"

import { FaGithubSquare, FaLinkedin, FaTwitter, FaDev } from "react-icons/fa"
import styled from "styled-components"
import { withTranslation } from "../../i18n"
import { IAppStyledProps } from "../types/IAppStyledProps"

const FooterContainer = styled.footer`
    padding: 25px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }: IAppStyledProps) => theme.darkerAccent};

    .social-container {
        max-width: 400px;
        margin-bottom: 10px;

        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-items: center;
        align-items: center;

        a {
            padding: 10px;

            display: inline-block;
            
            text-decoration: none;
            font-size: 3rem;
            
            transition: all 0.3s ease-in-out;

            color: ${({ theme }: IAppStyledProps) => theme.text};
            
            &:hover {
                color:  ${({ theme }: IAppStyledProps) => theme.accent};
            }
        }
    }

        p {
            margin: 0 auto;
            
            text-align: center;
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
