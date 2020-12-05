import React, { useEffect } from 'react'
import Article from './Article'
import p1 from '../../../img/crack.png'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArticlesAction } from '../../../redux/actions/actions'
import IState from '../../../redux/types/IState'
import { ArticlesContainer } from './styles/ArticlesContainer'
import InfoCard from '../../../Styled/InfoCard'



// TODO: Add loading animations
const Articles = () => {
    const dispatch = useDispatch()
    const { blogArticlesLoading: loading, blogArticles } = useSelector((state: IState) => state.blog)
    useEffect(() => {
        dispatch(fetchArticlesAction())
    }, [])
    return (
        <ArticlesContainer>
            {!loading ?
                blogArticles.map(({ cover_image, title, url }, i) =>
                    <Article imgUrl={cover_image} url={url} title={title} key={i} />
                )
                :
                Array.from({ length: 5 }).map((data, i) =>
                    <InfoCard key={i} />
                )
            }
        </ArticlesContainer>
    )
}

export default Articles
