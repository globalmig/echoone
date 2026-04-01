'use client';
import { CATEGORY_MAP } from "@/datas/category";
import Image from "next/image";
import { usePathname } from "next/navigation";
import TabMenu from "./TabMenu";

export default function CategoryBanner() {
    const pathname = usePathname();
    const pathnameSplit = pathname.split('/').filter(Boolean);
    const categoryKey = pathnameSplit[0];
    const category = CATEGORY_MAP[categoryKey];

    return (
        <main className="category-banner">
            <div>
                <div>
                    <Image className="mo" src={category.banner.mo} alt={category.title} width={960} height={1050} />
                    <Image className="pc" src={category.banner.pc} alt={category.title} width={2560} height={500} />
                </div>
                <h2>{category.title}</h2>
                {category.categories && <TabMenu/>}
            </div>
        </main>
    )
}