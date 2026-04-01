"use client";
import Image from "next/image";

export default function Footer() {

    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer>
            <div>
                <div>
                    <Image src="/icons/logo_white.png" alt="에코원" width={300} height={95} />
                </div>
            </div>
            <div>
                <h5>주식회사 에코원</h5>
                <ul className="display-flex-flow">
                    <li><span>대표자 </span>: 송태열</li>
                    <li><span>대표전화 </span>: 010-5495-8815</li>
                    <li><span>팩스 </span>: 0504-265-8815</li>
                    <li><span>사업자번호 </span>: 191-07-01833</li>
                    <li><span>주소 </span>: 김포시 하성면 원통로 78번길 87-3</li>
                </ul>
                <p>Copyright ⓒ 2026 ECHOONE All rights reserved.</p>
            </div>
            <div onClick={handleScroll}>
                <Image src="/icons/top.png" alt="맨위로 이동" width={52} height={52} />
            </div>
        </footer>
    )
}