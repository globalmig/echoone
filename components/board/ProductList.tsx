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

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/api/product");
                const data = await response.json();

                // 전체 데이터 중 해당 카테고리 제품만 필터링
                const filtered = data.filter((p: Product) => p.category === category);
                setProducts(filtered);
            } catch (error) {
                console.error("데이터 로딩 실패:", error);
            }
        };

        fetchProducts();
    }, [category]);

    if (!products) return <div className="loading">정보를 불러오는 중입니다.</div>
    if (products.length === 0) return <div className="loading">해당 카테고리의 제품이 존재하지 않습니다.</div>

    return (
        <div className="display-flex-flow">
            {products.map((p) =>
                <section key={p.id}>
                    <div>
                        <div>
                            <Image src={p.img} alt={p.name} width={600} height={387} />
                        </div>
                        <div>
                            <h4>{p.name}</h4>
                            {p.spec && <p>{p.spec}</p>}
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}