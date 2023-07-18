import React from "react";

export default function NavbarComponent() {
  const pages = ["Home", "About", "Services", "Domain", "Pricing", "FAQ"];
  return (
    <div className="flex w-screen bg-[#003B73] px-6 py-5 items-center justify-around">
      <div className="text-white">
        <h2 className="text-[24px]">DREAMIT ENGINEERING</h2>
      </div>
      <div>
        {pages.map((pages, index) => (
          <button key={index} className="px-5 text-white font-[Poppins]">
            {pages}
          </button>
        ))}
      </div>
      <div>
        <button className="font-bold text-[12px] px-6 rounded-full border-2 border-[#BFD7ED] text-[#BFD7ED] py-1 mr-5">
          Login
        </button>
        <button className="font-bold text-[12px] bg-[#BFD7ED] text-[#003B73] px-4 rounded-full py-1 border-4 border-double border-[#003B73]">
          Register
        </button>
      </div>
    </div>
  );
}
