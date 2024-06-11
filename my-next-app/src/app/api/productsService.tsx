import axios from "axios";

export default async function getData(){
    const response = await axios.get('https://fakestoreapi.com/products');

    return response;
}