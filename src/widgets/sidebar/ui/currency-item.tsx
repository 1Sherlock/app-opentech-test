import React from 'react';
import Image from "next/image";
import {getBeautifulNumber} from "@/widgets/sidebar/config";

interface IProps {
    id: number;
    Ccy: string;
    Rate: number;
    Diff: number;
}

export const CurrencyItem = (props: IProps) => {
    return (
        <div>
            <div className="flex items-center">
                <p className="text-[17px] leading-[22px]">{props.Ccy}</p>
                <div className="w-6 h-6 shrink-0 bg-white rounded-[9px] flex items-center justify-center ml-4">
                    {props.Diff > 0 ?
                        <Image src="/icons/up_green.svg" alt="up" width={11.5} height={16.5}/> :
                        <Image src="/icons/down_red.svg" alt="down" width={11.5} height={16.5}/>
                    }
                </div>
            </div>
            <p className="text-[17px] leading-[22px]">{getBeautifulNumber(props.Rate)}</p>
        </div>
    );
};

