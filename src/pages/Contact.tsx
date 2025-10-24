import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-hero-texture border-b border-divider py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="editorial-caps text-sm mb-3">Get In Touch</p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Let's Discuss Your Marketing Goals
            </h1>
            <p className="editorial-lead">
              Request a free audit to see how we can improve your campaign performance and maximize your marketing ROI.
            </p>
          </div>
        </div>
      </div>

      <ContactForm />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-semibold text-2xl mb-6">What Happens Next?</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-bold text-primary">1</span>
              </div>
              <div>
                <h3 className="font-medium mb-2">We'll Review Your Information</h3>
                <p className="text-sm text-muted-foreground">
                  Our team will analyze your current marketing setup and identify opportunities for improvement.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-bold text-primary">2</span>
              </div>
              <div>
                <h3 className="font-medium mb-2">Schedule a Consultation</h3>
                <p className="text-sm text-muted-foreground">
                  We'll reach out within 24 hours to schedule a call and discuss your specific needs and goals.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-bold text-primary">3</span>
              </div>
              <div>
                <h3 className="font-medium mb-2">Receive Your Free Audit</h3>
                <p className="text-sm text-muted-foreground">
                  Get a comprehensive analysis with actionable recommendations to improve your campaign performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
