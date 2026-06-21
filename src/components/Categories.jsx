import useCatsBrands from "../hooks/useCatsBrands";
import MainTitle from "./MainTitle";
import { useNavigate } from "react-router";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    // الانتقال لصفحة المتجر مع تمرير الـ id في الروابط
    navigate(`/shop?category=${category?.documentId}`);
  };

  return (
    <div
      onClick={handleCategoryClick}
      className="group relative overflow-hidden rounded-2xl h-32 md:h-50 block cursor-pointer"
    >
      {/* Image */}
      <img
        src={`http://localhost:1337${category.image[0].url}`}
        alt={category.title}
        className="absolute inset-0 min-h-full w-full transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3 className="text-white text-lg md:text-3xl font-bold mb-1">
          {category.title}
        </h3>
      </div>
    </div>
  );
};

const Categories = () => {
  const { categories } = useCatsBrands();

  return (
    <section className="py-12">
      <div className="container">
        <MainTitle
          pos="center"
          margin="auto"
          title="التصنيفات"
          subtitle="اكتشف مجموعتنا المتنوعة من المنتجات"
          description="تصفح بين فئاتنا المختلفة للعثور على ما يناسب احتياجاتك - من أجهزة التوجيه إلى معدات الشبكات والكابلات الألياف الضوئية والخوادم كل ما تحتاجه لبناء شبكة حديثة وآمنة."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 mt-4 md:mt-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
