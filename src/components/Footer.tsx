import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-divider">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">M</span>
              </div>
              <span className="font-heading font-bold text-xl">Miroran</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Performance marketing agency focused on ROI-driven campaigns and data-backed growth strategies.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm editorial-caps">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/#/services/google-ads-management" className="text-muted-foreground hover:text-primary transition-colors">
                  Google Ads
                </Link>
              </li>
              <li>
                <Link to="/#/services/meta-ads-facebook-instagram" className="text-muted-foreground hover:text-primary transition-colors">
                  Meta Ads
                </Link>
              </li>
              <li>
                <Link to="/#/services/conversion-rate-optimization" className="text-muted-foreground hover:text-primary transition-colors">
                  CRO
                </Link>
              </li>
              <li>
                <Link to="/#/services/analytics-tracking-setup" className="text-muted-foreground hover:text-primary transition-colors">
                  Analytics Setup
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm editorial-caps">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/#/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#/services" className="text-muted-foreground hover:text-primary transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/#/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm editorial-caps">Working Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Monday - Friday</li>
              <li>9:00 AM - 6:00 PM EST</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-divider">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Miroran. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/#/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/#/cookie-policy" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
              <Link to="/#/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/#/refunds" className="text-muted-foreground hover:text-primary transition-colors">
                Refunds Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
