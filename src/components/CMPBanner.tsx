import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CMPBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    const tcData = {
      tcString: 'CPuJO0HPuJO0HAGABCENDZCgAP_AAH_AAAAAGJtf_X__b39j-_59f_t0eY1P9_7_v-0zjhfdt-8N2f_X_L8X42M7vB36pq4KuR4Eu3LBIQdlHOHcTUmw6IkVqTPsbk2Mr7NKJ7PEmnMbM2dYGH9_n1_z-ZKY7_____7z_v-v________f_r-3_3_vp9X---_e_V399xbn9_____9nP___9v-_9_______8AkACTAMgAcgA8ACIAEoAKAAvgBoADaAG-AOYAeAA9ACBgEIAIcARQAlgBNwCeAFAAKSAU0AqYBWIC3AF5AL9AYNAwsBi4DHAGWAMzAZtAz8BokDTYGpgNXAbPA28BvMDewHAgOEgcQA5EBz4DswHhgPHgeWA9IB7gD4YH2gPxgfsA_oB______',
      created: Date.now(),
      lastUpdated: Date.now(),
      purposeConsents: {
        1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true, 10: true
      },
      vendorConsents: {}
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify({
      accepted: true,
      ...tcData
    }));
    setIsVisible(false);
  };

  const handleReject = () => {
    const tcData = {
      tcString: 'CPuJO0HPuJO0HAGABCENDZCgAP_AAH_AAAAAGJtf_X__b39j-_59f_t0eY1P9_7_v-0zjhfdt-8N2f_X_L8X42M7vB36pq4KuR4Eu3LBIQdlHOHcTUmw6IkVqTPsbk2Mr7NKJ7PEmnMbM2dYGH9_n1_z-ZKY7_____7z_v-v________f_r-3_3_vp9X---_e_V399xbn9_____9nP___9v-_9_______8AkACTAMgAcgA8ACIAEoAKAAvgBoADaAG-AOYAeAA9ACBgEIAIcARQAlgBNwCeAFAAKSAU0AqYBWIC3AF5AL9AYNAwsBi4DHAGWAMzAZtAz8BokDTYGpgNXAbPA28BvMDewHAgOEgcQA5EBz4DswHhgPHgeWA9IB7gD4YH2gPxgfsA_oB______',
      created: Date.now(),
      lastUpdated: Date.now(),
      purposeConsents: {
        1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false, 10: false
      },
      vendorConsents: {}
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify({
      accepted: false,
      ...tcData
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 pointer-events-none">
      <div className="w-full max-w-4xl bg-card border border-border rounded-lg shadow-2xl p-6 pointer-events-auto animate-scale-in">
        {!showPreferences ? (
          <>
            <h3 className="font-heading font-semibold text-lg mb-3">Cookie Consent</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies. You can also customize your preferences or decline.
            </p>
            <div className="flex flex-col gap-2 text-xs text-muted-foreground mb-4">
              <p>
                For more information, please read our{' '}
                <Link to="/#/privacy-policy" className="text-primary hover:underline" onClick={() => setIsVisible(false)}>
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link to="/#/cookie-policy" className="text-primary hover:underline" onClick={() => setIsVisible(false)}>
                  Cookie Policy
                </Link>.
              </p>
              <p className="text-xs">
                This consent tool complies with IAB TCF v2.2 standards.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 px-6 py-2.5 bg-primary text-primary-foreground rounded font-medium text-sm hover:bg-primary-dark transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={handleReject}
                className="flex-1 px-6 py-2.5 bg-secondary text-secondary-foreground rounded font-medium text-sm hover:bg-accent transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="flex-1 px-6 py-2.5 border border-border rounded font-medium text-sm hover:bg-secondary transition-colors"
              >
                Preferences
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="font-heading font-semibold text-lg mb-3">Cookie Preferences</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Customize which cookies you want to allow. Essential cookies are always active as they are necessary for the website to function.
            </p>
            <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
              <div className="flex items-start justify-between p-3 bg-secondary rounded">
                <div className="flex-1">
                  <h4 className="font-medium text-sm">Essential Cookies</h4>
                  <p className="text-xs text-muted-foreground mt-1">Required for basic site functionality</p>
                </div>
                <input type="checkbox" checked disabled className="mt-1" />
              </div>
              <div className="flex items-start justify-between p-3 bg-secondary rounded">
                <div className="flex-1">
                  <h4 className="font-medium text-sm">Analytics Cookies</h4>
                  <p className="text-xs text-muted-foreground mt-1">Help us understand how visitors interact with the website</p>
                </div>
                <input type="checkbox" defaultChecked className="mt-1" />
              </div>
              <div className="flex items-start justify-between p-3 bg-secondary rounded">
                <div className="flex-1">
                  <h4 className="font-medium text-sm">Marketing Cookies</h4>
                  <p className="text-xs text-muted-foreground mt-1">Used to track visitors across websites for marketing purposes</p>
                </div>
                <input type="checkbox" defaultChecked className="mt-1" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 px-6 py-2.5 bg-primary text-primary-foreground rounded font-medium text-sm hover:bg-primary-dark transition-colors"
              >
                Save Preferences
              </button>
              <button
                onClick={() => setShowPreferences(false)}
                className="flex-1 px-6 py-2.5 border border-border rounded font-medium text-sm hover:bg-secondary transition-colors"
              >
                Back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CMPBanner;
