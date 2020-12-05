import { EyeTwoTone, HeartTwoTone, HighlightTwoTone, SmileTwoTone } from '@ant-design/icons'
import { TFunction, WithTranslation } from 'next-i18next'
import React, { useEffect } from 'react'
import { withTranslation } from '../../../../i18n'
import Summary from './Summary'
import { SummariesContainer } from './styles/SummariesContainer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProjectWithIdAction, fetchSummariesAction } from '../../../redux/actions/actions'
import IState from '../../../redux/types/IState'

interface Props extends WithTranslation {
    t: TFunction
}


//  TODO: Add loading animations
//  TODO: Fetch Counts
const Summaries = ({ t }: Props) => {
    const dispatch = useDispatch()
    const { blogSummariesLoading: loading, blogSummaries } = useSelector((state: IState) => state.blog)

    useEffect(() => {
        dispatch(fetchSummariesAction())
    }, [])

    return (
        <SummariesContainer>
            <Summary loading={loading}
                icon={<HeartTwoTone twoToneColor="red" />}
                title={t("reactions")}
                count={blogSummaries?.reactionsCount || NaN}
            />
            <Summary loading={loading}
                icon={<EyeTwoTone />}
                title={t("views")}
                count={blogSummaries?.viewsCount || NaN}
            />
            <Summary loading={loading} icon={<HighlightTwoTone twoToneColor="orange" />}
                title={t("comments")}
                count={blogSummaries?.commentsCount || NaN}
            />
            <Summary loading={loading} icon={<SmileTwoTone twoToneColor="gray" />}
                title={t("followers")}
                count={blogSummaries?.flowersCount || NaN}
            />
        </SummariesContainer>
    )
}

export default withTranslation("blog")(Summaries)
