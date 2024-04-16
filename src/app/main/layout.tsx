import React from 'react';
import {Sidebar} from "@/widgets/sidebar";
import {Navbar} from "@/widgets/navbar";

export default function Layout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div className="h-screen w-screen flex">
            <Sidebar/>
            <div className="w-full h-full pt-[40px] pr-[60px] pb-[30px] pl-[30px]">
                <Navbar/>
                <main className="h-[calc(100vh-147px)] max-w-[1100px]">
                    {children}
                </main>
            </div>
        </div>
    );
};


