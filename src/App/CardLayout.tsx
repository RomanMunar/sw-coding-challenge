import { FC, ReactNode } from "react";

type Props = {
  leftChildren: ReactNode;
  rightChildren: ReactNode;
};

const CardLayout: FC<Props> = ({ leftChildren, rightChildren }) => {
  return (
    <div className="flex flex-row items-start justify-center gap-8 py-20 min-h-screen bg-primary">
      <div className="flex flex-col items-center justify-center gap-8">
        {leftChildren}
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        {rightChildren}
      </div>
    </div>
  );
};

export default CardLayout;
