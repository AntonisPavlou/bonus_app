"use client";

import {
  HomeIcon,
  TicketIcon,
  GlobeAltIcon,
  SunIcon,
  MapPinIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

const links = [
  { name: "Αρχική", href: "/", icon: HomeIcon },
  { name: "Youth Pass", href: "/dashboard/youth-pass", icon: TicketIcon },
  {
    name: "Τουρισμός για Όλους",
    href: "/dashboard/tourism-for-all",
    icon: GlobeAltIcon,
  },
  {
    name: "Κοινωνικός Τουρισμός",
    href: "/dashboard/social-tourism",
    icon: SunIcon,
  },
  { name: "Χίος & Κύθηρα Pass", href: "/dashboard/xios", icon: MapPinIcon },
  {
    name: "Ευρωπαϊκή Κάρτα Νέων",
    href: "/dashboard/eu-pass",
    icon: IdentificationIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-12 grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
