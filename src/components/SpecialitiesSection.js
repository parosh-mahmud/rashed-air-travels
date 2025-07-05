import Carousel from "./Carousel";
import Image from "next/image";

const SpecialityCard = ({ imgSrc, title }) => (
  <div className="text-center">
    <div className="relative w-32 h-32 mx-auto rounded-full p-1 border-2 border-gray-200">
      <Image
        src={imgSrc}
        alt={title}
        layout="fill"
        className="rounded-full object-cover"
      />
    </div>
    <h3 className="mt-4 font-semibold">{title}</h3>
  </div>
);

const SpecialitiesSection = () => {
  const specialities = [
    {
      imgSrc: "https://placehold.co/128x128/a3e635/ffffff?text=Brain",
      title: "Brain Cancer",
    },
    {
      imgSrc: "https://placehold.co/128x128/f0abfc/ffffff?text=Gyno",
      title: "Gynecologic Oncology",
    },
    {
      imgSrc: "https://placehold.co/128x128/f9a8d4/ffffff?text=Lungs",
      title: "Lung Transplant",
    },
    {
      imgSrc: "https://placehold.co/128x128/ef4444/ffffff?text=Hema",
      title: "Pediatric Hematology",
    },
    {
      imgSrc: "https://placehold.co/128x128/ec4899/ffffff?text=Thala",
      title: "Pediatric Thalassemia",
    },
    {
      imgSrc: "https://placehold.co/128x128/38bdf8/ffffff?text=Anesth",
      title: "Anesthesiology",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Specialities</h2>
        <p className="text-center text-gray-500 mb-12">
          Find our best doctors by Specialization
        </p>
        <Carousel>
          {specialities.map((spec) => (
            <SpecialityCard key={spec.title} {...spec} />
          ))}
        </Carousel>
        <div className="text-center mt-12">
          <button className="bg-yellow-500 text-white font-bold px-8 py-3 rounded-lg">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};
export default SpecialitiesSection;
