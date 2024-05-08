import React from "react";

export const metadata = {
  title: "Profile",
  description: "Profile",
};

function layout({ children }) {
  return (
    <div>
      <section>{children}</section>
    </div>
  );
}

export default layout;
