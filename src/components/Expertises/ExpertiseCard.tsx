import React, { useMemo } from 'react'
import styled from 'styled-components'
import { size, spacing } from '../../styles/vars'
import { IAppStyledProps } from '../../types/IAppStyledProps'
import Experience from '../../models/Experience'
import { i18n } from '../../../i18n'

interface Props {
    experience: Experience
}

const CardContainer = styled.div`
        padding:${spacing.normal};

        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        
        background-color:transparent;

        transition: all 0.5s ease;

        &:hover {
            transform: scale(1.5);
            opacity: 1;
            filter: brightness(110%) drop-shadow(6px 6px 6px ${({ theme }: IAppStyledProps) => theme.accent});
        }

        
        @media (max-width: ${size.tablet}) {
            padding:${spacing.extraSmall};
        }
`
const Icon = styled.img`
        height: 4rem;
        margin: .8rem;
        border-radius:${spacing.extraSmall};
        opacity: 0.9;
        
        filter: brightness(100%) drop-shadow(4px 4px 3px ${({ theme }: IAppStyledProps) => theme.accent});
`
const Title = styled.p`
      color: ${({ theme }: IAppStyledProps) => theme.text};
`
const ExpertiseCard = ({ experience }: Props) => {
    console.log("🚀 ~ file: ExpertiseCard.tsx ~ line 52 ~ ExpertiseCard ~ experience", experience)
    const { experienceTranslations, image } = experience
    const title = useMemo(() => {
        return experienceTranslations.find((trans) => trans.language.short_name === i18n.language)
    }, [experienceTranslations, i18n.language])

    return (
        <CardContainer>
            <Icon src={image.url || "https://i.imgur.com/7oeQZQa.png"} />
            <Title>{title?.name || "Experience Title translation not found"}</Title>
        </CardContainer>
    )
}

export default ExpertiseCard
