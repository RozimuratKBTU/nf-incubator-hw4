'use client';

import Header from './components/Header';
// import Footer from './components/Footer';
// import { useQuery } from '@tanstack/react-query';
import getData from './api/productsService';
import Product from './components/Product';
import ProductProps from './Types/ProductProps';
import {useQuery} from "react-query";

export default function Home() {
    const { data, isLoading, isError } = useQuery({
        queryFn: async () => await getData(),
        queryKey: ['products'],
    });
    if (isLoading)
        return (
            <h1 className="flex items-center justify-center h-screen flex-grow text-lg">
                Loading...
            </h1>
        );
    if (isError) return <div>Sorry There was an Error</div>;
    if (data) console.log(data.data);

    return (
        <div>
            <Header />
            <div className="flex flex-row flex-wrap gap-10 items-center justify-center py-10">
                {data?.data.map((product: ProductProps, id: number) => (
                    <Product {...product} key={id}></Product>
                ))}
            </div>
            {/*<Footer />*/}
        </div>
    );
}