import { ReactNode } from "react";
import Navigation from "./Navigation";
import SocialIcons from "./SocialIcons";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>{children}</main>
      <SocialIcons />
      <Footer />
    </div>
  );
};

export default Layout;
