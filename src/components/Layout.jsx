import { Suspense } from "react";
import { AppBar } from "./AppBar/AppBar";
import { Outlet } from "react-router";
import { Loader } from "./Loader/Loader";

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};