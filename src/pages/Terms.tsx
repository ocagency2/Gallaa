import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, FileText, Users, CreditCard } from 'lucide-react';
import FadeInUp from '../components/FadeInUp';
import MouseTrail from '../components/MouseTrail';

const Terms: React.FC = () => {
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
                Terms of Service
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
                <FileText className="w-6 h-6 text-[#D4AF37] mr-3" />
                <h2 className="text-2xl font-['Playfair_Display'] font-bold">1. Introduction</h2>
              </div>
              <p className="text-[#ECE8E3]/80 leading-relaxed">
                Welcome to Gallaa, India's premier luxury B2B marketplace. These Terms of Service ("Terms") govern your use of our platform, services, and credit facilities. By accessing or using Gallaa, you agree to be bound by these Terms.
              </p>
            </section>

            {/* Account Registration */}
            <section>
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-[#D4AF37] mr-3" />
                <h2 className="text-2xl font-['Playfair_Display'] font-bold">2. Account Registration</h2>
              </div>
              <div className="space-y-4 text-[#ECE8E3]/80">
                <p>To use our services, you must:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Be at least 18 years old and legally capable of entering contracts</li>
                  <li>Provide accurate, complete, and current information during registration</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Have a valid GST registration for business operations in India</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>
            </section>

            {/* Platform Services */}
            <section>
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-[#D4AF37] mr-3" />
                <h2 className="text-2xl font-['Playfair_Display'] font-bold">3. Platform Services</h2>
              </div>
              <div className="space-y-4 text-[#ECE8E3]/80">
                <p>Gallaa provides:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>B2B marketplace connecting manufacturers and retailers</li>
                  <li>Credit-as-inventory solutions for qualified businesses</li>
                  <li>Payment processing and settlement services</li>
                  <li>Analytics and business intelligence tools</li>
                  <li>Customer support and dispute resolution</li>
                </ul>
              </div>
            </section>

            {/* Credit Terms */}
            <section>
              <div className="flex items-center mb-4">
                <CreditCard className="w-6 h-6 text-[#D4AF37] mr-3" />
                <h2 className="text-2xl font-['Playfair_Display'] font-bold">4. Credit Terms</h2>
              </div>
              <div className="space-y-4 text-[#ECE8E3]/80">
                <p>Our credit-as-inventory model operates under these conditions:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Credit limits are determined by AI-powered risk assessment</li>
                  <li>Interest rates vary based on creditworthiness and market conditions</li>
                  <li>Repayment terms are flexible with daily settlement options</li>
                  <li>Unsold inventory can be returned within agreed timeframes</li>
                  <li>Late payment fees may apply as per the credit agreement</li>
                </ul>
              </div>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-['Playfair_Display'] font-bold mb-4">5. User Responsibilities</h2>
              <div className="space-y-4 text-[#ECE8E3]/80">
                <p>Users are responsible for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Providing accurate product information and pricing</li>
                  <li>Maintaining product quality and authenticity</li>
                  <li>Timely fulfillment of orders and deliveries</li>
                  <li>Compliance with tax obligations and regulatory requirements</li>
                  <li>Respectful communication with other platform users</li>
                </ul>
              </div>
            </section>

            {/* Prohibited Activities */}
            <section>
              <h2 className="text-2xl font-['Playfair_Display'] font-bold mb-4">6. Prohibited Activities</h2>
              <div className="space-y-4 text-[#ECE8E3]/80">
                <p>The following activities are strictly prohibited:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fraudulent or deceptive practices</li>
                  <li>Sale of counterfeit or illegal products</li>
                  <li>Manipulation of reviews or ratings</li>
                  <li>Unauthorized access to other users' accounts</li>
                  <li>Violation of intellectual property rights</li>
                </ul>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-['Playfair_Display'] font-bold mb-4">7. Limitation of Liability</h2>
              <p className="text-[#ECE8E3]/80 leading-relaxed">
                Gallaa's liability is limited to the maximum extent permitted by law. We are not liable for indirect, incidental, or consequential damages arising from your use of our platform.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-['Playfair_Display'] font-bold mb-4">8. Termination</h2>
              <p className="text-[#ECE8E3]/80 leading-relaxed">
                Either party may terminate this agreement with 30 days' notice. Gallaa reserves the right to suspend or terminate accounts for violations of these Terms.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-['Playfair_Display'] font-bold mb-4">9. Governing Law</h2>
              <p className="text-[#ECE8E3]/80 leading-relaxed">
                These Terms are governed by the laws of India. Any disputes will be resolved through arbitration in New Delhi, India.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-['Playfair_Display'] font-bold mb-4">10. Contact Information</h2>
              <div className="text-[#ECE8E3]/80 space-y-2">
                <p>For questions about these Terms, contact us at:</p>
                <p>Email: legal@gallaa.com</p>
                <p>Phone: +91-11-4567-8900</p>
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

export default Terms;