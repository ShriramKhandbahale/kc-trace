import { Outlet } from "react-router-dom";
import { Footer } from "../components";

const RootLayout = () => (
  <>
    <Outlet />
    <Footer />
  </>
)

export default RootLayout;