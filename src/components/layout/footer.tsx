import React from "react";
import { homeData } from "@/utils/homePage";
import googleIcon from "@/resources/svg/google.svg";
import twitterIcon from "@/resources/svg/twitter.svg";
import youtubeIcon from "@/resources/svg/youtube.svg";
import Image from "next/image";

function Footer() {
  const FooterLinks = ({ obj }: any) => {
    return (
      <div className="my-6 sm:my-0">
        <h1 className="font-semibold mb-5">{obj.heading}</h1>
        <ul>
          {obj.linksArr.map((link: any, i: any) => (
            <li
              key={i}
              className="text-slate-400 my-1 hover:underline cursor-pointer w-fit"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const {
    footer: { heading, subHeadingsArr },
  } = homeData;
  return (
    <footer className="w-full p-4 md:px-10 bg-slate-400 fixed bottom-0">
      <div className="w-full flex flex-col sm:flex-row justify-between items-center text-zinc-900 gap-8">
        <h1 className="text-center text-xs">{heading}</h1>
        <div className="flex flex-wrap gap-1 sm:gap-5 text-xs">
          {subHeadingsArr.map((link, i) => (
            <div key={i} className="flex gap-1 sm:gap-5">
              <h3 className="hover:underline cursor-pointer">{link}</h3>
              <h2> {i !== subHeadingsArr.length - 1 && " | "}</h2>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <Image src={googleIcon} alt="google" width={18} height={18} />
          <Image src={twitterIcon} alt="twitter" width={18} height={18} />
          <Image src={youtubeIcon} alt="youtube" width={18} height={18} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
