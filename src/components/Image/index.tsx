import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

interface ImageComponentProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image = forwardRef<HTMLImageElement, ImageComponentProps>(
  ({ className, ...props }, ref) => {
    return (
      <img
        ref={ref}
        className={cn("block w-full h-full object-cover", className)}
        {...props}
      />
    );
  }
);

Image.displayName = "Image";

export default Image;
