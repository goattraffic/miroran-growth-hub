import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import { services } from '../data/services';
import heroDashboard from '../assets/hero-dashboard.jpg';
import serviceAnalytics from '../assets/service-analytics.jpg';
import serviceAds from '../assets/service-ads.jpg';
import serviceCro from '../assets/service-cro.jpg';

const Home = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'Marketing Director',
      company: 'TechCorp',
      content: 'Miroran transformed our Google Ads performance. Our ROAS improved by 240% in just 3 months.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      position: 'CEO',
      company: 'E-commerce Plus',
      content: 'The CRO audit identified issues we never knew existed. Conversion rate doubled after implementing their recommendations.',
      rating: 5
    },
    {
      name: 'Emma Williams',
      position: 'Growth Manager',
      company: 'SaaS Startup',
      content: 'Professional, data-driven, and results-focused. Best performance marketing partner we\'ve worked with.',
      rating: 5
    }
  ];

  const stats = [
    { value: '250+', label: 'Successful Campaigns' },
    { value: '180%', label: 'Average ROI Increase' },
    { value: '$12M+', label: 'Ad Spend Managed' },
    { value: '98%', label: 'Client Satisfaction' }
  ];

  const serviceImages = {
    'google-ads-management': serviceAds,
    'meta-ads-facebook-instagram': serviceAds,
    'conversion-rate-optimization': serviceCro,
    'analytics-tracking-setup': serviceAnalytics
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-texture border-b border-divider">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <p className="editorial-caps text-sm mb-4">Performance Marketing Agency</p>
              <h1 className="font-heading font-bold mb-6">
                Maximize ROI, Minimize Wasted Ad Spend
              </h1>
              <p className="editorial-lead mb-8">
                Data-driven campaigns that scale your business. We turn ad budgets into measurable growth 
                through strategic Google Ads, Meta advertising, and systematic conversion optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#orderFormAnchor"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('orderFormAnchor')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-block px-8 py-3.5 bg-primary text-primary-foreground rounded font-medium text-center hover:bg-primary-dark transition-colors"
                >
                  Request Free Audit Today
                </a>
                <Link 
                  to="/#/services"
                  className="inline-block px-8 py-3.5 border border-border rounded font-medium text-center hover:bg-secondary transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src={heroDashboard} 
                alt="Performance Marketing Dashboard" 
                className="rounded-lg shadow-xl w-full"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading font-bold text-4xl md:text-5xl text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="editorial-divider container mx-auto" />

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="editorial-caps text-sm mb-3">What We Do</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Performance Marketing Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to drive qualified traffic, optimize conversions, and maximize your marketing ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                short={service.short}
                price={service.price}
                features={service.features}
                image={serviceImages[service.slug as keyof typeof serviceImages]}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/#/services"
              className="inline-block px-8 py-3.5 bg-primary text-primary-foreground rounded font-medium hover:bg-primary-dark transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <hr className="editorial-divider container mx-auto" />

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="editorial-caps text-sm mb-3">Client Success</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Trusted by Growing Businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-medium text-sm">{testimonial.name}</div>
                  <div className="text-xs text-caption">
                    {testimonial.position} • {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Form */}
      <ContactForm />
    </>
  );
};

export default Home;
