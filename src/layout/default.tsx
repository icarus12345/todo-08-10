import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  console.log('Layout');
  
  return (
    <>
      <Outlet />
    </>
  )
};

export default DefaultLayout;
