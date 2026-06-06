import MainTitle from "./MainTitle";
import { Link } from "react-router";

const categoriesData = [
  {
    id: 1,
    name: "راوترات",
    image:
      "https://dhakagadgetbd.com/wp-content/uploads/2025/06/DVB4230GL_ls_4.jpg",
  },
  {
    id: 2,
    name: "بطاقات SIM",
    image:
      "https://www.dignited.com/wp-content/uploads/2018/04/sim-cards-1.png",
  },
  {
    id: 3,
    name: "الكابلات",
    image: "./cable.webp",
  },
  {
    id: 4,
    name: "الخوادم",
    image:
      "https://assets.seobotai.com/cdn-cgi/image/quality=75,w=1536,h=1024/bizbot.com/68ad04cc5d4c81d674966466-1756180923458.jpg",
  },
];

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/products?category=${category.name.toLowerCase()}`}
      className="group relative overflow-hidden rounded-3xl h-80 block"
    >
      {/* Image */}
      <img
        src={category.image}
        alt={category.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3 className="text-white text-3xl font-bold mb-1">{category.name}</h3>
      </div>
    </Link>
  );
};

const Categories = () => {
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {categoriesData.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
