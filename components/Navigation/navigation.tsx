import Link from "next/link";
import { ImHome } from "react-icons/im";
import { ImUser } from "react-icons/im";
import { ImTrophy } from "react-icons/im";
import { ImList2 } from "react-icons/im";

const MainNav = () => {
  return (
    <nav className="nav">
      <ul className="nav_list">
        <li className="nav_list-item">
          <Link href="/" className="nav_list-item_container">
            <ImHome className="nav_list-item_container_icon" />
            <span className="nav_list-item_container_text">General</span>
          </Link>
        </li>
        <li className="nav_list-item">
          <Link href="/my-quizzies" className="nav_list-item_container">
            <ImList2 className="nav_list-item_container_icon" />
            <span className="nav_list-item_container_text">My Quizzies</span>
          </Link>
        </li>
        <li className="nav_list-item">
          <Link href="/leadboard" className="nav_list-item_container">
            <ImTrophy className="nav_list-item_container_icon" />
            <span className="nav_list-item_container_text">Leadboard</span>
          </Link>
        </li>
        <li className="nav_list-item">
          <Link href="/user/profile/54" className="nav_list-item_container">
            <ImUser className="nav_list-item_container_icon" />
            <span className="nav_list-item_container_text">Profile</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
