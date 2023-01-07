import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSchool,
    faUser,
    faMobile,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";

const Leftbox = () => {
    return (
        <div>
            <div className="image">
                <img
                    src="https://drive.google.com/uc?id=1fCTaiEWcbIXwFkTwL0TeMRAKTVll9YAB"
                    width="300px"
                />
            </div>
            <div className="name">이&emsp;승&emsp;희</div>
            <div className="info">
                <div className="detailed-info">
                    <div>
                        <FontAwesomeIcon icon={faUser} className="info-icon" />
                        1998.12.25. Seoul
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon={faSchool}
                            className="info-icon"
                        />
                        동아대학교 전자공학과 졸업
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon={faSchool}
                            className="info-icon"
                        />
                        부산 IT 교육센터 수료
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon={faMobile}
                            className="info-icon"
                        />
                        010 - 2061 - 4198
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="info-icon"
                        />
                        <a href="mailto: gkfajsl1225@naver.com">
                            gkfajsl1225@naver.com
                        </a>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="info-icon"
                        />
                        <a href="https://github.com/Judyy22" target="_blank">
                            https://github.com/Judyy22
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leftbox;
