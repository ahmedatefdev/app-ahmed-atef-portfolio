import Link from 'next/link'
import React from 'react'
import ph3 from '../../img/crack.png'
import InfoCard from '../../Styled/InfoCard'

interface Props {
    loading: boolean
    data: { page: string, title: string, image: string }

}
const Project = ({ data: project }: Props) => {
    return (
        <Link href={project.page} >
            <div>
                <InfoCard imageUrl={ph3} title={project.title} />
            </div>
        </Link >
    )
}

export default Project
