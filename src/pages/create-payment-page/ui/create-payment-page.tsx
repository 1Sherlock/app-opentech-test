import React from 'react';
import {CreatePaymentForm} from "@/widgets/form";

const CreatePaymentPage = () => {
    return (
        <div className="pt-10">
            <div className="h-full bg-white rounded-[9px] p-5">
                <CreatePaymentForm/>
            </div>
        </div>
    );
};

export default CreatePaymentPage