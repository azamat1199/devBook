import React from "react";
import accountImg from "../img/account-img.svg";
import camera from "../img/Camera.svg";
import Separator from "../img/Separator.svg";
import { StyledFormSide, StyledImg } from "../../styles/StyledSettings";

export default function Account() {
  return (
    <div className="container d-flex">
      <StyledImg>
        <img className="accountImg" src={accountImg} alt="account info" />
        <div>
          <img className="cameraImg" src={camera} alt="camera" />
        </div>
      </StyledImg>
      <StyledFormSide className="ms-5">
        <h4 className="my-profile">My Profile</h4>
        <div className="mb-3">
          <label className=" first form-label">First Name</label>
          <input type="text" className="inp" placeholder="John" />
        </div>
        <div className="mb-3">
          <label className="first form-label">Last Name</label>
          <input type="text" className="inp" placeholder="Wick" />
        </div>
        <div className="d-flex">
          <div className="me-5">
            <label className=" first form-label">Phone</label>
            <input type="number" className="numbr" placeholder="+61412345678" />
          </div>
          <div className="">
            <label className="first form-label">Email</label>
            <input
              type="email"
              className="numbr"
              placeholder="john.wick@reeves.com"
            />
          </div>
        </div>
        <div className="mt-4 mb-4">
          <img src={Separator} alt="line" />
        </div>
        <div>
          <button className="save">Save Changes</button>
        </div>
      </StyledFormSide>
    </div>
  );
}

//   const [form] = Form.useForm();
//   const [formLayout, setFormLayout] = useState("horizontal");

//   const onFormLayoutChange = ({ layout }) => {
//     setFormLayout(layout);
//   };

//   const formItemLayout =
//     formLayout === "horizontal"
//       ? {
//           labelCol: {
//             span: 4,
//           },
//           wrapperCol: {
//             span: 14,
//           },
//         }
//       : null;
//   const buttonItemLayout =
//     formLayout === "horizontal"
//       ? {
//           wrapperCol: {
//             span: 14,
//             offset: 4,
//           },
//         }
//       : null;

// <Form
//   {...formItemLayout}
//   layout={formLayout}
//   form={form}
//   initialValues={{
//     layout: formLayout,
// }}
//   onValuesChange={onFormLayoutChange}
// >
//   <Form.Item label="My Profile" name="layout"></Form.Item>
//   <Form.Item label="First Name">
//     <Input placeholder="John" />
//   </Form.Item>
//   <Form.Item classNameName="d-flex" label="Last Name">
//     <Input placeholder="Wick" />
//   </Form.Item>
//   <div classNameName="d-flex">
//     <Form.Item
//       name="phone"
//       label="Phone Number"
//       rule={[
//         { required: true, message: "Please input your phone number" },
//       ]}
//     >
//       <Input placeholder="Phone" />
//     </Form.Item>
//     <Form.Item
//       name="email"
//       label="Email"
//       rule={[
//         { required: true, message: "Please input your phone email" },
//       ]}
//     >
//       <Input placeholder="Email" />
//     </Form.Item>
//   </div>
//   <img src={separator} alt="separator line" />
//   <Form.Item {...buttonItemLayout}>
//     <Button type="primary">Save Changes</Button>
//   </Form.Item>
// </Form>
