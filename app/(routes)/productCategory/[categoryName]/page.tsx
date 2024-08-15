import CategoryList from "@/app/_components/categoryList";
import CategoryPage from "../_components/categoryProductPage";

export default function ProductCategory({params}:any){
    return(
        <div>
            <h2 className="p-4 bg-primary text-white font-bold text-2xl text-center mb-6">{params.categoryName}</h2>
            <CategoryList categoryName={params.categoryName} />
            <CategoryPage categoryName={params.categoryName}/>
        </div>
    )
}