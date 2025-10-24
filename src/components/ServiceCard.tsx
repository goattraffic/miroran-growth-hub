import { Link } from 'react-router-dom';

interface ServiceCardProps {
  slug: string;
  title: string;
  short: string;
  price: string;
  features: string[];
  image?: string;
}

const ServiceCard = ({ slug, title, short, price, features, image }: ServiceCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover-lift">
      {image && (
        <div className="h-48 overflow-hidden bg-secondary">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-heading font-semibold text-xl">{title}</h3>
          <span className="text-primary font-semibold text-sm whitespace-nowrap ml-2">{price}</span>
        </div>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{short}</p>
        
        <ul className="space-y-2 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start text-sm">
              <svg 
                className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <Link 
          to={`/#/services/${slug}`}
          className="inline-block w-full text-center px-6 py-2.5 border border-primary text-primary rounded font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
