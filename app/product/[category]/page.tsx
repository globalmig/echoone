"use client"
import ProductList from "@/components/board/ProductList";
import CategoryBanner from "@/components/common/CategoryBanner";
import { TitleWrapper } from "@/components/style/style";
import { useParams } from "next/navigation";

const productPageTitle = [
    {
        category: "heating",
        name: "전신 온열 케어",
        content: "매일매일 건강한 아침 에너지!"
    },
    {
        category: "intensive",
        name: "부분 집중 케어",
        content: "따뜻한 휴식과 편안함"
    },
    {
        category: "lifestyle",
        name: "생활 밀착형 케어",
        content: "하루 한번 면역력 충전!"
    },
    {
        category: "health",
        name: "건강 제품",
        content: "언제나 어디서든 사용하는 건강 지킴이"
    },
    {
        category: "controller",
        name: "조절기",
        content: "나에게 맞는 온도로"
    },
]

export default function ProductPage() {

    const params = useParams();
    const category = Array.isArray(params.category) ? params.category[0] : params.category;
    const productTitle = productPageTitle.find((p) => p.category === category);

    return (
        <>
            <CategoryBanner />
            <article className="product">
                <div>
                    <TitleWrapper>
                        <p>{productTitle?.content}</p>
                        <h2>{productTitle?.name}</h2>
                    </TitleWrapper>
                    <ProductList category={category} />
                </div>
            </article>
        </>
    )
}