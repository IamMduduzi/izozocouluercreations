import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import weddingImage from "@/assets/wedding-category.jpg";
import HomescreenImage from "@/assets/Home-screen.jpg";
import graduationImage from "@/assets/graduation-category.jpg";
import matricImage from "@/assets/matric-dance-category.jpg";


const Home = () => {
  const featuredWork = [
    {
      title: "Elegant Wedding Collection",
      image: weddingImage,
      description: "Timeless knitted wedding attires that capture your special day."
    },
    {
      title: "Graduation Excellence",
      image: graduationImage,
      description: "Celebrate your academic achievements in sophisticated style."
    },
    {
      title: "Matric Dance Glamour",
      image: matricImage,
      description: "Make your matric dance unforgettable with our stunning designs."
    }
  ];

  const stats = [
    { icon: Heart, value: "100+", label: "Happy Clients" },
    { icon: Sparkles, value: "200+", label: "Creations Made" },
    { icon: Users, value: "50+", label: "Special Events" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Homescreen})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            IZozo<span className="text-accent">Couleur</span>Creations
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-slide-in-left">
            Crafting exquisite knitted attires for your most precious moments. 
            From weddings to graduations, we weave dreams into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/services">
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="elegant" size="lg" asChild>
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in group cursor-pointer hover:scale-110 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 group-hover:shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <stat.icon className="h-8 w-8 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform duration-300">{stat.value}</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Latest Creations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most recent masterpieces, each uniquely crafted to perfection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredWork.map((work, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-glow hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer border-2 hover:border-primary/50">
                <div className="relative overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-64 object-cover object-center group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                  </div>
                </div>
                <CardContent className="p-6 relative">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-all duration-300 group-hover:scale-105">
                    {work.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{work.description}</p>
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">→</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/gallery">
                View Full Gallery <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Create Your Dream Attire?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's bring your vision to life with our expert craftsmanship and attention to detail.
            </p>
            <Button variant="elegant" size="lg" asChild>
              <Link to="/contact">Start Your Journey</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
