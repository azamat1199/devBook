import styled from "styled-components";

const StyledSettingsDiv = styled.div`
  display: flex;
  border-radius: 4px 4px 0px 0px;
  align-items: center;
  height: 80px;
  .my-account {
    width: 300px;
  }
  .security {
    cursor: pointer;
    align-items: baseline;
    color: #3699ff;
    border-radius: 4px 4px 0px 0px;
    width: 300px;
    height: 80px;
    margin-right: 5px;
    border-radius: 4px 4px 0px 0px;
    border: 1px solid rgba(243,246,249,0.1);
    &.active {
      border-bottom: none;
      background: hsla(0, 0%, 100%, 0.2);
      .two {
        color: #fff;
        background: #152540;
        h5{
          color: white;
        }
      }
    }
    h5{
      color:hsl(0deg 0% 71%);
    }

    .act {
      padding:20px;
      align-items:baseline;
      }
      .two {
        width: 35px;
        height: 35px;
        display: flex;
        margin: 5px;
        justify-content: center;
        font-size: 23px;
        border-radius: 4px;
        background: #e5eaee;
        color: #3699ff;
        margin-right: 5px;
        margin: 5px;
        h5{
          color:#3699ff;
          margin: 4px;
        }
      }
  }
  .settings {
    cursor:pointer;
    align-items: baseline;
    color: #3699ff;
    border-radius: 4px 4px 0px 0px;
    width: 300px;
    height: 80px;
    margin-right: 5px;
    border-radius: 4px 4px 0px 0px;
    border: 1px solid rgba(243,246,249,0.1);
    &.active {
      border-bottom: none;
      background: hsla(0, 0%, 100%, 0.2);
      .three {
        color: #fff;
        background: #152540;
        h5{
          color: white;
        }
      }
    }
    h5{
      color:hsl(0deg 0% 71%);
    }

    .act {
      padding:20px;
      align-items:baseline;
      }
      .three {
        width: 35px;
        height: 35px;
        display: flex;
        margin: 5px;
        justify-content: center;
        font-size: 23px;
        border-radius: 4px;
        background: #e5eaee;
        color: #3699ff;
        margin-right: 5px;
        margin: 5px;
        h5{
          color:#3699ff;
          margin: 4px;
        }
      }
  }

  .my-account {
    cursor:pointer;
    align-items: baseline;
    border-radius: 4px;
    color: #3699ff;
    margin-right: 5px;
    border-radius: 4px 4px 0px 0px;
    border: 1px solid rgba(243,246,249,0.1);
      &.active {
        border-bottom: none;
        background: hsla(0, 0%, 100%, 0.2);
        
        .one {
          color: #fff;
          background: #152540;
        }
      }
      h5{
        color:hsl(0deg 0% 71%);
      }

    .act {
    padding:20px;
    align-items:baseline;
    }
    .one {
      color:hsl(0deg 0% 71%);
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      font-size: 23px;
      border-radius: 4px;
      background: #e5eaee;
      color: #3699ff;
      margin-right: 5px;
    }
  }
  }
`;

const StyledFormSide = styled.div`
  .my-profile {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #212121;
  }
  .first {
    font-weight: normal;
    font-size: 17px;
    line-height: 19px;
    color: #464e5f;
    display: flex;
  }
  .inp {
    width: 708px;
    height: 44px;
    background: #f3f6f9;
    border-radius: 4px;
    font-weight: normal;
    font-size: 15px;
    line-height: 21px;
    color: #464e5f;
    padding: 16px;
  }
  .numbr {
    background: #f3f6f9;
    border-radius: 4px;
    font-weight: normal;
    font-size: 15px;
    line-height: 21px;
    color: #464e5f;
    padding: 12px;
  }
  .save {
    width: 142px;
    height: 43px;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;
    color: #ffffff;
    background: #152540;
    border-radius: 4px;
  }
`;

const StyledImg = styled.div`
  .accountImg {
    border-radius: 90px;
  }
  div {
    width: 0;
    height: 0;
    .cameraImg {
      position: relative;
      top: -36px;
      left: 115px;
    }
  }
`;

const StyledSettings = styled.div`
  .my-settings {
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    color: hsla(0, 0%, 100%, 0.6);
  }
  .opt {
    .language {
      display: flex;
      font-weight: normal;
      font-size: 15px;
      line-height: 19px;
      color: hsla(0, 0%, 100%, 0.6);
    }
    .select {
      width: 708px;
      height: 44px;
      left: 248.01px;
      top: 172px;
      color: #464e5f;
      background: #f3f6f9;
      border-radius: 4px;
    }
  }
`;

const StyledSecurity = styled.div`
  .change {
    color: hsla(0, 0%, 100%, 0.6);
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
  }
  .scrt-email {
    display: flex;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    color: #464e5f;
  }
  .security-email {
    width: 708px;
    height: 44px;
    background: #f3f6f9;
    border-radius: 4px;
  }
  .current-password {
    width: 708px;
    height: 44px;
    background: #f3f6f9;
    border-radius: 4px;
  }
  .current-password {
    width: 708px;
    height: 44px;
    background: #f3f6f9;
    border-radius: 4px;
  }
  .new-password {
    width: 340px;
    height: 44px;
    background: #f3f6f9;
    border-radius: 4px;
    padding: 20px;
  }
  .confirm-password {
    width: 340px;
    height: 44px;
    background: #f3f6f9;
    border-radius: 4px;
    padding: 20px;
  }
  .scrt-password {
    display: flex;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    color: #464e5f;
  }
  .pswrd {
    margin-right: 26px;
  }
  .save {
    width: 142px;
    height: 43px;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;
    color: #ffffff;
    background: #152540;
    border-radius: 4px;
  }
`;

export {
  StyledSettingsDiv,
  StyledFormSide,
  StyledImg,
  StyledSettings,
  StyledSecurity,
};
