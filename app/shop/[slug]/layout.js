import React from "react";

export const metadata = {
  title: "Product",
  description: "Product",
};

function layout({ children, params }) {
  return (
    <div>
      <section>{children}</section>
    </div>
  );
}

export default layout;
