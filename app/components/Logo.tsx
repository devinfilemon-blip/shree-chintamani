import Image from "next/image";

type LogoProps = {
  variant?: "default" | "light";
  className?: string;
};

export default function Logo({ variant = "default", className = "" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Shree Chintamani Logistics & Exports India Pvt. Ltd."
        width={280}
        height={72}
        className={`h-12 sm:h-14 lg:h-[4.25rem] w-auto object-contain object-left ${
          isLight ? "bg-white rounded-md px-3 py-1.5" : ""
        }`}
        priority
      />
    </div>
  );
}
