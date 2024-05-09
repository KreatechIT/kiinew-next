import React from "react";

export const metadata = {
  title: "New Password",
  description: "New Password",
};

function Layout({ children }) {
  return (
    <div>
      <section>{children}</section>
    </div>
  );
}

export default Layout;
