import { useState } from "react";
import logo from "../../public/logo.png";
import { GoArrowRight } from "react-icons/go";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState(window.location.pathname);
  const navlinks = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About us",
      link: "/about-us",
    },
    {
      id: 3,
      name: "Our Works",
      link: "/our-works",
    },
    {
      id: 4,
      name: "Clients",
      link: "/clients",
    },
    {
      id: 5,
      name: "Team",
      link: "/team",
    },
    {
      id: 6,
      name: "Careers",
      link: "/careers",
    },
    {
      id: 7,
      name: "Contact us",
      link: "/contact-us",
    },
  ];
  return (
    <div className="px-32 py-4 top-0 sticky z-30 flex items-center justify-between">
      <img src={logo} className="" alt="" />
      <div className="flex gap-6 items-center  z-40">
        {navlinks?.map((nav) => {
          return (
            <div
              // to={nav?.link}
              onClick={() => setActiveNav(nav?.link)}
              className={`text-sm  cursor-pointer  ${
                activeNav === nav?.link
                  ? "text-[#4E5BA6] font-medium"
                  : "text-[#596273] hover:text-[#4E5BA6]"
              } `}
              key={nav?.id}
            >
              {nav?.name}
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-3 hover:text-[#4E5BA6] text-[#596273] text-sm  cursor-pointer">
        Lets Collaborate <GoArrowRight size={20} />
      </div>
    </div>
  );
}
