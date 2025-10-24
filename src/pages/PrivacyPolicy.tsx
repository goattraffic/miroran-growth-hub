const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-heading font-bold text-4xl mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p><strong>Last Updated:</strong> October 24, 2025</p>
          
          <h2 className="font-heading font-semibold text-2xl text-foreground mt-8 mb-4">Information We Collect</h2>
          <p>We collect information you provide directly, including name, email, phone number when you submit forms on our website.</p>
          
          <h2 className="font-heading font-semibold text-2xl text-foreground mt-8 mb-4">How We Use Your Information</h2>
          <p>We use collected information to respond to inquiries, provide services, and communicate about our offerings.</p>
          
          <h2 className="font-heading font-semibold text-2xl text-foreground mt-8 mb-4">Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information from unauthorized access.</p>
          
          <h2 className="font-heading font-semibold text-2xl text-foreground mt-8 mb-4">Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data. Contact us to exercise these rights.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
