import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.hash === path;

  const navLinks = [
    { path: '/#/', label: 'Home' },
    { path: '/#/about', label: 'About Us' },
    { path: '/#/services', label: 'Services' },
    { path: '/#/contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-divider">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/#/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">M</span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">Miroran</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#orderFormAnchor"
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded font-medium text-sm hover:bg-primary-dark transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('orderFormAnchor')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Request Audit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-divider pt-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.path) ? 'text-primary' : 'text-foreground'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#orderFormAnchor"
                className="px-6 py-2.5 bg-primary text-primary-foreground rounded font-medium text-sm hover:bg-primary-dark transition-colors text-center"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  document.getElementById('orderFormAnchor')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Request Audit
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
