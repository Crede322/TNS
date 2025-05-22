import { ReactNode } from "react";

type HeaderButtonProps = {
  children: ReactNode;
};

export default function HeaderButton({ children }: HeaderButtonProps) {
  return (
    <button className="h-[60px] w-[90px] flex flex-col items-center justify-center rounded-[12px] cursor-pointer transition hover:bg-[var(--color-lightgray)]">
      {children}
    </button>
  );
}
