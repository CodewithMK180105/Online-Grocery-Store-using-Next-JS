"use client"

import { usePathname } from "next/navigation"
import Header from "./Header"

export default function ConditionalHeader(){
    const params=usePathname();
    const showHeader= ( params==='/create-account' || params==='/sign-in' ) ? false:true;

    return(
        <div>
            {showHeader && <Header />}
        </div>
    )
}