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
        <main className="w-full block relative">
            <div>
                <div>
                    <Image
                        className="mo w-full h-87.5 object-cover"
                        src={category.banner.mo}
                        alt={category.title}
                        width={960}
                        height={1050} />
                    <Image
                        className="pc w-full object-cover"
                        src={category.banner.pc}
                        alt={category.title}
                        width={2560}
                        height={500} />
                </div>
                <h2 className="text-white text-[2.5rem] pc:text-[3rem] absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{category.title}</h2>
                {category.categories && <TabMenu />}
            </div>
        </main>
    )
}