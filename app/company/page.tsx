import CategoryBanner from "@/components/common/CategoryBanner";
import Image from "next/image";

export default function CompanyPage() {
    return (
        <>
            <CategoryBanner />
            <article className="company">
                <div>

                    <div className="display-flex-flow">
                        <div>
                            <Image className="mo" src="/images/company_contents1.png" alt="칠보세라믹 전문 업체 에코원" width={1200} height={801} />
                            <Image className="pc" src="/images/company_contents2.png" alt="칠보세라믹 전문 업체 에코원" width={591} height={814} />
                        </div>
                        <div>
                            <div>
                                <Image src="/images/하루의활기찬시작.png" alt="하루의 활기찬 시작" width={642} height={254} />
                            </div>
                            <div>
                                <h2>단순한 활력을 넘어<br/> 몸속 깊은 곳의 균형까지</h2>
                                <h3>우리들의 하루를 더 단단하고<br/> 건강하게 지켜줍니다.</h3>
                            </div>
                            <div>
                                <p>
                                    오늘 하루는 어땠나요? <br />
                                    가볍게 즐기고 싶은 날, 뜨끈하게 지지고 싶은 날,<br />
                                    지친 몸과 마음을 편안하게 풀어주고 싶은 순간들이 있습니다.<br />
                                </p>
                                <p>이러한 일상의 순간 속에서 보다 깊고 안정적인 온열 경험을 제공하고 있습니다.<br />
                                    원적외선 방출 특성을 지닌 칠보세라믹은<br />
                                    몸 깊숙이 전달되는 온기를 통해 혈액순환을 돕고,<br />
                                    근육의 긴장을 완화하여 보다 편안한 휴식을 유도합니다.
                                </p>
                                <p>
                                    단순한 따뜻함을 넘어,<br />
                                    몸이 스스로 회복할 수 있는 환경을 만들어주는 것.<br />
                                    그것이 에코원이 추구하는 가치입니다.
                                </p>
                                <p>
                                    매일 반복되는 일상 속에서도<br />
                                    작은 변화로 건강한 삶의 균형을 되찾고,<br />
                                    가족의 하루가 더 편안해질 수 있도록
                                </p>
                                <p>에코원은 가족의 건강을 지켜드립니다.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </article>
        </>
    );
}