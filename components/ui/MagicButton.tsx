import React from "react";
import Link from "next/link";

export const MagicButton = () => {
  return (
    <Link href="/explore">
      <button className="shadow-[inset_0_0_0_2px_#616467] text-2xl px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white transition duration-200">
        Start
      </button>
    </Link>
  );
};
