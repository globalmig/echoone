"use client";
import Image from "next/image";

const footerInfo = [
    { label: "대표자", content: "송태열", hasLineMobile: true },
    { label: "대표전화", content: "010-5495-8815", hasLineMobile: false, isFullMobile: false },
    { label: "팩스", content: "0504-265-8815", hasLineMobile: false, isFullMobile: true },
    { label: "사업자번호", content: "191-07-01833", hasLineMobile: false, isFullMobile: true },
    { label: "주소", content: "김포시 하성면 원통로 78번길 87-3", hasLineMobile: false, isFullMobile: true },
];

export default function Footer() {

    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-[#222]">
            <div className="relative p-8.75 bg-[url(/images/footer_bg.png)] bg-center bg-no-repeat bg-cover pc:p-12.5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image className="w-30 pc:w-42.5" src="/icons/logo_white.png" alt="에코원" width={300} height={95} />
                </div>
            </div>
            <div className="pt-7.5 px-[5%] pb-12.5 text-[#ccc] text-center
            pc:w-300 pc:my-0 pc:mx-auto pc:pt-12.5 pc:px-0 pc:pb-20">
                <h5 className="pc:text-[1.2rem]">주식회사 에코원</h5>
                <ul className="display-flex-flow mt-5 mx-0 mb-10 justify-center gap-2.5 pc:mt-2.5 pc:mb-5">
                    {footerInfo.map((item, index) => (
                        <li
                            key={index}
                            className={`
                                relative text-[0.85rem] pc:text-[1rem]
                                ${item.isFullMobile ? 'w-full pc:w-auto' : 'w-auto'}
                                ${index !== footerInfo.length - 1 ? 'pc:after:content-[] pc:after:absolute pc:after:top-1/2 pc:after:-right-1.25 pc:after:-translate-y-1/2 pc:after:w-px pc:after:h-3 pc:after:bg-[#aaa]' : ''}
                                ${item.hasLineMobile ? 'after:content-[] after:absolute after:top-1/2 after:-right-1.25 after:-translate-y-1/2 after:w-px after:h-3 after:bg-[#aaa] pc:after:block' : 'after:hidden pc:after:block'}
                            `}
                        >
                            <span className="font-bold">{item.label} </span>: {item.content}
                        </li>
                    ))}
                </ul>
                <p>Copyright ⓒ 2026 ECHOONE All rights reserved.</p>
            </div>
            <div onClick={handleScroll}>
                <Image className="w-13 h-auto" src="/icons/top.png" alt="맨위로 이동" width={52} height={52} />
            </div>
        </footer>
    )
}