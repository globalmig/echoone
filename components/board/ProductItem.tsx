import Image from "next/image";

interface Product {
    id: string;
    name: string;
    spec: string | null;
    img: string;
}

export default function ProductItem({product}: {product: Product}) {

    return (
        <section key={product.id}
            className="border border-[#ccc] w-full h-80 my-3 mx-0
                        pc:w-93.75 pc:h-93.75">
            <div className="text-center relative w-full h-80">
                <div className="absolute w-full left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2">
                    <Image
                        className="w-60 h-auto m-auto md:w-80 pc:w-auto pc:h-45"
                        src={product.img}
                        alt={product.name}
                        width={600}
                        height={387} />
                </div>
                <div className="absolute w-full left-1/2 bottom-6.25 -translate-x-1/2 pc:-bottom-2.5">
                    <h4 className="pc:text-[1.2rem]">{product.name}</h4>
                    {product.spec && <p className="pc:mt-1.25">{product.spec}</p>}
                </div>
            </div>
        </section>
    )
}