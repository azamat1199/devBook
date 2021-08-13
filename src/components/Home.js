// import react from "react ";
import { Link } from "react-router-dom";

import {
  NavBarItem,
  StyledHeader,
  StyledDiv,
  StyledBioImg,
  StyledBioText,
} from "./../styles/NavBar";
import badiyat from "./img/Badiiyat.svg";
import shoir from "./img/shoir.svg";
import bio from "./img/bio.svg";
import circle from "./img/circle.svg";

export default function Home() {
  return (
    <div>
      <div>
        <StyledDiv className="container bio-form">
          <div className="bio d-flex">
            <StyledBioImg className="bio-img">
              <img src={bio} alt="Bio" />
              <h5>Oltin kitobxon</h5>
              <h6>186 ta kitob o’qigan </h6>
            </StyledBioImg>
            <StyledBioText className="bio-text">
              <h4>Farruxbek Abdullayev</h4>
              <span className="bio-text-inner">
                Tavallud:
                <h5> February 08, 1999</h5>
              </span>
              <span>
                Manzili:
                <h5> Jizzax</h5>
              </span>
              <span>
                Bio:
                <h5> Graphic designer and Developer</h5>
              </span>
            </StyledBioText>
          </div>
          <div className="head-img">
            <img src={circle} alt="circle" />
          </div>
        </StyledDiv>
      </div>
      {/* ================ Below Book ============== */}
      <div>
        <div className="container"></div>
      </div>
    </div>
  );
}
