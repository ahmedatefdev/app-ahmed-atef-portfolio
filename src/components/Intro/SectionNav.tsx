import { DingtalkOutlined, ProjectFilled, StarFilled } from '@ant-design/icons'
import { Button } from 'antd'
import { WithTranslation } from 'next-i18next'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { withTranslation } from '../../../i18n'
import { FistCharacterToUppercase } from '../../helper'
import { spacing } from '../../styles/vars'
import { IAppStyledProps } from '../../types/IAppStyledProps'


const SectionNavContainer = styled.div`
    width:100%;
  
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    align-items:center;
    justify-content:center;

    background-color: ${({ theme }: IAppStyledProps) => theme.body};


`
const NavButton = styled(Button)`
    margin:${spacing.small} ${spacing.small};
    padding:${spacing.extraSmall} ${spacing.small};
    min-width:120px;
`

interface Props extends WithTranslation { }
const SectionNav = ({ t }: Props) => (
    <SectionNavContainer>
        <Link href="#experience" as="" shallow>
            <NavButton icon={<DingtalkOutlined />}
                type="primary" size="large"  >{FistCharacterToUppercase(t("experiences"))}
            </NavButton>
        </Link>
        <Link href="/projects">
            <NavButton icon={<ProjectFilled />}
                type="primary" size="large"  >{FistCharacterToUppercase(t("projects"))}
            </NavButton>
        </Link>
        <Link href="/blog">
            <NavButton icon={<StarFilled />}
                type="primary" size="large"  >{FistCharacterToUppercase(t("blog"))}
            </NavButton>
        </Link>
    </SectionNavContainer>
)

export default withTranslation("pages-names")(SectionNav)
