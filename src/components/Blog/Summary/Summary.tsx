import { EyeTwoTone, HeartTwoTone, HighlightTwoTone, SmileTwoTone } from '@ant-design/icons'
import React from 'react'
import { SummaryContainer } from './styles/SummaryContainer'

interface Props {
    title: string;
    count: number;
    icon: any;
    loading: boolean
}

const Summary = ({ count, icon, title, loading }: Props) => {
    return (
        <SummaryContainer loading={loading ? 1 : 0}>
            { loading ?
                <div className="spinner"></div>
                : <>
                    <h1>
                        {count} {icon}
                    </h1>
                    <h3>
                        {title}
                    </h3>
                </>
            }
        </SummaryContainer>
    )
}

export default Summary
