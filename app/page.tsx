import Image from "next/image";
import Header from "./components/Header";
import ServiceCard from "./components/ServiceCard";
import Footer from "./components/Footer";
import JitsiContainer from "./components/JitsiContainer";

export default function Home() {
  const services = [
    {
      title: "Website Development",
      description: "Custom websites built from scratch.",
    },
    {
      title: "Full-stack Development",
      description: "Backend and frontend integrated solutions.",
    },
    {
      title: "Deployment & Hosting",
      description: "Deploy and host your website securely.",
    },
  ];
  return (
    <div className="bg-primary font-sans  ">
      <Header />
      <JitsiContainer />

      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-border to-primary"
      >
        <div className="text-center text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Your Digital Solution Starts Here
          </h1>
          <p className="text-lg md:text-2xl">
            We provide end-to-end website and app development services.
          </p>
        </div>
      </section>

      <section id="services" className="py-20 px-8">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
