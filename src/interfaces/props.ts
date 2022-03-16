import { ReactNode } from "react";

export interface IProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    value?: string | number
}