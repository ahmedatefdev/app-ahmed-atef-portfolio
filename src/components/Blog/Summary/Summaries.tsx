import { EyeTwoTone, HeartTwoTone, HighlightTwoTone, SmileTwoTone } from '@ant-design/icons'
import { TFunction, WithTranslation } from 'next-i18next'
import React from 'react'
import styled from 'styled-components'
import { withTranslation } from '../../../../i18n'
import { size, spacing } from '../../../styles/vars'
import Summary from './Summary'
import pat3 from '../../../img/pattern11.png'
import { IAppStyledProps } from '../../../types/IAppStyledProps'

interface Props extends WithTranslation {
    t: TFunction
}


const SummariesContainer = styled.div`
    width: 90%;
    margin:${spacing.large};
    
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
    flex-wrap:wrap;

    background-blend-mode: multiply;
    background-image: url(${pat3}) ;
    background-color: ${({ theme }: IAppStyledProps) => theme.body} ;

    border-radius: 3px;
    filter:brightness(120%) contrast(110%);
    filter: drop-shadow(0px 0px 5px ${({ theme }: IAppStyledProps) => theme.accent});

    @media (max-width: ${size.tablet}){
        margin:${spacing.small};
    }
    
`

//  TODO: Add loading animations
//  TODO: Fetch Counts
const Summaries = ({ t }: Props) => {
    return (
        <SummariesContainer>
            <Summary
                icon={<HeartTwoTone twoToneColor="red" />}
                title={t("reactions")}
                count={1520}
            />
            <Summary
                icon={<EyeTwoTone />}
                title={t("views")}
                count={542}
            />
            <Summary icon={<HighlightTwoTone twoToneColor="orange" />}
                title={t("comments")}
                count={542}
            />
            <Summary icon={<SmileTwoTone twoToneColor="gray" />}
                title={t("followers")}
                count={52542}
            />
        </SummariesContainer>
    )
}

export default withTranslation("blog")(Summaries)
