import ProductProps from "@/app/Types/ProductProps.js";
import Image from "next/image";
export default function Product({
                                    category,
                                    image,
                                    price,
                                    title,
                                } : ProductProps)  {

    return (
        <div className="flex flex-col items-center justify-center border-4 w-1/4 h-96 border-indigo-700 rounded-xl gap-4 text-center p-5">
            <Image src={image} alt="img" width={100} height={0}></Image>
            <div className="font-semibold text-lg">{title}</div>
            <div className="text-teal-400">{category}</div>
            <div className="text-lime-500 font-bold">${price}</div>
        </div>
    );

}