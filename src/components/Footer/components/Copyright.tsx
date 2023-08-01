import styles from "../Footer.module.scss";

const Copyright = () => {
  return (
    <div className={styles.copyright}>
      <img src="../../../public/Livent.svg" alt="" />
      <p className={styles.description}>
        it’s a place where you can find tickets and information about event
      </p>
      <a href="">Read more</a>
      <p aria-label="Copyright 2023 Livent, Designed by os">
        Copyright 2023{" "}
        <span className={styles.brand} aria-hidden="true">
          Livent
        </span>
        , Designed by os
      </p>
    </div>
  );
};

export default Copyright;
