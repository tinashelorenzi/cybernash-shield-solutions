
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Code, Lock, Shield, Users } from 'lucide-react';

const Services = () => {
  const securityPlanFeatures = [
    {
      basic: "24/7 Security Monitoring",
      standard: "24/7 Security Monitoring",
      premium: "24/7 Security Monitoring & Response"
    },
    {
      basic: "Quarterly Vulnerability Assessments",
      standard: "Monthly Vulnerability Assessments",
      premium: "Weekly Vulnerability Assessments"
    },
    {
      basic: "Security Policy Development",
      standard: "Security Policy Management",
      premium: "Comprehensive Security Governance"
    },
    {
      basic: "Basic Incident Response",
      standard: "Advanced Incident Response",
      premium: "Full Incident Response with Forensics"
    },
    {
      basic: "Annual Security Training",
      standard: "Bi-annual Security Training",
      premium: "Quarterly Security Training"
    },
    {
      basic: "-",
      standard: "Compliance Support",
      premium: "Full Compliance Management"
    },
    {
      basic: "-",
      standard: "-",
      premium: "Dedicated Security Engineer"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-cybernash-dark to-cybernash-dark/90">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Comprehensive technology solutions tailored to your unique business needs
            </p>
          </div>
        </div>
      </section>

      {/* Software Engineering Section */}
      <section id="software" className="py-20 bg-cybernash-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Software Engineering" 
                subtitle="Custom solutions built for your specific business requirements"
              />
              <p className="text-gray-300 mb-4">
                Our team of expert developers creates powerful, scalable applications that drive your business forward. 
                We specialize in developing:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="mr-2 text-cybernash-turquoise mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Mobile Applications</span> - Native and cross-platform apps for iOS and Android
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-cybernash-turquoise mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Web Applications</span> - Responsive, modern web apps using the latest technologies
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-cybernash-turquoise mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Desktop Software</span> - High-performance solutions for Windows, macOS, and Linux
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-cybernash-turquoise mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Custom APIs & Integrations</span> - Seamless connections between your systems
                  </span>
                </li>
              </ul>
              <p className="text-gray-300 mb-6">
                Our development process emphasizes security at every stage, ensuring your applications are not only functional 
                but also protected against potential vulnerabilities.
              </p>
              <Button asChild className="bg-cybernash-turquoise hover:bg-cybernash-turquoise/80 text-white">
                <Link to="/contact">Discuss Your Project</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80" 
                  alt="Software Development" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 border-2 border-dashed border-cybernash-turquoise/30 rounded-lg -z-10"></div>
              <div className="absolute -bottom-6 -right-6 bg-cybernash-dark p-3 rounded-lg shadow-lg border border-white/10">
                <Code size={40} className="text-cybernash-turquoise" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity Section */}
      <section id="security" className="py-20 bg-gradient-to-b from-cybernash-dark to-cybernash-dark/80">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80" 
                  alt="Cybersecurity Console" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 border-2 border-dashed border-cybernash-turquoise/30 rounded-lg -z-10"></div>
              <div className="absolute -bottom-6 -left-6 bg-cybernash-dark p-3 rounded-lg shadow-lg border border-white/10">
                <Lock size={40} className="text-cybernash-turquoise" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading 
                title="Cybersecurity Consulting" 
                subtitle="Expert guidance to protect your business from modern threats"
              />
              <p className="text-gray-300 mb-4">
                In today's threat landscape, security can't be an afterthought. Our cybersecurity consulting services help 
                you identify, mitigate, and manage risks across your organization:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="mr-2 text-cybernash-turquoise mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Security Assessments</span> - Comprehensive evaluation of your security posture
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-cybernash-turquoise mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Penetration Testing</span> - Identify vulnerabilities before attackers do
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-cybernash-turquoise mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Security Architecture Design</span> - Build security into your systems from day one
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-cybernash-turquoise mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Compliance Consulting</span> - Navigate complex regulatory requirements
                  </span>
                </li>
              </ul>
              <p className="text-gray-300 mb-6">
                Our cybersecurity experts have experience across industries including healthcare, finance, retail, and government, 
                bringing best practices and tailored strategies to your organization.
              </p>
              <Button asChild className="bg-cybernash-turquoise hover:bg-cybernash-turquoise/80 text-white">
                <Link to="/contact">Book a Security Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Coverage Plans Section */}
      <section id="coverage" className="py-20 bg-gradient-to-b from-cybernash-dark/80 to-cybernash-dark">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Cybersecurity Coverage Plans" 
            subtitle="Continuous protection with our monthly security subscription services"
            centered 
          />
          <p className="text-gray-300 max-w-3xl mx-auto text-center mb-12">
            Outsource your cybersecurity needs to our team of experts with flexible monthly plans designed 
            to fit businesses of all sizes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="bg-cybernash-dark border border-white/10 overflow-hidden hover:border-cybernash-turquoise/30 transition-all duration-300">
              <div className="p-6 border-b border-white/10">
                <h3 className="text-xl font-semibold mb-2">Basic Plan</h3>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-bold">$1,499</span>
                  <span className="text-gray-400 mb-1">/month</span>
                </div>
                <p className="text-sm text-gray-300 mt-2">Essential security for small businesses</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {securityPlanFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      {feature.basic !== "-" ? (
                        <>
                          <Check className="mr-2 text-cybernash-turquoise flex-shrink-0" size={18} />
                          <span className="text-gray-300">{feature.basic}</span>
                        </>
                      ) : (
                        <>
                          <span className="mr-2 text-gray-500 flex-shrink-0 w-[18px] h-[18px] flex items-center justify-center">—</span>
                          <span className="text-gray-500">Not included</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border-t border-white/10">
                <Button asChild className="w-full bg-cybernash-turquoise hover:bg-cybernash-turquoise/80 text-white">
                  <Link to="/contact?plan=basic">Get Started</Link>
                </Button>
              </div>
            </Card>
            
            {/* Standard Plan */}
            <Card className="bg-cybernash-dark border border-cybernash-turquoise/50 overflow-hidden relative transform scale-105 shadow-xl shadow-cybernash-turquoise/20 z-10">
              <div className="absolute top-0 left-0 right-0 bg-cybernash-turquoise text-white text-center py-1 text-sm font-medium">
                Most Popular
              </div>
              <div className="p-6 border-b border-white/10 mt-6">
                <h3 className="text-xl font-semibold mb-2">Standard Plan</h3>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-bold">$2,999</span>
                  <span className="text-gray-400 mb-1">/month</span>
                </div>
                <p className="text-sm text-gray-300 mt-2">Complete coverage for growing businesses</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {securityPlanFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      {feature.standard !== "-" ? (
                        <>
                          <Check className="mr-2 text-cybernash-turquoise flex-shrink-0" size={18} />
                          <span className="text-gray-300">{feature.standard}</span>
                        </>
                      ) : (
                        <>
                          <span className="mr-2 text-gray-500 flex-shrink-0 w-[18px] h-[18px] flex items-center justify-center">—</span>
                          <span className="text-gray-500">Not included</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border-t border-white/10">
                <Button asChild className="w-full bg-cybernash-turquoise hover:bg-cybernash-turquoise/80 text-white">
                  <Link to="/contact?plan=standard">Get Started</Link>
                </Button>
              </div>
            </Card>
            
            {/* Premium Plan */}
            <Card className="bg-cybernash-dark border border-white/10 overflow-hidden hover:border-cybernash-turquoise/30 transition-all duration-300">
              <div className="p-6 border-b border-white/10">
                <h3 className="text-xl font-semibold mb-2">Premium Plan</h3>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-bold">$5,999</span>
                  <span className="text-gray-400 mb-1">/month</span>
                </div>
                <p className="text-sm text-gray-300 mt-2">Enterprise-grade security solutions</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {securityPlanFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="mr-2 text-cybernash-turquoise flex-shrink-0" size={18} />
                      <span className="text-gray-300">{feature.premium}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border-t border-white/10">
                <Button asChild className="w-full bg-cybernash-turquoise hover:bg-cybernash-turquoise/80 text-white">
                  <Link to="/contact?plan=premium">Get Started</Link>
                </Button>
              </div>
            </Card>
          </div>
          
          <p className="text-center text-gray-400 mt-8 max-w-2xl mx-auto">
            All plans include a dedicated account manager and initial security assessment. 
            Custom plans are available for organizations with specific requirements.
          </p>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-20 bg-gradient-to-b from-cybernash-dark to-cybernash-dark/90">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Corporate Training" 
                subtitle="Develop your team's technical skills with expert-led training programs"
              />
              <p className="text-gray-300 mb-4">
                Investing in your team's knowledge is one of the best ways to strengthen your organization's capabilities. 
                Our training programs cover:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="mr-2 text-cybernash-turquoise mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Software Development</span> - From programming fundamentals to advanced architectural patterns
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-cybernash-turquoise mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Cybersecurity Awareness</span> - Essential security practices for all employees
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-cybernash-turquoise mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Security Professional Training</span> - Advanced courses for IT and security teams
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-cybernash-turquoise mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-300">
                    <span className="font-semibold text-white">Certification Preparation</span> - Expert guidance for industry certifications
                  </span>
                </li>
              </ul>
              <p className="text-gray-300 mb-6">
                Our training programs can be delivered on-site, remotely, or through a hybrid approach, with 
                customized curriculum designed for your team's specific needs and skill levels.
              </p>
              <Button asChild className="bg-cybernash-turquoise hover:bg-cybernash-turquoise/80 text-white">
                <Link to="/contact">Inquire About Training</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80" 
                  alt="Corporate Training" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 border-2 border-dashed border-cybernash-turquoise/30 rounded-lg -z-10"></div>
              <div className="absolute -bottom-6 -right-6 bg-cybernash-dark p-3 rounded-lg shadow-lg border border-white/10">
                <Users size={40} className="text-cybernash-turquoise" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cybernash-dark to-cybernash-darkGray">
        <div className="container mx-auto px-4">
          <div className="glass-effect rounded-xl p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your Security Posture?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss how CyberNash Technologies can help secure and advance your business.
            </p>
            <Button asChild className="bg-cybernash-turquoise hover:bg-cybernash-turquoise/80 text-white px-8 py-6 text-lg">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
