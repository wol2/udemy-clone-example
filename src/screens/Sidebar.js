import React, { useState } from "react";
import logo from "../img/logo-coral.svg";

function Sidebar() {
  const [Nav, setNav] = useState([
    { label: "Home", slug: "/", icon: "icon-home" },
    { label: "Discover", slug: "discover", icon: "icon-list2" },
    { label: "Categories", slug: "cates", icon: "icon-price-tag" },
    { label: "My Courses", slug: "my courses", icon: "icon-briefcase" },
  ]);

  const [CurrentPagte, setCurrentPagte] = useState("/");

  var navigation = [];
  for (let i = 0; i < Nav.length; i++) {
    console.log(Nav);
    navigation.push(
      <li key={"nav " + i + " " + Nav[i].slug}>
        <a
          href={Nav[i].slug}
          className={
            "aic link noul flex c333" +
            (CurrentPagte === Nav[i].slug ? " on" : "")
          }
        >
          <div className={"ico s20 " + Nav[i].icon} />
          <h2 className="lbl s20">{Nav[i].label}</h2>
        </a>
      </li>
    );
  }

  return (
    <div className="Sidebar fixed">
      <a href="a" className="logo bl">
        <img src={logo} className="bl" />
      </a>

      <ul className="nav">{navigation}</ul>

      <div className="updated-course flex aic">
        <div className="ico icon-power s15 cfff" />
        <div className="lbl c15 fontb c333">
          Updated Courses
          <h2 className="author s13 c777">by Chris Park</h2>
        </div>
      </div>

      <div className="stats aic flex">
        <div className="stas-box flex">
          <div className="ico ico-points s24 icon-shield"></div>
          <h2 className="val s15 c333 fontb">1800</h2>
          <h2 className="lbl s13 c777">points</h2>
        </div>

        <div className="stas-box flex">
          <div className="ico ico-battery s24 icon-ticket"></div>
          <h2 className="val s15 c333 fontb">45.2%</h2>
          <h2 className="lbl s13 c777">complete</h2>
        </div>
      </div>

      <div className="me flex aic">
        <div className="photo cfff s24">
          <img
            src="https://placeimg.com/100/100/people"
            className="bl"
            alt="peopleImage"
          />
        </div>
        <div className="lbl c15 fontb c333">
          Chris Park
          <h2 className="uname s13 c777">@Chris Park</h2>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
