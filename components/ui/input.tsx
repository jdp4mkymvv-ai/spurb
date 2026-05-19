import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-12 rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/35 outline-none transition focus:border-[#f26f25]",
        className
      )}
      {...props}
    />
  )
);

Input.displayName = "Input";

export { Input };
