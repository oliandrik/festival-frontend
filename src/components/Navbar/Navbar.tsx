import classNames from "classnames";

import { NavbarProps } from "./Navbar.types";

import styles from "./Navbar.module.scss";

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className={styles.navigation}>
      <div className={classNames(styles.innerBlock, "flexbox")}>
        <p>LOGO</p>
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
