'use client'

import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

interface IProps {
    url: string;
    iconUrl: string;
    text: string;
}

export const MenuItem = (props: IProps) => {
    const pathname = usePathname();

    return (
        <li>
            <Link href={props.url} className={`flex items-center w-full py-5 rounded-[5px] duration-300  ${pathname?.startsWith(props.url) ? "pl-5 backdrop-blur-xl bg-white/10 " : "hover:backdrop-blur-xl hover:bg-white/10 hover:pl-5"}`}>
                <Image src={props.iconUrl} alt={props.text} width={24} height={24} className="mr-4"/>
                {props.text}
            </Link>
        </li>
    );
};

