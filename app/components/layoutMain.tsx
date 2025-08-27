import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface LayoutMainProps {
    children: React.ReactNode;
}

export default function LayoutMain({ children }: LayoutMainProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
                <main className="flex-grow bg-gray-100 p-6">{children}</main>
            <Footer />
        </div>
    );
}
