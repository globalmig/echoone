"use client";

import { CATEGORY_MAP } from "@/datas/category";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function TabMenu() {
    const {category} = useParams();
    const pathname = usePathname();
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const categoryKey = pathnameSplit[0];
    const categoryName = CATEGORY_MAP[categoryKey];

    const menu = categoryName.categories;

    return (
        <ul className="display-flex-flow">
            {menu?.map((m, index) =>
                <li key={index} className={m.url === category ? "tab" : ""}><Link href={`/product/${m.url}`}>{m.name}</Link></li>
            )}
        </ul>
    )

}