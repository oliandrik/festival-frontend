import classNames from "classnames";

import HorizontalLine from "../HorizontalLine/HorizontalLine";

import { NavbarProps } from "./Navbar.types";

import styles from "./Navbar.module.scss";

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className={styles.navigation}>
      <div className={classNames(styles.info, "flexbox")}>
        <div>
          <p>livent@gmail.com</p>
        </div>
        <div>
          <a href="Login">Login</a>
        </div>
      </div>
      <HorizontalLine />
      <div className={classNames(styles.innerBlock, "flexbox")}>
        <div className={styles.logo}>
          <img src="../../public/Livent.svg" />
        </div>
        <div className={styles.hamburger}>
          <div className={styles.hamburgerLine}></div>
        </div>
        <div className={classNames(styles.links, "flexbox")}>
          {links &&
            links.map((link, index) => (
              <div key={index}>
                <a href={link.url}>{link.text}</a>
              </div>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
