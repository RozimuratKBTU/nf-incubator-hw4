import Header from "@/app/components/Header";
import CreateProductComponent from "@/app/components/CreateProductComponent";

export default function CreateProduct(){
     return (
       <div className="flex flex-col h-screen">
        <Header/>
           <CreateProductComponent/>
       </div>
     );
}