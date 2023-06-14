import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



const Navbar = ({ nowLogin, setNowLogin }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "지속가능성",
  ];
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
    setNowLogin(false);
  };
  const goToHome = () => {
    navigate("/");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      console.log(keyword);
      navigate(`/?q=${keyword}`);
    }
  };

  const menuBoxOpen=()=> {
    setOpen(!open)
    console.log("메뉴창", open)
  }
  

  return (
    <div>
      <div>
        <div className="navbar-menu-icon" onClick={()=>menuBoxOpen()}>
        <FontAwesomeIcon icon={faBars} />
        </div>
        <div>
            <ul className="side-menu-bar" style={{visibility:`${open?"visible":"hidden"}`}}>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        </div>
        <div onClick={() => goToLogin()} className="login-box">
        <FontAwesomeIcon icon={faUser} />
        <div>{nowLogin == true ? "로그아웃" : "로그인"}</div>
        </div></div>
      <div className="hnm-logo">
        <img
          onClick={() => goToHome()}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
        ></img>
      </div>
      <div className="search-box">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" onKeyPress={(event) => search(event)} />
      </div>
      <div className="menu-bar">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
