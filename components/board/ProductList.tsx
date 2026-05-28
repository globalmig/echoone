"use client";
import { useEffect, useState } from "react";
import Skeleton from "../common/Skeleton";
import ProductItem from "./ProductItem";

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

    if (loading) {
        return (
            <div className="display-flex-flow pc:justify-start pc:gap-9.25">
                {Array.from({ length: 3 }).map((_, index) => (
                    <Skeleton key={index} />
                ))}
            </div>
        );
    }
    if (products.length === 0) return <div className="loading">해당 카테고리의 제품이 존재하지 않습니다.</div>

    return (
        <div className="display-flex-flow pc:justify-start pc:gap-9.25">
            {products.map((p) =>
                <ProductItem key={p.id} product={p} />
            )}
        </div>
    )
}