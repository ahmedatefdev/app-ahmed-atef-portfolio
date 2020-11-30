import { Skeleton } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { size, spacing } from '../../styles/vars'
import { IAppStyledProps } from '../../types/IAppStyledProps'
import avatar from "../../img/logo.png"

interface Props {
    loading: boolean
}

const CardContainer = styled.div<{ loading: boolean }>`
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        background-color:transparent;
        
        transition: all 0.5s ease;
        width:${({ loading }) => loading ? "150px" : "fit-content"};
        height: ${({ loading }) => loading ? "150px" : "fit-content"};
        &:hover {
            transform: scale(1.5);
            opacity: 1;
            filter: brightness(110%) drop-shadow(6px 6px 6px ${({ theme }: IAppStyledProps) => theme.accent});
        }

        padding:${spacing.normal};
        
        @media (max-width: ${size.tablet}) {
            padding:${spacing.extraSmall};
        }
`
const Icon = styled.img`
        margin: .8rem;
        height: 4rem;
        opacity: 0.9;
        filter: brightness(100%) drop-shadow(4px 4px 3px ${({ theme }: IAppStyledProps) => theme.accent});
`
const Title = styled.p`
      color: ${({ theme }: IAppStyledProps) => theme.text};
`
const ExpertiseCard = ({ loading }: Props) => {
    return (
        <CardContainer loading={loading}>
            {
                loading ?
                    <Skeleton active loading={loading} paragraph={{ rows: 1 }} avatar />
                    :
                    <>
                        <Icon src={avatar} />
                        <Title >
                            javascript
                        </Title>
                    </>
            }
        </CardContainer>
    )
}

export default ExpertiseCard
