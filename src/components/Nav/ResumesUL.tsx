import React from 'react';
import { FileSearchOutlined, FileTextOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { IAppStyledProps } from '../../types/IAppStyledProps';
import { spacing } from '../../styles/vars';
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const ResumesUL = styled.ul`
  list-style: none;
  margin:0;
  padding:0;
  text-align:center;

  li{
    margin:5px;
    padding:5px;
  }
  hr{
    /* color:${(props: IAppStyledProps) => { return props.theme.darkerAccent; }};
    background-color:${(props: IAppStyledProps) => { return props.theme.darkerAccent; }};
    border-color:${(props: IAppStyledProps) => { return props.theme.darkerAccent; }}; */
    margin:${spacing.extraSmall} 0 ;
  }
`;
export const ResumeContent = (
  <ResumesUL>
    <li>
      <a
        href={publicRuntimeConfig.RESUME_URL_ENGLISH}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FileTextOutlined /> English Resume
        </a>
    </li>
    <hr />
    <li>
      <a
        href={publicRuntimeConfig.RESUME_URL_ARABIC}
        rel="noopener noreferrer"
        target="_blank"
      >
        <FileSearchOutlined /> سيرة ذاتية بالعربية
        </a>
    </li>
  </ResumesUL>
);
