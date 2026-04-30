"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
    id: string;
    name: string;
    category: string;
    spec: string | null
    img: string;
}

interface ProductListProps {
    category: string | undefined;
}

export default function ProductList({ category }: ProductListProps) {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        const fetchProducts = async () => {
            try {
                const response = await fetch("/api/product");
                const data = await response.json();
                const filtered = data.filter((p: Product) => p.category === category);
                setProducts(filtered);
                setLoading(false);
            } catch (error) {
                console.error("데이터 로딩 실패:", error);
            }
        };

        fetchProducts();

    }, [category]);

    if (loading) return <div className="loading">정보를 불러오는 중입니다.</div>
    if (products.length === 0) return <div className="loading">해당 카테고리의 제품이 존재하지 않습니다.</div>

    return (
        <div className="display-flex-flow pc:justify-start pc:gap-[37px]">
            {products.map((p) =>
                <section key={p.id}
                    className="border border-[#ccc] w-full h-80 my-3 mx-0
                pc:w-[375px] pc:h-[375px]">
                    <div className="text-center relative w-full h-80">
                        <div className="absolute w-full left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2">
                            <Image
                                className="w-60 h-auto m-auto md:w-80 pc:w-auto pc:h-[180px]"
                                src={p.img}
                                alt={p.name}
                                width={600}
                                height={387} />
                        </div>
                        <div className="absolute w-full left-1/2 bottom-[25px] -translate-x-1/2 pc:-bottom-[10px]">
                            <h4 className="pc:text-[1.2rem]">{p.name}</h4>
                            {p.spec && <p className="pc:mt-[5px]">{p.spec}</p>}
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}