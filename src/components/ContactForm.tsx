import { useState, useEffect, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    consent: false,
    __hp: '' // honeypot
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [focusTime, setFocusTime] = useState<number | null>(null);

  // Capture UTM parameters on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmData = {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_term: urlParams.get('utm_term') || '',
      utm_content: urlParams.get('utm_content') || '',
      gclid: urlParams.get('gclid') || '',
      fbclid: urlParams.get('fbclid') || ''
    };
    sessionStorage.setItem('utmData', JSON.stringify(utmData));
  }, []);

  const handleFocus = () => {
    if (!focusTime) {
      setFocusTime(Date.now());
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    // Honeypot check
    if (formData.__hp) {
      // Silent success for bots
      navigate('/#/thank-you');
      return;
    }

    // Validation
    if (!formData.first_name.trim() || !formData.last_name.trim() || 
        !formData.email.trim() || !formData.phone.trim()) {
      setError('Please fill in all required fields');
      return;
    }

    if (!formData.consent) {
      setError('You must accept the privacy policy to continue');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare form data
      const submitData = new FormData();
      submitData.append('first_name', formData.first_name.trim());
      submitData.append('last_name', formData.last_name.trim());
      submitData.append('email', formData.email.trim());
      submitData.append('phone', formData.phone.trim());
      submitData.append('consent', String(formData.consent));
      submitData.append('__hp', formData.__hp);
      submitData.append('__ts', String(Date.now()));
      
      // Add UTM data
      const utmData = JSON.parse(sessionStorage.getItem('utmData') || '{}');
      Object.entries(utmData).forEach(([key, value]) => {
        submitData.append(key, String(value));
      });
      
      // Add referrer and path
      submitData.append('referrer', document.referrer || '');
      submitData.append('path', window.location.pathname + window.location.hash);
      
      // Add fill time
      if (focusTime) {
        submitData.append('fill_time', String(Date.now() - focusTime));
      }

      // Submit to endpoint
      const response = await fetch('/api/lead.php', {
        method: 'POST',
        headers: {
          'X-Requested-With': 'fetch'
        },
        body: submitData
      });

      const result = await response.json();

      if (result.ok) {
        // Success - redirect to thank you page
        navigate('/#/thank-you');
      } else {
        setError(result.error || 'An error occurred. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="orderFormAnchor" className="bg-secondary py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-3xl mb-3">Request Free Audit</h2>
          <p className="text-muted-foreground">
            Get a comprehensive analysis of your current marketing performance with actionable recommendations.
          </p>
        </div>

        <form onSubmit={handleSubmit} id="leadForm" className="bg-card p-8 rounded-lg border border-border">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium mb-2">
                First Name <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                required
                maxLength={100}
                value={formData.first_name}
                onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                onFocus={handleFocus}
                className="w-full px-4 py-2.5 border border-input rounded focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="last_name" className="block text-sm font-medium mb-2">
                Last Name <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                required
                maxLength={100}
                value={formData.last_name}
                onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                onFocus={handleFocus}
                className="w-full px-4 py-2.5 border border-input rounded focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              maxLength={255}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onFocus={handleFocus}
              className="w-full px-4 py-2.5 border border-input rounded focus:outline-none focus:ring-2 focus:ring-ring bg-background"
              disabled={isSubmitting}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number <span className="text-destructive">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              maxLength={20}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              onFocus={handleFocus}
              className="w-full px-4 py-2.5 border border-input rounded focus:outline-none focus:ring-2 focus:ring-ring bg-background"
              disabled={isSubmitting}
            />
          </div>

          {/* Honeypot field - hidden from users */}
          <input
            type="text"
            name="__hp"
            value={formData.__hp}
            onChange={(e) => setFormData({ ...formData, __hp: e.target.value })}
            style={{ position: 'absolute', left: '-9999px' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="mb-6">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                required
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1"
                disabled={isSubmitting}
              />
              <span className="text-sm text-muted-foreground">
                I agree to the processing of my personal data in accordance with the{' '}
                <a href="/#/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                .
              </span>
            </label>
          </div>

          {error && (
            <div 
              className="mb-6 p-4 bg-destructive/10 border border-destructive/30 rounded text-sm text-destructive"
              role="alert"
              aria-live="assertive"
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-3.5 bg-primary text-primary-foreground rounded font-medium hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Request Free Audit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
