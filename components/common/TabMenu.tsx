"use client";

import { CATEGORY_MAP } from "@/datas/category";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function TabMenu() {
    const { category } = useParams();
    const pathname = usePathname();
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const categoryKey = pathnameSplit[0];
    const categoryName = CATEGORY_MAP[categoryKey];

    const menu = categoryName.categories;

    return (
        <ul className="display-flex-flow justify-left absolute left-0 -bottom-15 w-full
                        pc:left-1/2 pc:-bottom-7.5 pc:-translate-x-1/2 pc:w-300 pc:my-0 pc:mx-auto">
            {menu?.map((m, index) =>
                <li
                    key={index}
                    className={`w-1/2 p-3.75 text-center hover:bg-black
                        pc:w-[20%] pc:p-5
                    ${m.url === category ? "bg-black" : "bg-[#353535]"}`}>
                    <Link className="font-bold text-white pc:text-[1.2rem]"
                        href={`/product/${m.url}`}>
                        {m.name}
                    </Link>
                </li>
            )}
        </ul>
    )

}