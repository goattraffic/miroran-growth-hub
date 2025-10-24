const Refunds = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-heading font-bold text-4xl mb-8">Refunds Policy</h1>
        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <p><strong>Last Updated:</strong> October 24, 2025</p>
          
          <h2 className="font-heading font-semibold text-2xl text-foreground mt-8 mb-4">Service Refunds</h2>
          <p>Refund eligibility depends on service type and timing. Contact us within 14 days for project-based services.</p>
          
          <h2 className="font-heading font-semibold text-2xl text-foreground mt-8 mb-4">Monthly Services</h2>
          <p>Monthly management services can be cancelled with 30 days notice. No refunds for current month.</p>
          
          <h2 className="font-heading font-semibold text-2xl text-foreground mt-8 mb-4">How to Request</h2>
          <p>Contact us to discuss refund requests. Each case is reviewed individually.</p>
        </div>
      </div>
    </div>
  );
};

export default Refunds;
