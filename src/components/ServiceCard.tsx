import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

const ServiceCard = ({ title, description, image, className }: ServiceCardProps) => {
  return (
    <Card className={`group overflow-hidden hover:shadow-glow hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer border-2 hover:border-primary/50 ${className}`}>
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 w-12 h-12 bg-primary/20 rounded-full backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      <CardContent className="p-6 space-y-3 relative">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-105">
          {title}
        </h3>
        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{description}</p>
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
            <span className="text-white text-xs">→</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;