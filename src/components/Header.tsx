import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import SearchInput from "./SearchInput";

const Header: FC = () => {
  return (
    <nav className="flex justify-between items-center py-1">
      <Link href="/">
        <div className="relative w-[200px] h-[50px]">
          <Image
            src="/img/logo.png"
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
      </Link>
      <div className="flex">
        <SearchInput />
        <Link href="/login" className="ml-20">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Header;
