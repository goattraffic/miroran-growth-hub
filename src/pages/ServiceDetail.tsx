import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/services';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/#/services" replace />;
  }

  const handleOrderClick = () => {
    document.getElementById('orderFormAnchor')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <div className="bg-secondary border-b border-divider py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center text-sm text-muted-foreground">
            <Link to="/#/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/#/services" className="hover:text-primary transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Service Header */}
      <div className="bg-hero-texture border-b border-divider py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="editorial-caps text-sm mb-3">Service Details</p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              {service.title}
            </h1>
            <p className="editorial-lead mb-6">
              {service.short}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleOrderClick}
                className="px-8 py-3.5 bg-primary text-primary-foreground rounded font-medium hover:bg-primary-dark transition-colors"
              >
                Request This Service
              </button>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Starting from:</span>
                <span className="font-heading font-bold text-2xl text-primary">{service.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: service.contentHtml }}
              style={{
                lineHeight: '1.75',
                color: 'hsl(var(--foreground))'
              }}
            />
            
            <hr className="editorial-divider" />

            <div className="mt-8">
              <h3 className="font-heading font-semibold text-2xl mb-6">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us today to discuss how this service can help achieve your marketing goals. 
                We'll analyze your current situation and provide a customized strategy.
              </p>
              <button 
                onClick={handleOrderClick}
                className="px-8 py-3.5 bg-primary text-primary-foreground rounded font-medium hover:bg-primary-dark transition-colors"
              >
                Request Free Consultation
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
              <h3 className="font-heading font-semibold text-xl mb-4">Key Features</h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" 
                      fill="none" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <hr className="my-6 border-divider" />

              <div className="mb-6">
                <h4 className="font-medium mb-2">Investment</h4>
                <p className="font-heading font-bold text-3xl text-primary">{service.price}</p>
              </div>

              <button 
                onClick={handleOrderClick}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded font-medium hover:bg-primary-dark transition-colors"
              >
                Get Started
              </button>

              <div className="mt-6 text-center">
                <Link 
                  to="/#/services"
                  className="text-sm text-primary hover:underline"
                >
                  ← Back to All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
