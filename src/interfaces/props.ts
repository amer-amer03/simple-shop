import { CSSProperties, ReactNode } from "react";

export interface IProps {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    value?: string | number
}