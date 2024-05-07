import React from "react";

export const metadata = {
  title: "Shop",
  description: "Shop",
};

function layout({ children }) {
  return (
    <div>
      <section>{children}</section>
    </div>
  );
}

export default layout;
