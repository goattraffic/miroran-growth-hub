import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import serviceAnalytics from '../assets/service-analytics.jpg';
import serviceAds from '../assets/service-ads.jpg';
import serviceCro from '../assets/service-cro.jpg';

const Services = () => {
  const serviceImages: Record<string, string> = {
    'google-ads-management': serviceAds,
    'meta-ads-facebook-instagram': serviceAds,
    'conversion-rate-optimization': serviceCro,
    'analytics-tracking-setup': serviceAnalytics,
    'ab-testing-experimentation': serviceCro,
    'performance-audit': serviceAnalytics,
    'marketing-automation': serviceAnalytics,
    'landing-page-development': serviceCro
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-hero-texture border-b border-divider py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="editorial-caps text-sm mb-3">Our Services</p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Performance Marketing Services
            </h1>
            <p className="editorial-lead">
              Comprehensive solutions designed to maximize your marketing ROI through data-driven strategies 
              and continuous optimization.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              slug={service.slug}
              title={service.title}
              short={service.short}
              price={service.price}
              features={service.features}
              image={serviceImages[service.slug]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
