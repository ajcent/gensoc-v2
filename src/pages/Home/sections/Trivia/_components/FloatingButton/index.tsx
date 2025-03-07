import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const FloatingButton = ({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...rest}
      className={cn(
        "absolute h-full w-fit box-border",
        "grid place-items-center",
        "p-2 sm:p-4",
        "group hover:bg-black/70",
        className
      )}
      role="button"
    >
      {children}
    </div>
  );
};

export default FloatingButton;
