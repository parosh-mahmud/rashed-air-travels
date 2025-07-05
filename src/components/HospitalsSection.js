import Carousel from "./Carousel";
import Image from "next/image";
import { Star } from "lucide-react";

const HospitalCard = ({ imgSrc, title, location }) => (
  <div className="border rounded-lg overflow-hidden">
    <Image
      src={imgSrc}
      alt={title}
      width={400}
      height={250}
      className="w-full object-cover"
    />
    <div className="p-4">
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{location}</p>
      <div className="flex gap-1">
        <Star size={16} className="text-yellow-400 fill-current" />
        <Star size={16} className="text-yellow-400 fill-current" />
        <Star size={16} className="text-gray-300 fill-current" />
        <Star size={16} className="text-gray-300 fill-current" />
        <Star size={16} className="text-gray-300 fill-current" />
      </div>
    </div>
  </div>
);

const HospitalsSection = () => {
  const hospitals = [
    {
      imgSrc: "https://placehold.co/400x250/3b82f6/ffffff",
      title: "Aditya Birla Memorial Hospital",
      location: "Pune, India",
    },
    {
      imgSrc: "https://placehold.co/400x250/10b981/ffffff",
      title: "SIMS Hospital",
      location: "Chennai, India",
    },
    {
      imgSrc: "https://placehold.co/400x250/8b5cf6/ffffff",
      title: "Aster CMI Hospitals - Bangalore",
      location: "Bangalore, India",
    },
    {
      imgSrc: "https://placehold.co/400x250/ef4444/ffffff",
      title: "Manipal Hospital, Dhakuria",
      location: "Kolkata, India",
    },
    {
      imgSrc: "https://placehold.co/400x250/f97316/ffffff",
      title: "Manipal Road, Bk",
      location: "Unknown",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Top visited hospital</h2>
        <p className="text-center text-gray-500 mb-12">
          Get our best hospitals World-Wide
        </p>
        <Carousel>
          {hospitals.map((h) => (
            <HospitalCard key={h.title} {...h} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};
export default HospitalsSection;
