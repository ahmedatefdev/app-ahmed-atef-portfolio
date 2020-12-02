import React from 'react'
import MainInfoCard from '../../../Styled/InfoCard'

interface Props {
    url: string
    imgUrl: string
    title: string
}


const Article = ({ imgUrl, title, url }: Props) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"

        >
            <MainInfoCard imageUrl={imgUrl} title={title} />
        </ a>
    )
}

export default Article
