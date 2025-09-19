import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import HomescreenImage from "@/assets/Home-screen.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Craft",
      description: "Every stitch is made with love and dedication to create something truly special."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We use only the finest materials and techniques to ensure lasting beauty."
    },
    {
      icon: Users,
      title: "Personal Touch",
      description: "Each creation is customized to reflect your unique style and personality."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We understand the importance of your special day and deliver on time, every time."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-foreground">About IZozoCouleurCreations</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Where passion meets craftsmanship, and every thread tells a story of dedication, 
              love, and the pursuit of creating something truly extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">My Journey</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  It all began with a simple love for knitting that I inherited from my grandmother. 
                  What started as a hobby during my university years slowly transformed into a passion 
                  that would define my career and life.
                </p>
                <p>
                  After graduating with a degree in Fashion Design, I noticed a gap in the market for 
                  beautifully crafted, personalized knitted attires for special occasions. Traditional 
                  garments were often mass-produced and lacked the personal touch that makes each 
                  moment truly special.
                </p>
                <p>
                  In 2018, I took the leap and founded IZozoCouleurCreations. Starting from my small 
                  apartment, I began creating custom pieces for friends and family. Word spread quickly 
                  about the quality and uniqueness of my work, and soon I was crafting attires for 
                  weddings, graduations, and other milestone celebrations.
                </p>
                <p>
                  Today, I'm proud to have created over 1000 unique pieces, each one telling its own 
                  story and marking a special moment in someone's life. Every stitch carries my 
                  commitment to excellence and my passion for helping people look and feel their best 
                  on their most important days.
                </p>
              </div>
            </div>
            <div className="lg:order-first">
              <Card className="overflow-hidden shadow-elegant">
                <img
                  src={HomescreenImage}
                  alt="Izozo at work"
                  className="w-full h-96 object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">What Drives Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The values that guide every creation and interaction with my cherished clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-glow transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">My Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From initial consultation to final fitting, every step is carefully planned
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold">Consultation</h3>
              <p className="text-muted-foreground">
                We discuss your vision, preferences, and requirements in detail to understand 
                exactly what you're looking for.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold">Design & Creation</h3>
              <p className="text-muted-foreground">
                I create detailed sketches and begin the careful process of bringing your 
                vision to life, stitch by stitch.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold">Fitting & Perfection</h3>
              <p className="text-muted-foreground">
                Multiple fittings ensure the perfect fit, and final adjustments are made 
                to achieve absolute perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Let's Create Something Beautiful Together</h2>
            <p className="text-xl mb-8 opacity-90">
              I'd love to hear about your upcoming special occasion and how I can help make it even more memorable.
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

export default About;