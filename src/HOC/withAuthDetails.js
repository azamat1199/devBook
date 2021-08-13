import React from "react0";

function withAuth(CustomCompnent, HomePage) {
  return class HOC extends React.Component {
    render() {
      const user = JSON.parse(localStorage.user);
      const token = localStorage.getItem("token");

      return (
        <CustomCompnent
          user={user}
          token={token}
          hide={HomePage}
          signOut={() => {}}
        />
      );
    }
  };
}

export default withAuth;
