import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Main = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Main;
