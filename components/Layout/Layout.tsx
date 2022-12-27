import { FC } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export interface LayoutProps extends React.HTMLProps<HTMLDivElement> {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-white dark:bg-slate-900">
      {/* <Nav /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
