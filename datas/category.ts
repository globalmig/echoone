export const CATEGORY_MAP: {
    [key: string]:
    {
        title: string;
        banner: { mo: string, pc: string };
        categories?: { name: string, url: string }[]
    }
} = {
    company: {
        title: '회사소개',
        banner: {
            mo: "/images/company_banner_mo.png",
            pc: "/images/company_banner_pc.png"
        },
    },
    product: {
        title: '제품소개',
        banner: {
            mo: "/images/product_banner_mo.png",
            pc: "/images/product_banner_pc.png"
        },
        categories: [
            { name: "전신 온열 케어", url: "heating" },      
            { name: "부분 집중 케어", url: "intensive" }, 
            { name: "생활 밀착형 케어", url: "lifestyle" },
            { name: "건강 제품", url: "health" },
            { name: "조절기", url: "controller" }
        ],
    },
};