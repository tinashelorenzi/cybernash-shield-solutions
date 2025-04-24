
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/ui/ContactForm';
import { Card } from '@/components/ui/card';

const Contact = () => {
  const location = useLocation();
  
  // Extract any query parameters (like plan selection from the services page)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const plan = params.get('plan');
    
    if (plan) {
      // You could auto-fill the form or display a message based on the selected plan
      console.log(`User selected the ${plan} plan`);
    }
  }, [location]);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-cybernash-dark to-cybernash-dark/90">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Get in touch with our team to discuss your technology and security needs
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-cybernash-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeading 
                title="Send Us a Message" 
                subtitle="Fill out the form below and we'll get back to you as soon as possible" 
              />
              <ContactForm />
            </div>
            
            <div className="space-y-8">
              <SectionHeading title="Contact Information" />
              <Card className="p-6 bg-cybernash-dark/50 border border-white/10">
                <h3 className="text-xl font-semibold mb-4">Nashville Headquarters</h3>
                <address className="not-italic text-gray-300">
                  <p>123 Tech Avenue</p>
                  <p>Nashville, TN 37203</p>
                  <p className="mt-4">
                    <a href="mailto:info@cybernash.tech" className="text-cybernash-turquoise hover:underline">
                      info@cybernash.tech
                    </a>
                  </p>
                  <p>
                    <a href="tel:+16151234567" className="text-cybernash-turquoise hover:underline">
                      (615) 123-4567
                    </a>
                  </p>
                </address>
              </Card>
              
              <Card className="p-6 bg-cybernash-dark/50 border border-white/10">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM CST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-cybernash-dark/50 border border-white/10">
                <h3 className="text-xl font-semibold mb-4">Support</h3>
                <p className="text-gray-300 mb-4">
                  For existing clients requiring technical support:
                </p>
                <div className="space-y-2">
                  <a href="mailto:support@cybernash.tech" className="block text-cybernash-turquoise hover:underline">
                    support@cybernash.tech
                  </a>
                  <a href="tel:+16151234568" className="block text-cybernash-turquoise hover:underline">
                    (615) 123-4568
                  </a>
                </div>
                <p className="text-gray-300 mt-4">
                  24/7 emergency support available for clients on Security Coverage plans.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-cybernash-dark to-cybernash-dark/80">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Visit Our Office" 
            subtitle="Located in the heart of Nashville's tech district"
            centered 
          />
          <div className="mt-8 rounded-lg overflow-hidden h-[400px] border border-white/10">
            {/* Replace this with an actual map component or iframe to Google Maps */}
            <div className="w-full h-full bg-cybernash-dark/70 flex items-center justify-center">
              <p className="text-gray-300">Map placeholder - Google Maps integration would go here</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-cybernash-dark/80 to-cybernash-dark">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Quick answers to common inquiries"
            centered 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            <Card className="p-6 bg-cybernash-dark/50 border border-white/10">
              <h3 className="text-xl font-semibold mb-3">What industries do you serve?</h3>
              <p className="text-gray-300">
                We work with clients across various sectors including healthcare, finance, retail, manufacturing, 
                government, education, and technology. Our solutions are adaptable to meet the specific needs 
                of any industry.
              </p>
            </Card>
            
            <Card className="p-6 bg-cybernash-dark/50 border border-white/10">
              <h3 className="text-xl font-semibold mb-3">How long does a typical project take?</h3>
              <p className="text-gray-300">
                Project timelines vary based on scope and complexity. A small web application might take 4-8 weeks, 
                while a comprehensive security infrastructure overhaul could take several months. We provide detailed 
                timelines during the proposal phase.
              </p>
            </Card>
            
            <Card className="p-6 bg-cybernash-dark/50 border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Do you offer remote services?</h3>
              <p className="text-gray-300">
                Yes, we offer remote services for clients nationwide. While we're based in Nashville, our team can 
                work with organizations anywhere through secure remote access technologies and regular virtual meetings.
              </p>
            </Card>
            
            <Card className="p-6 bg-cybernash-dark/50 border border-white/10">
              <h3 className="text-xl font-semibold mb-3">How do your security coverage plans work?</h3>
              <p className="text-gray-300">
                Our security coverage plans provide ongoing protection on a monthly subscription basis. Each plan includes 
                a specific set of security services, monitoring, and support levels based on your organization's needs and budget.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
