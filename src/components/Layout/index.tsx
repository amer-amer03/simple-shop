import React from 'react';
import { IProps } from '../../typescript/interfaces/props';
import Header from '../Header';
import styles from './index.module.scss';

interface Props extends IProps { }

const Layout: React.FC<Props> = ({ children, ...props }) => {
    return (
        <div className={styles.root}>
            <div  {...props}>
                <Header />
            </div>
            <main className={styles.main}>{children}</main>
        </div>
    )
}

export default Layout;