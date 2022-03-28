import React from "react";
import { IProps } from "../../interfaces/props";
import Header from "../Header";
import Notification from "../Notification";
import styles from "./index.module.scss";

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <div>
        <Header />
      </div>
      <main className={styles.main}>{children}</main>
      <Notification />
    </div>
  );
};

export default Layout;
