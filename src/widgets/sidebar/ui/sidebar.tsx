import React from "react";
import Image from 'next/image'
import {CompanyInfo} from "./company-info";
import {Menu} from "./menu";
import {ExchangeRate} from "./exchange-rate";

export const Sidebar = () => {
    return (
        <aside className="flex flex-col justify-between w-[21.75rem] shrink-0 h-full bg-cover pl-[60px] pt-[40px] pr-[30px] pb-[30px] text-color-white" style={{backgroundImage: "url('/images/sidebar_bg.png')"}}>
            <div>
                <Image
                    src="/icons/logo.svg"
                    alt="OpenTech Logo"
                    width={175}
                    height={65}
                />

                <div className="text-[#F4F3F3] mt-[38px]">
                    <CompanyInfo/>
                    <Menu/>
                </div>
            </div>
            <ExchangeRate/>
        </aside>
    );
};

