import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: AiOutlineHome,
  },
  {
    name: "About",
    href: "/about",
    icon: BsPeople,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: TiContacts,
  },
];

export default function SideBar() {
  return (
    <div>
      <aside className="sidebar">
        <div className="sidebar_top">
          <Image
            src="/movie_logo.png"
            width={80}
            height={80}
            className="sidebar_logo"
            alt="logo"
          />
          <p className="sidebar_logo_name">Movie Town</p>
        </div>
        <ul className="sidebar_list">
          {sidebarItems.map(({name, href, icon: Icon}) => {
            return (
              <li className="sidebar_item" key={name}>
                <Link href={href} className="sidebar_link">
                  <span className="sidebar_icon">
                    <Icon />
                  </span>
                  <span className="sidebar_name">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
}
