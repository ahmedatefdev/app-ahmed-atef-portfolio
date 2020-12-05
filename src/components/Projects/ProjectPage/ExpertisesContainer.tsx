import styled from 'styled-components';
import { IAppStyledProps } from '../../../types/IAppStyledProps';
import { size } from '../../../styles/vars';
import React from 'react';
import { DiHtml5 } from 'react-icons/di';
import ExpertiseCard from '../../Expertises/ExpertiseCard';
import Experience from '../../../models/Experience';
import { withTranslation } from '../../../../i18n';
import { WithTranslation } from 'next-i18next';

interface Props extends WithTranslation {
  experiences: Experience[]
}
export const ExpertisesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 75%;
  margin: 0 auto;
  padding: 50px 0;
  color: ${({ theme }: IAppStyledProps) => theme.text};

  @media (max-width: ${size.tablet}){ 
    width: 100%;
  }

  h3 {
    font-weight: 700;
    font-size: 2rem;
    text-transform: uppercase;
    margin: 3rem auto;
    color: ${({ theme }: IAppStyledProps) => theme.text};
  }

  .expertises {
    --gap: 12px;
    display: inline-flex;
    flex-wrap: wrap;
    margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
    width: calc(100% + var(--gap));
    justify-items: center;
    justify-content: center;

    .expertise{
      margin: var(--gap) 0 0 var(--gap);
      flex-basis: calc(25% - 20px);
      display: flexbox;
      justify-content: center;
    }
  }

  .expertises .expertise svg {
    height: 4em;
    width: 4em;
    max-width: 200px;
  }
  @media only screen and (max-width: 960px) {
    h3 {
      text-align: center;
    }
  }
`;

const ExpertiseCards = ({ experiences: expertises, t }: Props) => {

  return (
    <ExpertisesContainer>
      <h3>{t("built-using")}</h3>
      <div className="expertises">
        {expertises.map((expertise, i) => <div key={i} className="expertise">
          <ExpertiseCard experience={expertise} />
        </div>
        )}
      </div>
    </ExpertisesContainer>
  )
}

export default withTranslation("utils")(ExpertiseCards)