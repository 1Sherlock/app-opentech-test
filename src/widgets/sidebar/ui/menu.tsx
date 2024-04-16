import React from 'react';
import {MenuItem} from "./menu-item";

export const Menu = () => {
    return (
        <div className="mt-[40px]">
            <ul>
                <MenuItem url={"/main/create-payment"} iconUrl={"/icons/add.svg"} text={"Создать платеж"}/>
                <MenuItem url={"/main/transactions"} iconUrl={"/icons/transactions.svg"} text={"Транзакции"}/>
                <MenuItem url={"/main/my-employees"} iconUrl={"/icons/users.svg"} text={"Мои сотрудники"}/>
            </ul>
        </div>
    );
};

