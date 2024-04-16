import React from 'react';
import {getCurrencies} from "@/widgets/sidebar/api";
import {CurrencyItem} from "@/widgets/sidebar/ui/currency-item";

interface ICurrency {
    id: number;
    Ccy: string;
    Rate: number;
    Diff: number;
}

export const ExchangeRate = async () => {
    const data = await getCurrencies();

    return (
        <div className="flex text-[#F4FCF9] justify-between">
            {data?.filter((item:ICurrency) => item.Ccy === "USD" || item.Ccy === "EUR" ||  item.Ccy === "RUB")?.map((item:ICurrency) => (
                <CurrencyItem id={item.id} Ccy={item.Ccy} Rate={item.Rate} Diff={item.Diff} key={item.id}/>
            ))}
        </div>
    );
};

