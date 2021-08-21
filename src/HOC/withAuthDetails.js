import React from "react";

function withAuth(CustomCompnent, HomePage) {
  const user = JSON.parse(localStorage.getItem("user"));
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

export default withAuth;
