import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const View = ({ children }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const onOpenSidebar = () => {
    setSidebarIsOpen(true);
  };

  const onCloseSidebar = () => {
    setSidebarIsOpen(false);
  };

  return (
    <div>
      <Header onOpenSidebar={onOpenSidebar} />
      <Sidebar isOpen={sidebarIsOpen} onCloseSidebar={onCloseSidebar} />
      <main className="p-4">{children}</main>
    </div>
  );
};
