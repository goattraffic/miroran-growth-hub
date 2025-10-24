import { useState } from 'react';
import aboutTeam from '../assets/about-team.jpg';

const About = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What makes your agency different from others?',
      answer: 'We focus exclusively on performance marketing with measurable results. Every campaign is data-driven, continuously optimized, and tied directly to your business KPIs. No vanity metrics—only ROI that matters.'
    },
    {
      question: 'Do you work with small businesses or only large enterprises?',
      answer: 'We work with businesses of all sizes. Our services are scalable and can be customized to fit your budget and goals, whether you\'re spending $1,000/month or $100,000/month on advertising.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Initial improvements typically appear within 2-4 weeks for optimization work. For new campaigns, we usually see meaningful data and positive trends within 30-60 days. Significant ROI improvements generally compound over 3-6 months.'
    },
    {
      question: 'What platforms do you specialize in?',
      answer: 'We specialize in Google Ads (Search, Display, Shopping, YouTube) and Meta platforms (Facebook, Instagram). We also provide analytics setup, CRO, A/B testing, and landing page development to support your campaigns.'
    },
    {
      question: 'Do you require long-term contracts?',
      answer: 'We offer both project-based work (like audits and analytics setup) and ongoing management. For ongoing services, we typically recommend a 3-month minimum to achieve meaningful results, but we don\'t lock clients into lengthy contracts.'
    },
    {
      question: 'How do you communicate results and progress?',
      answer: 'You\'ll receive detailed monthly reports covering all key metrics, insights, and action items. We also schedule regular check-in calls to discuss performance, strategy adjustments, and opportunities. You always have direct access to your account manager.'
    },
    {
      question: 'Can you help if our ads are currently underperforming?',
      answer: 'Absolutely. Many clients come to us with underperforming campaigns. Our audit identifies issues and opportunities, then we implement strategic changes to improve performance. Most clients see significant improvement within the first 60-90 days.'
    },
    {
      question: 'What information do you need to get started?',
      answer: 'We\'ll need access to your ad accounts, analytics platforms, and any relevant conversion tracking. We\'ll also want to understand your business goals, target audience, customer value, and key performance indicators.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-hero-texture border-b border-divider py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="editorial-caps text-sm mb-3">About Miroran</p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Performance Marketing Experts Focused on Your Growth
            </h1>
            <p className="editorial-lead">
              We're a specialized performance marketing agency dedicated to maximizing ROI through 
              data-driven paid advertising and systematic conversion optimization.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-heading font-bold text-3xl mb-6">Our Approach</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Every dollar you spend on advertising should be accountable. We believe in transparent, 
              data-backed strategies that tie directly to revenue growth. No fluff, no vanity metrics—just 
              measurable performance improvements.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Our team combines deep platform expertise with rigorous testing methodology. We don't just 
              set up campaigns and hope for the best. We continuously analyze, test, and optimize to squeeze 
              maximum value from your marketing budget.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're scaling existing campaigns or building from scratch, we bring the strategic 
              thinking and technical execution needed to drive sustainable, profitable growth.
            </p>
          </div>
          <div>
            <img 
              src={aboutTeam} 
              alt="Performance Marketing Team" 
              className="rounded-lg shadow-lg w-full"
              loading="lazy"
            />
          </div>
        </div>

        <hr className="editorial-divider" />

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="font-heading font-bold text-3xl mb-8 text-center">What Drives Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Data-Driven Decisions</h3>
              <p className="text-sm text-muted-foreground">
                Every strategy, every change, every recommendation is backed by real performance data and statistical significance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Continuous Optimization</h3>
              <p className="text-sm text-muted-foreground">
                Marketing is never "set and forget." We constantly test, refine, and improve to maximize your returns.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">Transparent Reporting</h3>
              <p className="text-sm text-muted-foreground">
                You'll always know exactly what's happening with your campaigns, what's working, and what's next.
              </p>
            </div>
          </div>
        </div>

        <hr className="editorial-divider" />

        {/* FAQ Section */}
        <div>
          <h2 className="font-heading font-bold text-3xl mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary transition-colors"
                >
                  <span className="font-medium">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-secondary border-t border-border">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
