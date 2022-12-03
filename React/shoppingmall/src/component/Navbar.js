import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
    return (
        <div>
            <div>
                <FontAwesomeIcon icon={faUser} />
            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Navbar;
