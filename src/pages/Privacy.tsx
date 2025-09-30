import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Database, Users } from 'lucide-react';
import FadeInUp from '../components/FadeInUp';
import MouseTrail from '../components/MouseTrail';

const Privacy: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const fromPage = location.state?.from || '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#08070A] text-[#ECE8E3] px-6 py-8 relative">
      <MouseTrail />
      
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <FadeInUp>
          <div className="mb-8">
            <button
              onClick={() => navigate(fromPage)}
              className="inline-flex items-center text-[#D4AF37] hover:text-[#FFD777] transition-colors duration-200 mb-6"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {fromPage === '/login' ? 'Back to Login' : fromPage === '/register' ? 'Back to Sign Up' : 'Back to Home'}
            </button>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold mb-4 bg-gradient-to-r from-[#D4AF37] to-[#FFD777] bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-[#ECE8E3]/70 text-lg">
                Last updated: January 2, 2025
              </p>
            </div>
          </div>
        </FadeInUp>

        {/* Content */}
        <FadeInUp delay={100}>
          <div className="bg-[#ECE8E3]/5 border border-[#ECE8E3]/10 rounded-2xl p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-[#D4AF37] mr-3" />
                <h2 className="text-2xl font-['Playfair_Display'] font-bold">1. Introduction</h2>
              </div>
              <p className="text-[#ECE8E3]/80 leading-relaxed">
                At Gallaa, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our B2B marketplace platform.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-[#D4AF37] mr-3" />
                <h2 className="text-2xl font-['Playfair_Display'] font-bold">2. Information We Collect</h2>
              </div>
              <div className="space-y-4 text-[#ECE8E3]/80">
                <h3 className="text-lg font-semibold text-[#D4AF37]">Personal Information:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name, email address, and phone number</li>
                  <li>Business information (company name, GST number, PAN)</li>
                  <li>Financial information for credit assessment</li>
                  <li>Bank account details for payments</li>
                  <li>Identity verification documents</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-[#D4AF37] mt-6">Usage Information:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Platform usage patterns and preferences</li>
                  <li>Transaction history and order details</li>
                  <li>Communication records with support</li>
                  <li>Device information and IP addresses</li>
                </ul>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-[#D4AF37] mr-3" />
                <h2 className="text-2xl font-['Playfair_Display'] font-bold">3. How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-[#ECE8E3]/80">
                <p>We use your information to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and improve our marketplace services</li>
                  <li>Process transactions and manage payments</li>
                  <li>Assess creditworthiness and manage credit facilities</li>
                  <li>Verify your identity and prevent fraud</li>
                  <li>Communicate important updates and notifications</li>
                  <li>Provide customer support and resolve disputes</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-[#D4AF37] mr-3" />
                <h2 className="text-2xl font-['Playfair_Display'] font-bold">4. Data Security</h2>
              </div>
              <div className="space-y-4 text-[#ECE8E3]/80">
                <p>We implement industry-standard security measures:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>256-bit SSL encryption for data transmission</li>
                  <li>ISO 27001 certified security management</li>
                  <li>PCI DSS compliance for payment processing</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Multi-factor authentication for account access</li>
                  <li>Encrypted data storage with access controls</li>
                </ul>
              </div>
            </section>

            {/* Information Sharing */}
            <section>
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-[#D4AF37] mr-3" />
                <h2 className="text-2xl font-['Playfair_Display'] font-bold">5. Information Sharing</h2>
              </div>
              <div className="space-y-4 text-[#ECE8E3]/80">
                <p>We may share your information with:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Other platform users for transaction purposes</li>
                  <li>Payment processors and financial institutions</li>
                  <li>Credit bureaus for credit assessment</li>
                  <li>Service providers and business partners</li>
                  <li>Legal authorities when required by law</li>
                </ul>
                <p className="mt-4">
                  We never sell your personal information to third parties for marketing purposes.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-['Playfair_Display'] font-bold mb-4">6. Your Rights</h2>
              <div className="space-y-4 text-[#ECE8E3]/80">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and review your personal information</li>
                  <li>Correct inaccurate or incomplete data</li>
                  <li>Request deletion of your account and data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Data portability for your business information</li>
                  <li>Lodge complaints with data protection authorities</li>
                </ul>
              </div>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <h2 className="text-2xl font-['Playfair_Display'] font-bold mb-4">7. Cookies and Tracking</h2>
              <p className="text-[#ECE8E3]/80 leading-relaxed">
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. You can manage cookie preferences through your browser settings.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-['Playfair_Display'] font-bold mb-4">8. Data Retention</h2>
              <p className="text-[#ECE8E3]/80 leading-relaxed">
                We retain your information for as long as necessary to provide services, comply with legal obligations, and resolve disputes. Financial records are retained for 7 years as required by Indian law.
              </p>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-2xl font-['Playfair_Display'] font-bold mb-4">9. International Transfers</h2>
              <p className="text-[#ECE8E3]/80 leading-relaxed">
                Your data is primarily stored in India. If we transfer data internationally, we ensure adequate protection through appropriate safeguards and compliance with applicable laws.
              </p>
            </section>

            {/* Updates to Policy */}
            <section>
              <h2 className="text-2xl font-['Playfair_Display'] font-bold mb-4">10. Updates to This Policy</h2>
              <p className="text-[#ECE8E3]/80 leading-relaxed">
                We may update this Privacy Policy periodically. We will notify you of significant changes through email or platform notifications. Continued use of our services constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-['Playfair_Display'] font-bold mb-4">11. Contact Us</h2>
              <div className="text-[#ECE8E3]/80 space-y-2">
                <p>For privacy-related questions or requests, contact us at:</p>
                <p>Email: privacy@gallaa.com</p>
                <p>Phone: +91-11-4567-8900</p>
                <p>Data Protection Officer: dpo@gallaa.com</p>
                <p>Address: Gallaa Technologies Pvt. Ltd., New Delhi, India</p>
              </div>
            </section>
          </div>
        </FadeInUp>

        {/* Footer */}
        <FadeInUp delay={200}>
          <div className="text-center mt-12">
            <button
              onClick={() => navigate(fromPage)}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#FFD777] text-[#08070A] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#D4AF37]/25 transition-all duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {fromPage === '/login' ? 'Return to Login' : fromPage === '/register' ? 'Return to Sign Up' : 'Return to Home'}
            </button>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
};

export default Privacy;