import React from 'react';
import { IProps } from '../../typescript/interfaces/props';
import Header from '../Header';
import Notification from '../Notification';
import styles from './index.module.scss';

interface Props extends IProps { }

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.root}>
            <div  >
                <Header />
            </div>
            <main className={styles.main}>{children}</main>
            <Notification />
        </div>
    )
}

export default Layout;