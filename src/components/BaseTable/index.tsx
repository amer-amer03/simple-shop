import { FC } from "react";
import { IProps } from "../../interfaces/props";

interface Props extends IProps {
  headers: string[];
}
const BaseTable: FC<Props> = ({ headers }): JSX.Element => {
  return <div></div>;
};

export default BaseTable;
