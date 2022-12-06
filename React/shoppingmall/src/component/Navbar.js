import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = [
        "여성",
        "Divided",
        "남성",
        "신생아/유아",
        "아동",
        "H&M Home",
        "Sale",
        "지속가능성",
    ];

    let [width, setWidth] = useState(0);

    const navigate = useNavigate();

    const search = (event) => {
        if (event.key === "Enter") {
            //입력한 검색어를 읽어와서
            let keyword = event.target.value;
            //url을 바꿔준다.
            navigate(`/?q=${keyword}`);
        }
    };

    return (
        <div>
            <div className="side-menu" style={{ width: width }}>
                <button className="closebtn" onClick={() => setWidth(0)}>
                    &times;
                </button>
                <div className="side-menu-list" id="menu-list">
                    {menuList.map((menu, index) => (
                        <button key={index}>{menu}</button>
                    ))}
                </div>
            </div>
            <div className="nav-header">
                <div className="burger-menu hide">
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={() => setWidth(250)}
                    />
                </div>
                {authenticate ? (
                    <div
                        className="login-button"
                        onClick={() => setAuthenticate(false)}
                    >
                        <FontAwesomeIcon icon={faUser} />
                        <span>로그아웃</span>
                    </div>
                ) : (
                    <div
                        className="login-button"
                        onClick={() => navigate("/login")}
                    >
                        <FontAwesomeIcon icon={faUser} />
                        <span>로그인</span>
                    </div>
                )}
            </div>
            <div className="nav-section">
                <Link to="/">
                    <img
                        width={100}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png?20130107164928"
                    ></img>
                </Link>
            </div>
            <div className="menu-area">
                <ul className="menu-list">
                    {menuList.map((menu) => (
                        <li>{menu}</li>
                    ))}
                </ul>
                <div className="search-area">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" onKeyPress={(event) => search(event)} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
