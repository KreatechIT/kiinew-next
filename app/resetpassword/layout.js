import React from "react";

export const metadata = {
  title: "Reset Password",
  description: "Reset Password",
};

function Layout({ children }) {
  return (
    <div>
      <section>{children}</section>
    </div>
  );
}

export default Layout;
