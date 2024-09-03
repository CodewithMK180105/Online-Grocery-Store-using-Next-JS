import CategoryList from "@/app/_components/categoryList";
import CategoryPage from "../_components/categoryProductPage";
import { Metadata } from "next";


interface ProductCategoryProps {
    params: {
      categoryName: string;
    };
  }
  
  // Function to generate dynamic metadata based on the category name
  export const generateMetadata = ({ params }: ProductCategoryProps): Metadata => {
    const { categoryName } = params;
    
    let categoryTitle = "Buy Fresh Fruits, Vegetables, and Groceries Online";
  
    switch (categoryName) {
      case "Vegetables":
        categoryTitle = "Your Source for Crisp, Healthy Vegetables";
        break;
      case "Fruits":
        categoryTitle = "Your Source for Fresh, Juicy Fruits";
        break;
      case "Milk_Juice":
        categoryTitle = "Quality Milk and Juices Delivered to Your Door";
        break;
      case "Bakery_Products":
        categoryTitle = "Fresh Bakery Products for Every Craving";
        break;
      case "Grains":
        categoryTitle = "Discover a Variety of Grains Here";
        break;
      case "Chicken_and_Egg":
        categoryTitle = "Premium Non-Veg Selection: Chicken, Eggs, Fish, and Prawns";
        break;
      default:
        categoryTitle = "Buy Fresh Fruits, Vegetables, and Groceries Online";
    }
  
    return {
      title: `FreshMart - ${categoryTitle}`,
      description:
        "Shop fresh fruits, vegetables, dairy, bakery, grains, and more at FreshMart Market. Quality groceries delivered to your doorstep with convenience and reliability.",
    };
  };

export default function ProductCategory({params}: ProductCategoryProps){
    return(
        <div>
            <h2 className="p-4 bg-primary text-white font-bold text-2xl text-center mb-6">{params.categoryName}</h2>
            <CategoryList categoryName={params.categoryName} />
            <CategoryPage categoryName={params.categoryName}/>
        </div>
    )
}