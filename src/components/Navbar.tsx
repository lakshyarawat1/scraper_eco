import Image from "next/image";
import Link from "next/link";
import React from "react";

const navIcons = [
  {
    src: "/assets/icons/search.svg",
    alt: "search",
    route: "/",
  },
  {
    src: "/assets/icons/black-heart.svg",
    route: "/notifications",
    alt: "heart",
  },
  {
    route: "/login",
    src: "/assets/icons/user.svg",
    alt: "user",
  },
];

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center px-6 md:px-20 py-4">
        <Link href="/" className="flex gap-3">
          <Image
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
          />
          <p className="font-bold text-xl">
            Scrapper<span className="text-red-400">Eco</span>
          </p>
        </Link>
        <div className="flex gap-5 items-center ">
          {navIcons.map((icon) => (
            <Link
              key={icon.alt}
              href={icon.route}
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={28}
                height={28}
                className="object-contain"
              />
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
