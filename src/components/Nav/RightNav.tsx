import React from 'react';
import Link from 'next/link'
import { HomeFilled, PaperClipOutlined, ProjectFilled, StarFilled } from '@ant-design/icons'
import DarkModeToggle from "react-dark-mode-toggle";
import CustomButton from '../../Styled/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../redux/actions/actions';
import IState from '../../redux/types/IState';
import { useCallback } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { withTranslation } from '../../../i18n';
import { Ul } from './Ul';
import { WithTranslation } from 'next-i18next';
import { FistCharacterToUppercase } from '../../helper';
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
interface Props extends WithTranslation {
  open: boolean
  closeNav: () => void

}
const RightNav = ({ open, t, closeNav }: Props) => {
  const dispatch = useDispatch()
  const themeName = useSelector((state: IState) => state.theme.themeName)
  const ThemeChanger = useCallback(() => { dispatch(setTheme()) }, [themeName])

  return (
    <Ul open={open} onClick={closeNav}>
      <li>
        <Link href="/">
          <CustomButton size="large" icon={<HomeFilled />} type="link" >{FistCharacterToUppercase(t("home"))}</CustomButton>
        </Link>
      </li>
      <li>
        <Link href="/projects">
          <CustomButton icon={<ProjectFilled />} type="link"  >{FistCharacterToUppercase(t("projects"))}</CustomButton>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <CustomButton icon={<StarFilled />} type="link" >{FistCharacterToUppercase(t("blog"))}</CustomButton>
        </Link>
      </li>
      <li>
        <div className="resume">
          <a
            href={publicRuntimeConfig.RESUME_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            <PaperClipOutlined /> {FistCharacterToUppercase(t("resume"))}
          </a>
        </div>
      </li>
      <li >
        <div className="theme-toggle">
          <DarkModeToggle
            onChange={ThemeChanger}
            checked={themeName === "dark"}
            size={45} />
        </div>
      </li>
      <li >
        <div className="language-switcher">
          <LanguageSwitcher />
        </div>
      </li>
    </Ul >
  )
}

export default withTranslation(["pages-names", "utils"])(RightNav)
