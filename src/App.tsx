import { useState } from "react";
import Home from "./Home";
import TeamInfo from "./TeamInfo";
import Resources from "./Resources";
import AboutUs from "./AboutUs";

const tabComponents = {
  Home,
  "Team Info": TeamInfo,
  Resources,
  "About Us": AboutUs,
};

import { HamburgerIcon } from "./HamburgerIcon";

function App() {
  const tabs = [
    "Home",
    "Team Info",
    "Resources",
    "About Us",
  ];
  const [activeTab, setActiveTab] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const ActiveComponent = tabComponents[activeTab as keyof typeof tabComponents];

  const handleMenuTab = (tab: string) => {
    setActiveTab(tab);
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="min-h-screen max-w-full overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 flex justify-center items-stretch bg-brand h-20 gap-4 md:gap-8 lg:gap-12 z-50 max-w-full overflow-x-hidden box-border overflow-y-hidden border-b-4 border-white lg:border-b-0">
        <img
          src={`${import.meta.env.BASE_URL}logo-white.svg`}
          alt="GLCWSA Logo"
          className="absolute left-2 top-0 p-2 w-20 h-20 object-contain drop-shadow-lg cursor-pointer max-h-20 z-50"
          onClick={() => {
            window.scrollTo({ top: 0 });
            setTimeout(() => window.location.reload(), 50);
          }}
        />
        {/* Desktop Tabs */}
        <div className="hidden lg:flex flex-1 min-w-0 justify-evenly items-center pl-[15vw] pr-[5vw] h-20 overflow-x-hidden overflow-y-hidden border-b-4 border-white">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`relative bg-transparent border-none text-white font-medium text-[20px] px-6 py-3 cursor-pointer outline-none transition-colors duration-200 group ${activeTab === tab ? "opacity-100" : "opacity-70"}`}
              onClick={() => {
                setActiveTab(tab);
                window.scrollTo({ top: 0 });
              }}
            >
              {tab}
              <span
                className="absolute left-1/2 -translate-x-1/2 bottom-1 h-[2px] bg-white rounded transition-all duration-300 w-0 group-hover:left-0 group-hover:translate-x-0 group-hover:w-full"
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
        {/* Hamburger Icon for Mobile */}
        <button
          className="lg:hidden mx-auto p-3 bg-transparent border-none outline-none h-20 max-h-20 overflow-y-hidden z-50"
          style={{ minWidth: 48, minHeight: 48 }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <HamburgerIcon open={menuOpen} size={40} />
        </button>
        {/* Dropdown below Hamburger */}
        {menuOpen && (
          <div className="fixed left-0 right-0 top-20 w-full z-40">
            <div className="bg-brand py-2 px-4 flex flex-col items-center animate-slideDown w-full max-h-[calc(100vh-80px)] overflow-y-auto border-b-4 border-white">
              <nav className="flex flex-col gap-4 w-full items-center z-30">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`relative z-30 bg-transparent border-none text-white font-medium text-base text-[20px] px-2 py-2 cursor-pointer outline-none transition-colors duration-200 group ${activeTab === tab ? "opacity-100" : "opacity-70"}`}
                    onClick={() => handleMenuTab(tab)}
                  >
                    {tab}
                    <span
                      className="absolute left-1/2 -translate-x-1/2 bottom-1 h-[2px] bg-white rounded transition-all duration-300 w-0 group-hover:left-0 group-hover:translate-x-0 group-hover:w-full"
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </nav>
      <div>
        <ActiveComponent />
      </div>
    </div>
  );
}

export default App
