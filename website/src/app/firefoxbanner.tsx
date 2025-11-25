/**
 * lil' banner for if people are using an unsupported browser :(
 */

"use client";

import { getCookie, setCookie } from "cookies-next/client";
import { useEffect, useState } from "react";

export default function UnsupportedBrowserBanner() {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const badBrowser = getCookie("badBrowser");
        const accepted = getCookie("browserAccept") == "true";
        if (badBrowser && !accepted) {
            setOpen(true);
        }
    }, []);

    if (!isOpen) return undefined;

    return (
        <div className="fixed bottom-[12px] left-1/2 transform -translate-x-1/2 bg-yellow-500 flex items-center justify-center p-4 rounded-lg shadow-md">
            <span className="font-sans">
                The browser you&apos;re using may not show animations properly!
            </span>
            <span
                className="font-mono text-xl items-center flex h-full ml-4 cursor-pointer"
                onClick={() => {
                    setOpen(false);
                    setCookie("browserAccept", "true");
                }}
            >
                ✖
            </span>
        </div>
    );
}
