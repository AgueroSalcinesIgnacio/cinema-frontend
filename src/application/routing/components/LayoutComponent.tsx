import { Outlet } from "react-router-dom";

const LayoutComponent = () => {
  return (
    <>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default LayoutComponent;
