import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

const defaultExclude = {
  top: false,
  right: false,
  bottom: false,
  left: false,
  all: false,
};

type Positions = keyof typeof defaultExclude;
type Excluded = Record<Positions, boolean>;

interface PaddedProps extends React.ComponentPropsWithoutRef<"div"> {
  exclude?: Partial<Excluded>;
}

const paddingClasses: Record<Positions, string> = {
  top: "!pt-0",
  right: "!pr-0",
  bottom: "!pb-0",
  left: "!pl-0",
  all: "!p-0",
};

const Padded = ({
  exclude = {},
  className,
  children,
  ...rest
}: PaddedProps) => {
  const mergedExclude: Excluded = { ...defaultExclude, ...exclude };

  const paddings = twMerge(
    "p-8 lg:p-20",
    clsx(
      Object.entries(mergedExclude)
        .filter(([_, isExcluded]) => isExcluded)
        .map(([key]) => paddingClasses[key as Positions]),
      className
    )
  );

  return (
    <div className={paddings} {...rest}>
      {children}
    </div>
  );
};

export default Padded;
