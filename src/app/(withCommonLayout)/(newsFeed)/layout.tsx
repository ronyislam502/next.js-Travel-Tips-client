import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

const layout = ({ children }: TProps) => {
  return <div>{children}</div>;
};

export default layout;
