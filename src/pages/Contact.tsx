import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Booking Request Submitted!",
      description: "Thank you for your interest. We'll be in touch within 24 hours to schedule your consultation.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Studio",
      details: ["Ladysmith, 3370", "South Africa"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["0796035095"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["lorenciashabalala@gmail.com"]
    },
    {
      icon: Clock,
      title: "Studio Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM", "Sun: By appointment"]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-foreground">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's discuss your upcoming special occasion 
            and how we can create something truly extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Book Your Fitting</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll schedule a consultation to discuss your needs.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+27 123 456 789"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="eventType">Event Type *</Label>
                      <Select value={formData.eventType} onValueChange={(value) => handleInputChange("eventType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="graduation">Graduation</SelectItem>
                          <SelectItem value="matric">Matric Dance</SelectItem>
                          <SelectItem value="traditional">Traditional Ceremony</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventDate">Event Date</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => handleInputChange("eventDate", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell Us About Your Vision</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Describe your vision, color preferences, style ideas, or any specific requirements..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Submit Booking Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Contact Information</h2>
                <div className="grid grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary rounded-lg">
                          <info.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Follow Our Journey</h3>
                <p className="text-muted-foreground mb-4">
                  Stay connected and see our latest creations on social media.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </Card>

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">Studio Location</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-2">How far in advance should I book?</h3>
                <p className="text-muted-foreground">
                  We recommend booking 3-6 months in advance for weddings and major events, 
                  and 2-3 months for other occasions to ensure adequate time for creation and fittings.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Do you offer rush orders?</h3>
                <p className="text-muted-foreground">
                  Yes, we can accommodate rush orders depending on our current workload. 
                  Rush orders may incur additional fees and are subject to availability.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-2">What's included in the consultation?</h3>
                <p className="text-muted-foreground">
                  The consultation includes design discussion, fabric selection, measurements, 
                  timeline planning, and a detailed quote. The initial consultation is complimentary.
                </p>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-2">How many fittings are included?</h3>
                <p className="text-muted-foreground">
                  Typically 2-3 fittings are included in the service. Additional fittings 
                  can be scheduled if needed to ensure the perfect fit.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Can you work with my budget?</h3>
                <p className="text-muted-foreground">
                  Absolutely! We'll work with you to create something beautiful within your budget. 
                  We offer various options and payment plans to make our services accessible.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Do you provide alterations?</h3>
                <p className="text-muted-foreground">
                  Yes, we provide alterations for garments we've created. We also offer 
                  alteration services for other formal wear, though priority is given to our creations.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
