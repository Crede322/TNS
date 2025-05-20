import Search from "@/components/header/Search";
import Logo from "@/components/shared/Logo";

export default function Header() {
  return (
    <header className="container-main">
      <div className="flex justify-between gap-[20px] h-[64px]">
        <Logo />
        <Search />
      </div>
    </header>
  );
}
