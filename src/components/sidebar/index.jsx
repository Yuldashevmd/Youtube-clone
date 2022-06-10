import React from "react";
import { Bar, List, Logo } from "./style";
import { ReactComponent as LogoSvg } from "../../assets/YouTube-White-Full-Color-Logo.wine.svg";
import { ReactComponent as MenuBtn } from "../../assets/menu-svgrepo-com.svg";
import { ReactComponent as Home } from "../../assets/linkLogo/Home.svg";
import { ReactComponent as Navi } from "../../assets/linkLogo/compass-svgrepo-com.svg";
import { ReactComponent as VideoSvg } from "../../assets/linkLogo/videos.svg";
import { ReactComponent as UserSvg } from "../../assets/user-svgrepo-com.svg";
import { LogIn } from "../header/style";

const Sidebar = () => {
  return (
    <Bar>
      <Logo>
        <MenuBtn fill="#fff" width="15px" style={{ cursor: "pointer" }} />
        <LogoSvg
          fill="#fff"
          width="95px"
          height="50px"
          style={{ cursor: "pointer" }}
        />
      </Logo>
      <List>
        <ul>
          <Home width="15px" height="15px" />
          <li>Main</li>
        </ul>
        <ul>
          <Navi fill="#fff" width="17px" height="17px" />
          <li>Navigator</li>
        </ul>
        <ul>
          <VideoSvg fill="#fff" width="17px" height="17px" />
          <li>Subscribers</li>
        </ul>
      </List>
      <List>
        <ul>
          <Home width="15px" height="15px" />
          <li>Library</li>
        </ul>
        <ul>
          <Navi fill="#fff" width="17px" height="17px" />
          <li>History</li>
        </ul>
      </List>
      <List>
        <div className="logIn">
          <p>If you want to put Like on Videos then you should first Log in</p>
          <LogIn className="logBtn">
            <UserSvg fill="skyblue" width="16px" />
            <p>Login</p>
          </LogIn>
        </div>
      </List>
      <List>
        <ul>
          <Home width="15px" height="15px" />
          <li>Music</li>
        </ul>
        <ul>
          <Home width="15px" height="15px" />
          <li>Sport</li>
        </ul>
        <ul>
          <Home width="15px" height="15px" />
          <li>Videogames</li>
        </ul>
        <ul>
          <Home width="15px" height="15px" />
          <li>News</li>
        </ul>
        <ul>
          <Home width="15px" height="15px" />
          <li>Live</li>
        </ul>
        <ul>
          <Home width="15px" height="15px" />
          <li>Fashion and beauty</li>
        </ul>
        <ul>
          <Home width="15px" height="15px" />
          <li>Education</li>
        </ul>
        <ul>
          <Home width="15px" height="15px" />
          <li>Panorama</li>
        </ul>
      </List>
      <List>
        <ul>
          <VideoSvg width="15px" height="15px" />
          <li>Category channels</li>
        </ul>
      </List>
    </Bar>
  );
};

export default Sidebar;
