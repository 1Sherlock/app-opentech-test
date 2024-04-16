'use client'

import {useController, UseControllerProps, useForm} from "react-hook-form";
import React from "react";

type FormValues = {
    SenderAccount: string,
    Mfo: string,
    ReceiverAccount: string,
    Amount: number,
    Purpose: string
}

const accountData = [
    "USD | 22620000800208423200",
    "UZS | 22620000800208423200",
    "RUB | 22620000800208423200",
    "EUR | 22620000800208423200",
]

function Select(props: any) {
    const {field, fieldState} = useController(props)

    return (
        <div className="w-[65%] relative">
            <select {...field} className="w-full border border-[#D2D0D0] outline-0 bg-[#EEEEEE99] text-[#777373] rounded-[5px] p-2.5 text-[13px] leading-[18px]" id={props.id}>
                <option disabled selected>{props.placeholderText}</option>
                {props.data?.map((item: string, index: number) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>
            <p className="text-[10px] text-red-700 absolute left-0 bottom-[-15px]">{fieldState.invalid ? "Это поле является обязательным!" : " "}</p>
        </div>
    )
}

function Input(props: any) {
    const {field, fieldState} = useController(props)

    return (
        <div className="w-[65%] relative">
            <input type={props.type} {...field} className="w-full border border-[#D2D0D0] outline-0 bg-[#EEEEEE99] text-[#777373] rounded-[5px] p-2.5 text-[13px] leading-[18px]" placeholder={props.placeholderText}/>
            <p className="text-[10px] text-red-700 absolute left-0 bottom-[-15px]">{fieldState.invalid ? "Это поле является обязательным!" : " "}</p>
        </div>
    )
}

function Textarea(props: any) {
    const {field, fieldState} = useController(props)

    return (
        <div className="w-[65%] relative">
            <textarea {...field} className="w-full border border-[#D2D0D0] outline-0 bg-[#EEEEEE99] text-[#777373] rounded-[5px] p-2.5 text-[13px] leading-[18px]" placeholder={props.placeholderText}/>
            <p className="text-[10px] text-red-700 absolute left-0 bottom-[-15px]">{fieldState.invalid ? "Это поле является обязательным!" : " "}</p>
        </div>
    )
}

export const CreatePaymentForm = () => {
    const {handleSubmit, control} = useForm<FormValues>({mode: "onChange"})
    const onSubmit = (data: FormValues) => console.log(data)
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-[645px] max-w-full">
            <h6 className="font-semibold text-[#342C2C] text-[13px] leading-[18px]">Отправитель</h6>
            <div className="flex w-full justify-between items-center mt-[10px]">
                <label htmlFor="SenderAccount" className="text-[#A5A1A1] text-[13px] leading-[18px]">Валюта, счет</label>
                <Select control={control} name="SenderAccount" rules={{required: true}} id="SenderAccount" data={accountData} placeholderText="Все валюты | Все счета"/>
            </div>
            <h6 className="font-semibold text-[#342C2C] text-[13px] leading-[18px] mt-[25px]">Получатель</h6>
            <div className="flex w-full justify-between items-center mt-[15px]">
                <label htmlFor="Mfo" className="text-[#A5A1A1] text-[13px] leading-[18px]">МФО банка</label>
                <Select control={control} name="Mfo" rules={{required: true}} id="Mfo" data={accountData} placeholderText="Выберите/впишите"/>
            </div>
            <div className="flex w-full justify-between items-center mt-[15px]">
                <label htmlFor="ReceiverAccount" className="text-[#A5A1A1] text-[13px] leading-[18px]">Расчетный счет</label>
                <Input type="number" control={control} name="ReceiverAccount" rules={{required: true}} id="ReceiverAccount" placeholderText="0000 0000 0000 0000"/>
            </div>
            <h6 className="font-semibold text-[#342C2C] text-[13px] leading-[18px] mt-[25px]">Описание платежа</h6>
            <div className="flex w-full justify-between items-center mt-[15px]">
                <label htmlFor="Amount" className="text-[#A5A1A1] text-[13px] leading-[18px]">Сумма</label>
                <Input type="number" control={control} name="Amount" rules={{required: true}} id="Amount" placeholderText="00.00 UZS"/>
            </div>
            <div className="flex w-full justify-between items-center mt-[15px]">
                <label htmlFor="Purpose" className="text-[#A5A1A1] text-[13px] leading-[18px]">Назначение платежа</label>
                <Textarea control={control} name="Purpose" rules={{required: true}} id="Purpose" placeholderText="Оплата таможенной пошлины"/>
            </div>

            <button type="submit" className="ml-auto block bg-[#4E0F8A] rounded-[5px] text-white text-[15px] leading-[25px] px-[100px] py-[7.5px] mt-[40px] active:scale-90">Далее</button>
        </form>
    );
};

