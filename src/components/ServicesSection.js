import {
  User,
  Video,
  Mail,
  ShieldCheck,
  FileText,
  BedDouble,
  Stethoscope,
  HeartPulse,
  TestTube2,
} from "lucide-react";

const ServiceCard = ({ icon, title, subtitle, bgColor }) => (
  <div
    className={`p-1 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500`}
  >
    <div className="bg-white p-6 rounded-md text-center h-full flex flex-col justify-center items-center">
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${bgColor}`}
      >
        {icon}
      </div>
      <h3 className="font-bold text-lg text-cyan-700">{title}</h3>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: <User size={32} className="text-orange-500" />,
      title: "Doctor Appointment",
      subtitle: "Book Now",
      bgColor: "bg-orange-100",
    },
    {
      icon: <Video size={32} className="text-yellow-500" />,
      title: "Video Consultation",
      subtitle: "Book Now",
      bgColor: "bg-yellow-100",
    },
    {
      icon: <Mail size={32} className="text-yellow-600" />,
      title: "Visa Invitation letter",
      subtitle: "Book Now",
      bgColor: "bg-yellow-100",
    },
    {
      icon: <ShieldCheck size={32} className="text-yellow-700" />,
      title: "Visa Assistance",
      subtitle: "Apply Now",
      bgColor: "bg-yellow-100",
    },
    {
      icon: <FileText size={32} className="text-yellow-800" />,
      title: "Passport Assistance",
      subtitle: "Apply Now",
      bgColor: "bg-yellow-100",
    },
    {
      icon: <Stethoscope size={32} className="text-orange-500" />,
      title: "Treatment Estimate",
      subtitle: "Get Estimate",
      bgColor: "bg-orange-100",
    },
    {
      icon: <BedDouble size={32} className="text-yellow-500" />,
      title: "Hotel Booking",
      subtitle: "Coming Soon",
      bgColor: "bg-yellow-100",
    },
    {
      icon: <HeartPulse size={32} className="text-yellow-600" />,
      title: "Department of Cancer",
      subtitle: "Coming Soon",
      bgColor: "bg-yellow-100",
    },
    {
      icon: <HeartPulse size={32} className="text-yellow-700" />,
      title: "Department of Surgery",
      subtitle: "Coming Soon",
      bgColor: "bg-yellow-100",
    },
    {
      icon: <TestTube2 size={32} className="text-yellow-800" />,
      title: "Department of IVF",
      subtitle: "Coming Soon",
      bgColor: "bg-yellow-100",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
