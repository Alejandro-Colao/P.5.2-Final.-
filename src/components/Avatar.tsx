import * as React from "react";

export const Avatar = ({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`} {...props}>
    {children}
  </div>
);

export const AvatarImage = ({ className = "", src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img className={`aspect-square h-full w-full ${className}`} src={src} alt={alt} {...props} />
);

export const AvatarFallback = ({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`flex h-full w-full items-center justify-center rounded-full bg-muted ${className}`} {...props} />
);
