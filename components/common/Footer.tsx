"use client";
import Image from "next/image";

export default function Footer() {

    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-[#222]">
            <div className="relative p-[35px] bg-[url(/images/footer_bg.png)] bg-center bg-no-repeat bg-cover pc:p-[50px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image className="pc:w-[170px]" src="/icons/logo_white.png" alt="에코원" width={300} height={95} />
                </div>
            </div>
            <div className="pt-[30px] px-[5%] pb-[50px] text-[#ccc] text-center
            pc:w-300 pc:my-0 pc:mx-auto pc:pt-[50px] pc:px-0 pc:pb-20">
                <h5 className="pc:text-[1.2rem]">주식회사 에코원</h5>
                <ul className="display-flex-flow mt-5 mx-0 mb-10 justify-center gap-[10px] pc:mt-[10px] pc:mb-5">
                    <li className="w-auto relative
                    after:content-[] after:absolute after:top-1/2 after:-right-[5px] after:-translate-y-1/2 after:w-px after:h-[15px] after:bg-[#aaa]">
                        <span className="font-bold">대표자 </span>: 송태열
                    </li>
                    <li className="w-auto relative
                    pc:after:content-[] pc:after:absolute pc:after:top-1/2 pc:after:-right-[5px] pc:after:-translate-y-1/2 pc:after:w-px pc:after:h-[15px] pc:after:bg-[#aaa]">
                        <span className="font-bold">대표전화 </span>: 010-5495-8815
                    </li>
                    <li className="w-full pc:w-auto pc:relative
                    pc:after:content-[] pc:after:absolute pc:after:top-1/2 pc:after:-right-[5px] pc:after:-translate-y-1/2 pc:after:w-px pc:after:h-[15px] pc:after:bg-[#aaa]">
                        <span className="font-bold">팩스 </span>: 0504-265-8815
                    </li>
                    <li className="w-full pc:w-auto pc:relative
                    pc:after:content-[] pc:after:absolute pc:after:top-1/2 pc:after:-right-[5px] pc:after:-translate-y-1/2 pc:after:w-px pc:after:h-[15px] pc:after:bg-[#aaa]">
                        <span className="font-bold">사업자번호 </span>: 191-07-01833
                    </li>
                    <li className="w-full pc:w-auto pc:relative">
                        <span className="font-bold">주소 </span>: 김포시 하성면 원통로 78번길 87-3
                    </li>
                </ul>
                <p>Copyright ⓒ 2026 ECHOONE All rights reserved.</p>
            </div>
            <div onClick={handleScroll}>
                <Image className="w-[52px] h-auto" src="/icons/top.png" alt="맨위로 이동" width={52} height={52} />
            </div>
        </footer>
    )
}