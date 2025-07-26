import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import weddingImage from "@/assets/wedding-category.jpg";
import graduationImage from "@/assets/graduation-category.jpg";
import matricImage from "@/assets/matric-dance-category.jpg";
import traditionalImage from "@/assets/traditional-category.jpg";

const Services = () => {
  const services = [
    {
      title: "Wedding Attires",
      description: "Elegant knitted wedding dresses, bridesmaid outfits, and accessories that make your special day unforgettable.",
      image: weddingImage,
      features: ["Custom wedding dresses", "Bridesmaid coordination", "Bridal accessories", "Groom's attire", "Family outfits"]
    },
    {
      title: "Graduation Gowns",
      description: "Sophisticated academic attire that celebrates your achievement with style and distinction.",
      image: graduationImage,
      features: ["Traditional academic gowns", "Custom university colors", "Honor cord accessories", "Faculty regalia", "Personalized details"]
    },
    {
      title: "Matric Dance",
      description: "Stunning formal wear that ensures you shine on one of the most important nights of your school career.",
      image: matricImage,
      features: ["Elegant evening gowns", "Modern formal wear", "Matching accessories", "Custom fittings", "Contemporary designs"]
    },
    {
      title: "Traditional Ceremonies",
      description: "Beautiful cultural attire that honors tradition while showcasing exquisite craftsmanship.",
      image: traditionalImage,
      features: ["Cultural formal wear", "Traditional patterns", "Heritage celebrations", "Family ceremonies", "Custom cultural pieces"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We discuss your vision, event details, timeline, and budget to create the perfect plan."
    },
    {
      step: "02",
      title: "Design Development",
      description: "Sketches and fabric selection based on your preferences and the occasion's requirements."
    },
    {
      step: "03",
      title: "Measurements & Fitting",
      description: "Precise measurements and initial fitting to ensure the perfect foundation for your garment."
    },
    {
      step: "04",
      title: "Creation Process",
      description: "Skilled craftsmanship brings your design to life with attention to every detail."
    },
    {
      step: "05",
      title: "Final Fitting",
      description: "Final adjustments and styling to ensure your attire fits perfectly and exceeds expectations."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-foreground">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specializing in exquisite knitted attires for life's most important celebrations. 
            Each piece is meticulously crafted to ensure you look and feel extraordinary.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="space-y-6">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
                <div className="bg-card p-6 rounded-lg border hover:shadow-elegant hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                  <h4 className="font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                        <Check className="h-4 w-4 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Book Your Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we ensure every step exceeds your expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center space-y-4 group cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto text-white font-bold text-lg group-hover:shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Investment in Excellence</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our pricing reflects the quality of materials, time, and expertise that goes into each creation. 
              We offer transparent pricing with no hidden costs, and payment plans are available for larger projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card p-8 rounded-lg border hover:shadow-elegant hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">Starting Prices</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex justify-between group-hover:translate-x-1 transition-transform duration-300">
                    <span>Wedding Attires</span>
                    <span className="font-semibold">From R3,500</span>
                  </li>
                  <li className="flex justify-between group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: '100ms' }}>
                    <span>Graduation Gowns</span>
                    <span className="font-semibold">From R1,800</span>
                  </li>
                  <li className="flex justify-between group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: '200ms' }}>
                    <span>Matric Dance</span>
                    <span className="font-semibold">From R2,200</span>
                  </li>
                  <li className="flex justify-between group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: '300ms' }}>
                    <span>Traditional Ceremonies</span>
                    <span className="font-semibold">From R2,800</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-card p-8 rounded-lg border hover:shadow-elegant hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">What You Get</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300">
                    <Check className="h-4 w-4 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    <span>Personal consultation</span>
                  </li>
                  <li className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: '100ms' }}>
                    <Check className="h-4 w-4 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    <span>Custom design & sketches</span>
                  </li>
                  <li className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: '200ms' }}>
                    <Check className="h-4 w-4 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    <span>Premium materials</span>
                  </li>
                  <li className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: '300ms' }}>
                    <Check className="h-4 w-4 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    <span>Multiple fittings</span>
                  </li>
                  <li className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: '400ms' }}>
                    <Check className="h-4 w-4 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    <span>Final styling session</span>
                  </li>
                </ul>
              </div>
            </div>

            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Get Detailed Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;