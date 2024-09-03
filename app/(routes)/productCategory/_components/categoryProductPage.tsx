import productItems from '../../../_utils/productItems';
import ProductItem from '../../../_components/productItem';


interface CategoryListProps {
  categoryName: string;
}

const CategoryPage = (  { categoryName }: CategoryListProps) => {

  const filteredProducts = productItems.filter(product => product.category.toLowerCase() === categoryName.toLowerCase());

  return (
    <div className="mt-10 p-5 sm:p-3">
      <h2 className="text-red-600 font-bold text-2xl">{categoryName} Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-6">
        {filteredProducts.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps(context: { params: { category: string } }) {
  const { category } = context.params;

  // Pass the category name as a prop to the page component
  return {
    props: {
      categoryName: category,
    },
  };
}

export default CategoryPage;
