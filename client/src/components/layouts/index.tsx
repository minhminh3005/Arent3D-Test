import { Link, Outlet } from "react-router-dom";
import { css } from "@emotion/css";
import { useTheme } from "@mui/material/styles";
import {
  AppBar,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import FormIcon from "../icons/FormIcon";
import MedalIcon from "../icons/MedalIcon";
import InfoIcon from "../icons/InfoIcon";
import React, { ReactNode, useState } from "react";
import Healthy from "../icons/HealthyIcon";
import BunIcon from "../icons/BunIcon";
import CloseIcon from "../icons/CloseIcon";

interface INavLink {
  title: string;
  icon: ReactNode;
  path: string;
}

const navLinkArr: INavLink[] = [
  {
    title: "自分の記録",
    icon: <FormIcon />,
    path: "top-page",
  },
  {
    title: "チャレンジ",
    icon: <MedalIcon />,
    path: "my-record",
  },
  {
    title: "お知らせ",
    icon: <InfoIcon />,
    path: "column",
  },
];

const textArr = [
  "自分の記録",
  "体重グラフ",
  "目標",
  "選択中のコース",
  "コラム一覧",
  "設定",
];

const footerArr = [
  "会員登録",
  "運営会社",
  "利用規約",
  "個人情報の取扱について",
  "特定商取引法に基づく表記",
  "お問い合わせ",
];

const NavLink = ({
  path,
  children,
  title,
}: {
  path: string;
  children?: ReactNode;
  title: string;
}) => {
  return (
    <Link to={path}>
      <div
        className={css`
          display: flex;
        `}
      >
        {children}
        <div
          className={css`
            ${title && "margin-left: 14px;"}
          `}
        >
          {title}
        </div>
      </div>
    </Link>
  );
};

const DropDownMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {!open ? <BunIcon /> : <CloseIcon />}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {textArr.map((item, idx) => (
          <div key={`${idx}`}>
            <MenuItem onClick={handleClose}>{item}</MenuItem>
            {idx !== textArr.length - 1 && <Divider  />}
          </div>
        ))}
      </Menu>
    </>
  );
};

const Header = () => {
  return (
    <AppBar
      position="sticky"
      className={css`
        height: 64px;
      `}
    >
      <Toolbar
        className={css`
          max-width: 960px;
          width: 100%;
          margin: 0 auto;
          justify-content: space-around;
          padding: 0 70px;
          > div {
            flex: 1 1 auto;
          }
        `}
      >
        <div>
          <NavLink title="" path="">
            <Healthy />
          </NavLink>
        </div>
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            > a {
              color: #fff;
              text-decoration: none;
              font-size: 16px;
              flex: 1 1 auto;
            }
          `}
        >
          {navLinkArr.map((item, idx) => (
            <NavLink
              key={`${item.title}-${idx}`}
              title={item.title}
              path={item.path}
            >
              {item.icon}
            </NavLink>
          ))}
          <DropDownMenu />
        </div>
      </Toolbar>
    </AppBar>
  );
};

const Footer = () => {
  const theme = useTheme();
  return (
    <footer
      className={css`
        min-height: 128px;
        width: 100%;
        color: #fff;
        text-align: center;
        display: flex;
        align-items: center;
        background-color: ${theme.palette.neutral.main};
      `}
    >
      <div
        className={css`
          width: 100%;
          max-width: ${theme.breakpoints.values.lg}px;
          margin: 56px auto;
          display: flex;
          justify-content: space-between;
        `}
      >
        {footerArr.map((item, idx) => (
          <div
            className={css`
              cursor: pointer;
              font-weight: 300;
              font-size: 11px;
              line-height: 16px;
              color: #fff;
              letter-spacing: 0.033px;
            `}
            key={`${item}-${idx}`}
          >
            {item}
          </div>
        ))}
      </div>
    </footer>
  );
};

const Layout = () => {
  const theme = useTheme();
  return (
    <div
      className={css`
        height: 100%;
        width: 100%;
      `}
    >
      <Header />
      <div
        className={css`
          display: flex;
          justify-content: space-between;
          padding-top: 24px;
          height: 100vh;
          // overflow-y: hidden;
          &::-webkit-scrollbar {
            width: 0;
            &-track {
              background: transparent;
            }
            &-thumb {
              background: ${theme.palette.grey[500]};
              &:hover {
                background: ${theme.palette.grey[600]};
              }
            }
          }
        `}
      >
        {/* bodywrapper */}
        <div
          className={css`
            flex: 1 1 auto;
            // overflow-y: auto;
          `}
        >
          <main
            className={css`
              min-height: 620px;
              max-width: ${theme.breakpoints.values.lg}px;
              margin: 0px auto 64px;
              position: relative;
            `}
          >
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
