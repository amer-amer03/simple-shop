import classNames from "classnames";
import { FC } from "react";
import { Link } from "react-router-dom";
import { IProps } from "../../interfaces/props";
import styles from './index.module.scss';

interface Props extends IProps {
    to: string;
}

const BaseLink: FC<Props> = ({ to, className, children, }) => {
    return (
        <Link className={classNames(styles.baseLink, className)} to={to} >
            {children}
        </Link>
    );
};
export default BaseLink;