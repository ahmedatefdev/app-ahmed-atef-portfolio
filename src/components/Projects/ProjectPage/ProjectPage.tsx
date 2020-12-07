import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectWithIdAction } from '../../../redux/actions/actions';
import { ProjectPageContainer } from './ProjectPageContainer';
import IState from '../../../redux/types/IState';
import FullProjectPageDetails from './FullProjectPageDetails';
import { SecTitle } from '../../../Styled/Titles';
import { WithTranslation } from 'next-i18next';
import { withTranslation } from '../../../../i18n';
import CustomButton from '../../../Styled/CustomButton';
import Link from 'next/link';
import { Button } from 'antd';

interface Props extends WithTranslation {
  projectId: string
}

const ProjectPage = ({ projectId, t }: Props) => {
  const dispatch = useDispatch()
  const { projectLoading: loading, project } = useSelector((state: IState) => state.project)
  useEffect(() => {
    dispatch(fetchProjectWithIdAction(projectId))
  }, [])


  return (
    <ProjectPageContainer>
      <div className="container">
        {!loading && !(project === null || project === undefined) ?
          < FullProjectPageDetails />
          :
          (<>
            <SecTitle>{t("not-found-project")}</SecTitle>
            <br /> <br /> <br />
            <Link href="/projects">
              <Button type="primary" >
                {t("to-home")}
              </Button>
            </Link>
          </>)}
      </div>
    </ProjectPageContainer>

  )
}

export default withTranslation("utils")(ProjectPage)
