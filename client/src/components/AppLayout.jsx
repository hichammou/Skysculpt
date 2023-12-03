import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <>
      <div className="main">
        <div className="gradient" />
      </div>
      <main className="app relative">
        <Header />
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
