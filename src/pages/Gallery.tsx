import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import weddingImage from "@/assets/wedding-category.jpg";
import graduationImage from "@/assets/graduation-category.jpg";
import matricImage from "@/assets/matric-dance-category.jpg";
import matrciImage from "@/assets/matrci-dance-category.jpg";
import traditionalImage from "@/assets/traditional-category.jpg";
import traditionalImage from "@/assets/traditional-category.jpg";


const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Work" },
    { id: "weddings", label: "Weddings" },
    { id: "graduations", label: "Graduations" },
    { id: "matric", label: "Matric Dance" },
    { id: "traditional", label: "Traditional" }
  ];

  // Mock gallery data - in a real app, this would come from a CMS or database
  const galleryItems = [
    {
      id: 1,
      category: "weddings",
      image: weddingImage,
      title: "Elegant Bridal Gown",
      description: "Custom knitted wedding dress with intricate lacework"
    },
    {
      id: 2,
      category: "graduations",
      image: graduationImage,
      title: "Academic Excellence",
      description: "Traditional graduation gown with university colors"
    },
    {
      id: 3,
      category: "matric",
      image: matricImage,
      title: "Matric Dance Elegance",
      description: "Stunning formal wear for the perfect night"
    },
    {
      id: 4,
      category: "traditional",
      image: traditionalImage,
      title: "Cultural Heritage",
      description: "Traditional ceremony attire with modern touches"
    },
    {
      id: 5,
      category: "weddings",
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=800&q=80",
      title: "Bridesmaid Collection",
      description: "Coordinated bridesmaid dresses in soft pastels"
    },
    {
      id: 6,
      category: "graduations",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
      title: "PhD Regalia",
      description: "Distinguished doctoral graduation attire"
    },
    {
      id: 7,
      category: "matric",
      image: matrciImage,
      title: "Modern Formal",
      description: "Contemporary matric dance dress with unique detailing"
    },
    {
      id: 8,
      category: "traditional",
      image: "https://images.unsplash.com/photo-1583094356554-8c1c2f0e9fb5?auto=format&fit=crop&w=800&q=80",
      title: "Heritage Celebration",
      description: "Traditional ceremony outfit for cultural events"
    },
    {
      id: 9,
      category: "weddings",
      image: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?auto=format&fit=crop&w=800&q=80",
      title: "Vintage Inspired",
      description: "Classic wedding attire with vintage charm"
    }
  ];

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-foreground">Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of stunning creations, each piece tells a unique story 
            of craftsmanship, elegance, and the special moments they were created for.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="transition-all duration-300"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-glow hover:scale-105 hover:-translate-y-3 transition-all duration-500 cursor-pointer border-2 hover:border-primary/50">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-semibold mb-2 group-hover:scale-105 transition-transform duration-300">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Inspired by What You See?</h2>
            <p className="text-xl mb-8 opacity-90">
              Each of these pieces started with a vision. Let's create something unique for your special occasion.
            </p>
            <Button variant="elegant" size="lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
