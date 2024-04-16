'use client'

import Image from "next/image";
import {usePathname} from "next/navigation";
import {getTextByPath} from "@/widgets/navbar/config";

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="flex justify-between items-end pb-5 border-b border-[#D2D0D0]">
            <h3 className="text-[22px] leading-[28px] tracking-[0.35px] font-bold">{getTextByPath(pathname)}</h3>
            <div className="flex">
                <div className="flex bg-white pt-2 px-4 pb-2.5 rounded-[9px]">
                    <div className="w-[30px] h-[30px] rounded-full bg-[#EEEEEE] text-[11px] text-[#777373] font-semibold flex items-center justify-center leading-[13px]">UZS</div>
                    <div className="ml-2.5">
                        <h5 className="font-semibold text-[15px] leading-[20px] tracking-[-0.24px] text-[#342C2C]">10 000 000 000,00</h5>
                        <p className="text-[13px] leading-[18px] tracking-[-0.08px] text-[#777373]">Средств на UZS счетах</p>
                    </div>
                </div>
                <div className="flex bg-white pt-2 px-4 pb-2.5 rounded-[9px] ml-5">
                    <div className="w-[30px] h-[30px] rounded-full bg-[#EEEEEE] text-[11px] text-[#777373] font-semibold flex items-center justify-center leading-[13px]">USD</div>
                    <div className="ml-2.5">
                        <h5 className="font-semibold text-[15px] leading-[20px] tracking-[-0.24px] text-[#342C2C]">20 000  000,00</h5>
                        <p className="text-[13px] leading-[18px] tracking-[-0.08px] text-[#777373]">Средств на USD счетах</p>
                    </div>
                </div>
                <div className="flex ml-[90px]">
                    <button type="button" className="bg-white w-[56px] h-[56px] rounded-[9px] flex items-center justify-center active:scale-90"><Image src="/icons/notification.svg" alt="notification" width={24} height={24}/></button>
                    <button type="button" className="bg-white w-[56px] h-[56px] rounded-[9px] flex items-center flex-col justify-center ml-5 mr-5 active:scale-90">
                        <Image src="/icons/russian.svg" alt="notification" width={24} height={24}/>
                        <p className="font-semibold text-[11px] leading-[13px] tracking-[0.07px]">РУС</p>
                    </button>
                    <button type="button" className="bg-white w-[56px] h-[56px] rounded-[9px] flex items-center justify-center active:scale-90">
                        <h6 className="font-semibold text-xl text-[#342C2C]">АК</h6>
                    </button>
                </div>
            </div>
        </nav>
    );
};

