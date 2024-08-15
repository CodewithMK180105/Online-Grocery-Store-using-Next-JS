import Image from "next/image"
import categoryItems from "../_utils/categoryItems"
import Link from "next/link"

interface CategoryListProps {
    categoryName: string;
  }

const CategoryList=(  { categoryName }: CategoryListProps) => {
    return(
        <div className="mt-5">
            <h2 className="text-red-600 font-bold text-2xl">Shop by Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-2">
                {categoryItems.map((item,index)=>(
                    <Link href={"/productCategory/"+item.name} key={index} className={`flex flex-col items-center bg-red-50 hover:bg-red-300 gap-2 p-3 rounded-lg group cursor-pointer ${item.name==categoryName && "bg-red-500"}`}>
                        <Image
                            src={item.image}
                            alt="icon"
                            className="w-24 h-24 object-cover group-hover:scale-125 transition-all ease-in" 
                        />
                        <h2 className={`text-start mt-2 text-red-800 ${item.name==categoryName && "text-white"}`}>{item.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export async function getServerSideProps(context: { params: { category: string } }) {
    const { category } = context.params;
  
    // Pass the category name as a prop to the page component
    return {
      props: {
        categoryName: category,
      },
    };
  }

export default CategoryList;