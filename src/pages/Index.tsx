
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import { Button } from '@/components/ui/button';
import { Code, Lock, Shield, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cybernash-dark"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
            opacity: 0.2
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Secure Solutions</span> <br />
              for a Digital World
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              CyberNash Technologies delivers cutting-edge software development 
              and cybersecurity solutions to protect and empower your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-cybernash-turquoise hover:bg-cybernash-turquoise/80 text-white px-8 py-6 text-lg">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/20 hover:bg-white/5 px-8 py-6 text-lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <a 
            href="#services" 
            className="animate-bounce text-white/70 hover:text-white transition-colors"
            aria-label="Scroll down"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-cybernash-dark to-cybernash-dark/90">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Services" 
            subtitle="Comprehensive technology solutions tailored to your business needs" 
            centered 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              title="Software Engineering" 
              description="Custom mobile, desktop and web applications built for businesses and individuals." 
              icon={<Code size={28} />}
              linkTo="/services#software"
            />
            <ServiceCard 
              title="Cybersecurity" 
              description="Expert consulting for information security across various business sectors." 
              icon={<Lock size={28} />}
              linkTo="/services#security"
            />
            <ServiceCard 
              title="Security Coverage" 
              description="Comprehensive monthly coverage plans for outsourced cybersecurity management." 
              icon={<Shield size={28} />}
              linkTo="/services#coverage"
            />
            <ServiceCard 
              title="Corporate Training" 
              description="Professional development in software engineering and cybersecurity for teams." 
              icon={<Users size={28} />}
              linkTo="/services#training"
            />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gradient-to-b from-cybernash-dark/90 to-cybernash-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Who We Are" 
                subtitle="CyberNash Technologies is a leading provider of technology solutions, committed to securing and enhancing your digital presence." 
              />
              <p className="text-gray-300 mb-8">
                With expertise spanning software development, cybersecurity, and corporate training, 
                our team of professionals is dedicated to delivering innovative solutions that address 
                the unique challenges of each client.
              </p>
              <Button asChild className="bg-cybernash-turquoise hover:bg-cybernash-turquoise/80 text-white">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className={cn(
                  "aspect-square rounded-lg overflow-hidden", 
                  "transform translate-y-8"
                )}>
                  <img 
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Software development" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Code on screen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={cn(
                  "aspect-square rounded-lg overflow-hidden", 
                  "transform -translate-y-8"
                )}>
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Laptop with code" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -inset-4 border-2 border-dashed border-cybernash-turquoise/30 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cybernash-dark to-cybernash-darkGray">
        <div className="container mx-auto px-4">
          <div className="glass-effect rounded-xl p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Digital Future?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with CyberNash Technologies for innovative solutions that protect and elevate your business.
            </p>
            <Button asChild className="bg-cybernash-turquoise hover:bg-cybernash-turquoise/80 text-white px-8 py-6 text-lg">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
