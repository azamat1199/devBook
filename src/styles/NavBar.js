import styled from "styled-components";
import ornament from "./../components/img/ornament.svg";

const NavBarItem = styled.ul`
  font-family: HelveticaNeueCyr;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 144.4%;
  border: none;
  background: none;
  color: #ffffff;

  .navLinks {
    font-weight: 300;
    font-size: 16px;
    font-family: sans-serif;
    line-height: 144.4%;
    text-decoration: none;
    color: white;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 25px !important;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      height: 2px;
      left: 0;
      top: 30px;
      width: 0%;
      background-color: white;
      visibility: hidden;
      transition: 0.5s;
    }
    &:hover {
      transition: 0.5s;
      &::before {
        width: 100%;
        transition: 0.5s;
        visibility: visible;
      }
    }
  }

  //   navLinks  &:hover,
  //     &.active,
  //   {
  //     content: "";
  //     position: absolute;
  //     width: 0%;
  //     bottom: -10px;
  //     left: 0;
  //     height: 2px;
  //     color: #fff;
  //     background-color: #ffffff;d
  //   }
`;

const StyledHeader = styled.header`
  background-color: #191919;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  .head-img {
    border-radius: 28px;
  }
  .ant-dropdown-trigger {
    color: white;
  }
`;

const StyledDiv = styled.div`
  background-image: url(${ornament});
  height: 322px;
  display: flex;
  background: radial-gradient(
    85.43% 1678.66% at 98.07% 50%,
    #2f2f2f 0%,
    #171717 100%
  );
  justify-content: space-between;
  padding: 0;
  box-shadow: 0px 4px 73px rgb(0 0 0 / 25%);
  border-radius: 17px;
`;

const StyledBioImg = styled.div`
  h5 {
    font-family: Steinbeck;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 144.4%;

    color: #c9ac8c;
  }

  h6 {
    font-family: Steinbeck;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 144.4%;
    color: #ffffff;
  }
`;

const StyledBioText = styled.div`
  h4 {
    font-family: Steinbeck;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 144.4%;
    color: #c9ac8c;
  }
  span {
    display: flex;
    color: #ffffff;
    align-items: baseline;
    font-family: Steinbeck;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 144.4%;
    h5 {
      color: #a5a5a5;
    }
  }
`;

export { NavBarItem, StyledHeader, StyledDiv, StyledBioImg, StyledBioText };
