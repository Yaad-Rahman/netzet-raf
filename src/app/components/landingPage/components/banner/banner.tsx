"use client";

export const Banner = () => (
  <div className="flex md:block justify-center items-center font-figtree w-full h-[76px] md:h-[46px] bg-linear-to-r/srgb from-banner-red from-1% to-banner-blue to-98%">
    <div className="text-center md:text-start block md:flex items-center justify-center h-fit md:h-full max-w-[350px] md:max-w-full text-white text-base md:text-[22px] font-extrabold leading-[120%]">
      🚀&nbsp;<span className="text-text-teal">FRESH BEGINNINGS SALE:</span>
      &nbsp;
      <span className="font-semibold">
        Extra 25% OFF,
        <br className="block md:hidden" />
        <span className="pl-6 md:pl-0">
          Limited Spots - start your journey today!
        </span>
      </span>
    </div>
  </div>
);
