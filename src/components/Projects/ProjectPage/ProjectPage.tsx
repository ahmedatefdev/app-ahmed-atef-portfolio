import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjectWithIdAction } from '../../../redux/actions/actions';
import { ProjectPageContainer } from './ProjectPageContainer';
import IState from '../../../redux/types/IState';
import FullProjectPageDetails from './FullProjectPageDetails';

interface Props {
  projectId: string
}

const ProjectPage = ({ projectId }: Props) => {
  const dispatch = useDispatch()
  const { projectLoading: loading, project } = useSelector((state: IState) => state.project)
  useEffect(() => {
    dispatch(fetchProjectWithIdAction(projectId))
  }, [])


  return (
    <ProjectPageContainer>
      <div className="container">
        {!loading && !(project === null || project === undefined) && < FullProjectPageDetails />}
      </div>
    </ProjectPageContainer>

  )
}

export default ProjectPage
