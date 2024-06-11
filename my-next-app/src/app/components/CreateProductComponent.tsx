'use client';

import axios from 'axios';
import React, { useState } from 'react';

export default function CreateProductComponent() {
    const [formValues, setFormValues] = useState({
        title: '',
        price: '',
        description: '',
        image: '',
        category: '',
    });

    const placeholders = [
        'Enter product title',
        'Enter product price',
        'Enter product description',
        'Left the image',
        'Enter product category',
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const headers = {
        'Content-Type': 'application/json',
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await axios
            .post('https://fakestoreapi.com/products', JSON.stringify(formValues), {
                headers,
            })
            .then((e) => alert(JSON.stringify(e.data)));
    };

    return (
        <div className="flex items-center justify-center p-10 flex-grow">
            <form
                className="border-4 flex flex-col gap-10 p-20 rounded border-gray-800 w-1/2"
                onSubmit={handleSubmit}
            >
                {placeholders.map((placeholder, id) => (
                    <input
                        key={id}
                        type="text"
                        name={placeholder.split(' ')[2].toLowerCase()}
                        value={
                            formValues[
                                placeholder
                                    .split(' ')[2]
                                    .toLowerCase() as keyof typeof formValues
                                ]
                        }
                        placeholder={placeholder}
                        onChange={handleInputChange}
                        className="border-2 p-2 rounded border-gray-800"
                    ></input>
                ))}
                <div className="justify-center flex">
                    <button type="submit" className="p-2 rounded bg-gray-800 text-white">
                        Create a product
                    </button>
                </div>
            </form>
        </div>
    );
}