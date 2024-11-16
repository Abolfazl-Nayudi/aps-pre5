import React from "react";
import { Outlet } from "react-router-dom";

export default function BlogsPage() {
  return (
    <div>
      <Outlet />
      <h1>Blogs page</h1>
    </div>
  );
}
