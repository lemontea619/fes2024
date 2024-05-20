import { HeaderMenu } from "./HeaderMenu";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 px-16 lg:px-32 h-32 text-4xl flex justify-between items-center">
      <Link href="/" className="font-josefinSlab">
        myu fes&apos;24
      </Link>
      <HeaderMenu />
    </header>
  );
}
