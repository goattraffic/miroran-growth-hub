import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-heading font-bold text-4xl mb-4">Thank You!</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your request has been successfully submitted. We'll contact you within 24 hours to schedule your free marketing audit.
        </p>
        <Link to="/#/" className="inline-block px-8 py-3.5 bg-primary text-primary-foreground rounded font-medium hover:bg-primary-dark transition-colors">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
