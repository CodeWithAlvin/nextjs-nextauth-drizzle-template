import React, { ReactNode, HTMLProps } from 'react';
import {cn} from "@/lib/utils"

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className="", ...props }) => {
  return (
    <div className={cn("flex justify-center items-center w-full h-full",className)} {...props} >
      {children}
    </div>
  );
};

export {Container};

