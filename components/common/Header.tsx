"use client";
import { CATEGORY_MAP } from "@/datas/category";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isOpenSub, setIsOpenSub] = useState<string | null>(null);
    const [isScroll, setIsScroll] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className="bg-white relative">
                <div className="display-flex py-[15px] px-[5%] max-w-300
                    pc:py-[15px] pc:px-0 pc:my-0 pc:mx-auto">
                    <div>
                        <Link href="/">
                            <Image
                                className="w-30 h-auto pc:w-[170px]"
                                src="/icons/logo_black.png" alt="에코원" width={300} height={95} />
                        </Link>
                    </div>

                    <nav className={`fixed top-0 w-full h-dvh bg-white
                            transition-all duration-300 z-40 py-[15px] px-[5%]
                            pc:static pc:inset-auto pc:w-auto pc:h-auto pc:p-0 pc:my-auto pc:mx-0
                            ${isOpen ? "right-0" : "-right-full"}`}>
                        <div className="mo mb-[30px] pc:my-auto mx-0">
                            <div className="flex justify-end" onClick={() => setIsOpen(false)}>
                                <Image
                                    className="w-[30px] h-auto cursor-pointer"
                                    src="/icons/close.png" alt="메뉴 닫기" width={30} height={30} />
                            </div>
                        </div>
                        <ul className="pc:flex pc:justify-end pc:gap-25">
                            {Object.entries(CATEGORY_MAP).map(([key, c]) => {
                                return (
                                    <li key={key} className="pc:relative">
                                        {/* 메인 카테고리: 클릭 시 서브메뉴 토글 로직 추가 */}
                                        <div
                                            className="py-[15px] px-0 pc:p-0"
                                            onClick={() => {
                                                if (c.categories) {
                                                    setIsOpenSub(isOpenSub === key ? null : key);
                                                }
                                            }}>
                                            {c.categories ? (
                                                <p className="cursor-pointer text-[1.2rem] font-bold">{c.title}</p>
                                            ) : (
                                                <Link
                                                    className="cursor-pointer text-[1.2rem] font-bold"
                                                    href={`/${key}`}
                                                    onClick={() => { setIsOpenSub(null); setIsOpen(false); }}>
                                                    {c.title}
                                                </Link>
                                            )}
                                        </div>
                                        {/* 서브 카테고리: isOpenSub 상태에 따라 렌더링 */}
                                        {c.categories && isOpenSub === key && (
                                            <ul className="bg-[#f5f5f5] rounded-[8px] p-[10px]
                                            pc:absolute pc:w-[180px] pc:left-0 pc:top-[50px] pc:bg-white pc:rounded-0 pc:border pc:border-[#ccc] pc:p-0">
                                                {c.categories.map((sub) => (
                                                    <li
                                                        className="py-[10px] text-[1rem] pc:py-[10px] pc:px-5"
                                                        key={sub.url}
                                                        onClick={() => { setIsOpenSub(null); setIsOpen(false); }}>
                                                        <Link
                                                            className="hover:text-red hover:font-bold"
                                                            href={`/${key}/${sub.url}`}>
                                                            {sub.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <div className="mo cursor-pointer my-auto mx-0" onClick={() => setIsOpen(true)}>
                        <Image
                            className="w-[30px] h-auto my-auto mx-0
                            pc:w-[30px] pc:h-auto pc:my-auto pc:mx-0"
                            src="/icons/nav.png" alt="메뉴열기" width={35} height={23} />
                    </div>
                </div>
            </header>

            <div className={isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
                onClick={() => setIsOpen(false)}>
            </div>
        </>
    );
}