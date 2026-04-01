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
            <header className={isScroll ? "" : ""}> 
                <div className="display-flex">
                    <div>
                        <Link href="/">
                            <Image src="/icons/logo_black.png" alt="에코원" width={300} height={95}/>
                        </Link>
                    </div>

                    <nav className={isOpen ? "open-menu" : ""}>
                        <div>
                            <div className="mo" onClick={() => setIsOpen(false)}>
                                <Image src="/icons/close.png" alt="메뉴 닫기" width={30} height={30} />
                            </div>
                        </div>

                        <ul>
                            {Object.entries(CATEGORY_MAP).map(([key, c]) => {
                                return (
                                    <li key={key}>
                                        {/* 메인 카테고리: 클릭 시 서브메뉴 토글 로직 추가 */}
                                        <div onClick={() => {
                                            if (c.categories) {
                                                setIsOpenSub(isOpenSub === key ? null : key);
                                            }
                                        }}>
                                            {c.categories ? (
                                                <p style={{ cursor: 'pointer' }}>{c.title}</p>
                                            ) : (
                                                <Link href={`/${key}`} onClick={() =>{setIsOpenSub(null); setIsOpen(false);}}>
                                                    {c.title}
                                                </Link>
                                            )}
                                        </div>
                                        {/* 서브 카테고리: isOpenSub 상태에 따라 렌더링 */}
                                        {c.categories && isOpenSub === key && (
                                            <ul>
                                                {c.categories.map((sub) => (
                                                    <li key={sub.url}
                                                        onClick={() => {setIsOpenSub(null); setIsOpen(false);}}>
                                                        <Link href={`/${key}/${sub.url}`}>
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
                    <div className={`mo ${isScroll ? "invert" : ""}`} onClick={() => setIsOpen(true)}>
                        <Image src="/icons/nav.png" alt="메뉴열기" width={35} height={23} />
                    </div>
                </div>
            </header>

            <div className={isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
                 onClick={() => setIsOpen(false)}>
            </div>
        </>
    );
}