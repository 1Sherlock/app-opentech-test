import React from 'react';
import Image from "next/image";

export const MyEmployeesPage = () => {
    return (
        <div className="h-full flex items-center justify-center flex-col">
            <Image src="/images/developing.png" alt="developing" width={320} height={282}/>
            <h4 className="font-bold text-[20px]">Данный момент нет информации для этого раздела</h4>
            <p className="text-[14px] text-[#454142A3]">Мы работаем над этой функцией и будем рады за вас в ближайшее время</p>
        </div>
    );
};