
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const About = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bio: "Alex brings over 15 years of experience in cybersecurity and software development, having previously led security teams at major tech companies."
    },
    {
      name: "Sarah Williams",
      position: "Chief Security Officer",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bio: "Sarah is a certified cybersecurity expert with a background in ethical hacking and penetration testing across government and private sectors."
    },
    {
      name: "David Chen",
      position: "Lead Software Engineer",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bio: "David specializes in full-stack development and has architected solutions for Fortune 500 companies throughout his 10-year career in tech."
    },
    {
      name: "Michelle Rodriguez",
      position: "Training Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      bio: "Michelle has designed and delivered technical training programs for over 8 years, with expertise in adult learning and curriculum development."
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We are committed to delivering the highest quality solutions that exceed client expectations."
    },
    {
      title: "Security",
      description: "We prioritize the protection of sensitive data and systems in everything we do."
    },
    {
      title: "Innovation",
      description: "We constantly explore new technologies and methodologies to provide cutting-edge solutions."
    },
    {
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices in all our business dealings."
    },
    {
      title: "Client Focus",
      description: "We build lasting relationships through exceptional service and personalized attention."
    },
    {
      title: "Education",
      description: "We believe in empowering clients through knowledge transfer and comprehensive training."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-cybernash-dark to-cybernash-dark/90">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">CyberNash Technologies</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              A team of dedicated professionals committed to securing and enhancing your digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-cybernash-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <SectionHeading title="Our Story" />
              <p className="text-gray-300 mb-4">
                Founded in 2015, CyberNash Technologies began with a simple mission: to provide businesses with secure, 
                reliable technology solutions that drive growth and innovation while maintaining the highest levels of security.
              </p>
              <p className="text-gray-300 mb-4">
                What started as a small consulting firm has grown into a comprehensive technology partner offering software 
                engineering, cybersecurity consulting, managed security services, and professional training.
              </p>
              <p className="text-gray-300">
                Based in Nashville, Tennessee, our team combines local expertise with global capabilities, serving clients 
                across multiple industries throughout the United States and beyond.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-square max-w-md mx-auto rounded-lg overflow-hidden border-4 border-cybernash-turquoise/30 transform rotate-3 hover:rotate-0 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="CyberNash team meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-b from-cybernash-dark to-cybernash-dark/80">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8 bg-cybernash-dark/50 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-gradient">Our Mission</h2>
              <p className="text-gray-300">
                To deliver innovative technology solutions that protect, enhance, and empower businesses in an increasingly 
                complex digital landscape, while providing exceptional service and building lasting partnerships.
              </p>
            </Card>
            <Card className="p-8 bg-cybernash-dark/50 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-gradient">Our Vision</h2>
              <p className="text-gray-300">
                To become the most trusted technology partner for businesses seeking secure, sustainable growth in the digital 
                era, known for our expertise, integrity, and commitment to client success.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-b from-cybernash-dark/80 to-cybernash-dark">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Core Values" 
            subtitle="The principles that guide our work and define our company culture"
            centered 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 bg-cybernash-dark/50 border border-white/10 hover:border-cybernash-turquoise/30 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-cybernash-dark to-cybernash-dark/90">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Leadership Team" 
            subtitle="Meet the experts behind CyberNash Technologies"
            centered 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-cybernash-turquoise mb-2">{member.position}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-cybernash-dark to-cybernash-darkGray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-cybernash-turquoise mb-2">8+</p>
              <p className="text-xl text-white">Years in Business</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-cybernash-turquoise mb-2">200+</p>
              <p className="text-xl text-white">Clients Served</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-cybernash-turquoise mb-2">150+</p>
              <p className="text-xl text-white">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-cybernash-turquoise mb-2">25+</p>
              <p className="text-xl text-white">Expert Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Certifications */}
      <section className="py-20 bg-cybernash-dark">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Certifications" 
            subtitle="We maintain the highest industry standards in cybersecurity and software development"
            centered 
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
            <div className="p-4 text-center">
              <div className="bg-white/10 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-cybernash-turquoise">ISO</span>
              </div>
              <p className="text-sm text-gray-300">ISO 27001</p>
            </div>
            <div className="p-4 text-center">
              <div className="bg-white/10 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-cybernash-turquoise">CISSP</span>
              </div>
              <p className="text-sm text-gray-300">Certified Information Systems Security Professional</p>
            </div>
            <div className="p-4 text-center">
              <div className="bg-white/10 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-cybernash-turquoise">PCI</span>
              </div>
              <p className="text-sm text-gray-300">PCI DSS Compliant</p>
            </div>
            <div className="p-4 text-center">
              <div className="bg-white/10 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-cybernash-turquoise">CMMC</span>
              </div>
              <p className="text-sm text-gray-300">Cybersecurity Maturity Model Certification</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
