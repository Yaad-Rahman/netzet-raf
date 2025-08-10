import Image from "next/image";
import Link from "next/link";
import { List } from "./components/list";
import { ChevronRight } from "@/app/utils/icons/chevronRight";
import { Burger } from "@/app/utils/icons/burger";

export const LandingPage = () => {
  return (
    <div className="w-full max-w-screen-sm md:max-w-screen-md lg:max-w-[1128px] xl:max-w-[1128px] mx-auto px-5 md:px-0 font-figtree">
      {/* main  */}
      <nav className="mt-4 md:mt-[35px] grid grid-cols-3 md:grid-cols-2 items-center">
        <div className="md:hidden"></div>
        <Image
          src={"/logo.png"}
          alt="Logo"
          width={173.12}
          height={74}
          className="h-[46.07px] md:h-[74px] w-[107.78px] md:w-[173.12px] justify-self-center md:justify-self-start"
        />
        {/* web menu  */}
        <div className="hidden md:flex pe-[160px] gap-10 font-semibold text-[#A9A9A9] text-lg leading-[120%] justify-self-end">
          <Link href={"/"}>About us</Link>
          <Link href={"/"}>Contact</Link>
        </div>
        {/* mobile menu  */}
        <div className="block md:hidden justify-self-end">
          <Burger />
        </div>
      </nav>
      <main className="flex flex-col-reverse md:flex-row items-center isolate">
        <section className="relative md:static -top-3 md:top-0 md:max-w-[516px] pb-10 md:pb-0">
          <section className="mt-0 md:mt-[57px]">
            <div>
              <h1 className="font-urbanist text-[25px] md:text-[35px] text-center md:text-start font-extrabold md:font-bold text-white leading-[120%]">
                Want to Turn Social Media <br className="block sm:hidden" />{" "}
                Into a Profitable Career?
              </h1>
              <h3 className="font-urbanist text-[25px] md:text-[35px] text-center md:text-start text-text-teal font-extrabold md:font-bold leading-[120%] text-shadow-custom mb-[22px] md:mb-4">
                Discover your way to success <br className="block sm:hidden" />{" "}
                with Fametonic:
              </h3>
              <List
                items={[
                  "Start growing your influence right away—no waiting required!",
                  "Create viral TikToks and Reels step by step with easy-to-follow lessons",
                  "Use a Personal AI Worker to boost your content",
                  "Learn from expert-led courses designed for aspiring influencers",
                ]}
              />
            </div>
          </section>
          <section className="mt-[22px] md:mt-[30px] flex flex-col md:flex-col-reverse gap-8 md:gap-[30px]">
            <div className="flex justify-center md:block text-center md:text-start text-text-gray font-medium leading-[120%]">
              <div className="max-w-[281px] md:max-w-fit">
                <p className="text-xs leading-[120%]">
                  By clicking &quot;Get Started&quot;, you agree with Terms and
                  Conditions, Privacy Policy, Subscription Terms
                </p>
                <p className="text-[10px] leading-[120%] pt-5 md:pt-3">
                  Fametonic 2025 ©All Rights Reserved.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center md:justify-start gap-[10px] w-full md:w-fit">
              <button className="w-full md:w-[313px] bg-banner-red text-white px-10 py-2 rounded-[10px] text-xl font-bold leading-[120%] shadow-button flex gap-[10px] items-center justify-center">
                <p className="font-urbanist md:font-figtree">GET STARTED</p>
                <ChevronRight />
              </button>
              <p className="text-xs leading-4 text-white text-center">
                1-minute quiz for personalized Insights
              </p>
            </div>
          </section>
        </section>
        <section>
          <Image
            className="relative left-0 md:left-[-55px] md:top-5 -z-10"
            src="/Influe_mobile.png"
            alt="influe"
            height={679}
            width={666}
          />
        </section>
      </main>
    </div>
  );
};
