import React from "react";
import { Outlet } from "react-router-dom";

export default function Authentication() {
  return (
    <div>
      <h1 className="text-center">Authentication</h1>

      <Outlet />
    </div>
  );
}
