import Image from "next/image";
import Link from "next/link";
import { getImagePrefix } from "@/utils/utils";

const Logo = () => {
  return (
    <Link href="/" className="header-logo block w-full">
      <Image
        src={`${getImagePrefix()}images/logo/logo.svg`}
        alt="The Brand Pulse"
        width={160}
        height={50}
        quality={100}
        style={{ width: "auto", height: "auto" }}
        className="w-full dark:hidden"
      />
      <Image
        src={`${getImagePrefix()}images/logo/logo-white.svg`}
        alt="The Brand Pulse"
        width={160}
        height={50}
        quality={100}
        style={{ width: "auto", height: "auto" }}
        className="hidden w-full dark:block"
      />
    </Link>
  );
};

export default Logo