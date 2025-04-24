
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';
import { Button } from '@/components/ui/button';

// Project data
const projectsData = [
  {
    id: "secure-banking",
    title: "Secure Banking Platform",
    description: "Developed a secure online banking platform with multi-factor authentication and advanced encryption for a regional financial institution.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    tags: ["Cybersecurity", "Financial Services", "Web Development"],
    status: "completed" as const,
    category: "security"
  },
  {
    id: "healthcare-app",
    title: "Healthcare Mobile App",
    description: "Created a HIPAA-compliant mobile application for patient monitoring and secure communication with healthcare providers.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    tags: ["Mobile App", "Healthcare", "Data Security"],
    status: "completed" as const,
    category: "software"
  },
  {
    id: "retail-security",
    title: "Retail Security System",
    description: "Implemented a comprehensive security solution for a national retail chain, including endpoint protection and threat monitoring.",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    tags: ["Cybersecurity", "Retail", "Network Security"],
    status: "completed" as const,
    category: "security"
  },
  {
    id: "logistics-platform",
    title: "Logistics Management Platform",
    description: "Built a custom logistics management system with real-time tracking, route optimization, and secure data transfer protocols.",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    tags: ["Web Development", "Supply Chain", "Enterprise Software"],
    status: "completed" as const,
    category: "software"
  },
  {
    id: "security-training",
    title: "Corporate Security Training Program",
    description: "Designed and delivered a comprehensive cybersecurity awareness training program for a Fortune 500 company with over 5,000 employees.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    tags: ["Training", "Cybersecurity", "Enterprise"],
    status: "completed" as const,
    category: "training"
  },
  {
    id: "government-portal",
    title: "Government Service Portal",
    description: "Currently building a secure citizen service portal for a state government agency with strict compliance requirements.",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    tags: ["Government", "Web Development", "Compliance"],
    status: "ongoing" as const,
    category: "software"
  },
  {
    id: "smart-city",
    title: "Smart City Security Infrastructure",
    description: "Developing an integrated security framework for connected urban infrastructure including traffic systems and public utilities.",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    tags: ["IoT Security", "Smart City", "Infrastructure"],
    status: "ongoing" as const,
    category: "security"
  },
  {
    id: "school-district",
    title: "School District Security Program",
    description: "Implementing a district-wide cybersecurity program including security measures, incident response planning, and staff training.",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    tags: ["Education", "Training", "Security Planning"],
    status: "ongoing" as const,
    category: "training"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredProjects = filter 
    ? projectsData.filter(project => project.category === filter || project.status === filter)
    : projectsData;
    
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-cybernash-dark to-cybernash-dark/90">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Explore our portfolio of successful projects and ongoing initiatives
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects Gallery Section */}
      <section className="py-20 bg-cybernash-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            <Button
              variant={filter === null ? "default" : "outline"}
              onClick={() => setFilter(null)}
              className={filter === null ? "bg-cybernash-turquoise hover:bg-cybernash-turquoise/80" : ""}
            >
              All Projects
            </Button>
            <Button
              variant={filter === "software" ? "default" : "outline"}
              onClick={() => setFilter("software")}
              className={filter === "software" ? "bg-cybernash-turquoise hover:bg-cybernash-turquoise/80" : ""}
            >
              Software Development
            </Button>
            <Button
              variant={filter === "security" ? "default" : "outline"}
              onClick={() => setFilter("security")}
              className={filter === "security" ? "bg-cybernash-turquoise hover:bg-cybernash-turquoise/80" : ""}
            >
              Cybersecurity
            </Button>
            <Button
              variant={filter === "training" ? "default" : "outline"}
              onClick={() => setFilter("training")}
              className={filter === "training" ? "bg-cybernash-turquoise hover:bg-cybernash-turquoise/80" : ""}
            >
              Training
            </Button>
            <Button
              variant={filter === "completed" ? "default" : "outline"}
              onClick={() => setFilter("completed")}
              className={filter === "completed" ? "bg-cybernash-turquoise hover:bg-cybernash-turquoise/80" : ""}
            >
              Completed
            </Button>
            <Button
              variant={filter === "ongoing" ? "default" : "outline"}
              onClick={() => setFilter("ongoing")}
              className={filter === "ongoing" ? "bg-cybernash-turquoise hover:bg-cybernash-turquoise/80" : ""}
            >
              Ongoing
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.tags}
                status={project.status}
              />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-300">No projects found with the current filter.</p>
              <Button 
                onClick={() => setFilter(null)} 
                className="mt-4 bg-cybernash-turquoise hover:bg-cybernash-turquoise/80"
              >
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Project Process Section */}
      <section className="py-20 bg-gradient-to-b from-cybernash-dark to-cybernash-dark/80">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Project Process" 
            subtitle="How we deliver exceptional results through a structured approach"
            centered 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-cybernash-dark/50 rounded-lg p-6 border border-white/10 relative">
              <div className="bg-cybernash-turquoise/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-cybernash-turquoise text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Discovery</h3>
              <p className="text-gray-300">
                We begin by thoroughly understanding your requirements, challenges, and objectives through detailed consultation.
              </p>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#33C3F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="bg-cybernash-dark/50 rounded-lg p-6 border border-white/10 relative">
              <div className="bg-cybernash-turquoise/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-cybernash-turquoise text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Planning</h3>
              <p className="text-gray-300">
                We develop a comprehensive project plan including timeline, milestones, resource allocation, and risk assessment.
              </p>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#33C3F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="bg-cybernash-dark/50 rounded-lg p-6 border border-white/10 relative">
              <div className="bg-cybernash-turquoise/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-cybernash-turquoise text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Execution</h3>
              <p className="text-gray-300">
                Our expert team implements the solution with regular progress updates, quality checks, and adherence to security standards.
              </p>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#33C3F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="bg-cybernash-dark/50 rounded-lg p-6 border border-white/10">
              <div className="bg-cybernash-turquoise/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-cybernash-turquoise text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Delivery & Support</h3>
              <p className="text-gray-300">
                We deliver the final solution with thorough documentation, training, and ongoing support to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Client Results Section */}
      <section className="py-20 bg-gradient-to-b from-cybernash-dark/80 to-cybernash-dark">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Client Success Stories" 
            subtitle="Real results achieved through our collaborative partnerships"
            centered 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-cybernash-dark/50 p-8 rounded-lg border border-white/10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-semibold">Financial Services Client</h3>
                  <p className="text-cybernash-turquoise">Security Infrastructure Upgrade</p>
                </div>
                <div className="text-4xl font-bold text-cybernash-turquoise">85%</div>
              </div>
              <p className="text-gray-300">Reduction in security incidents after implementing our comprehensive security infrastructure upgrade.</p>
            </div>
            
            <div className="bg-cybernash-dark/50 p-8 rounded-lg border border-white/10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-semibold">Healthcare Provider</h3>
                  <p className="text-cybernash-turquoise">Patient Engagement App</p>
                </div>
                <div className="text-4xl font-bold text-cybernash-turquoise">3.5x</div>
              </div>
              <p className="text-gray-300">Increase in patient engagement metrics after launching the custom mobile application.</p>
            </div>
            
            <div className="bg-cybernash-dark/50 p-8 rounded-lg border border-white/10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-semibold">Manufacturing Company</h3>
                  <p className="text-cybernash-turquoise">Security Training Program</p>
                </div>
                <div className="text-4xl font-bold text-cybernash-turquoise">94%</div>
              </div>
              <p className="text-gray-300">Of employees successfully identified phishing attempts after completing our security awareness training.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cybernash-dark to-cybernash-darkGray">
        <div className="container mx-auto px-4">
          <div className="glass-effect rounded-xl p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how CyberNash Technologies can help bring your vision to life with security at its core.
            </p>
            <Button asChild className="bg-cybernash-turquoise hover:bg-cybernash-turquoise/80 text-white px-8 py-6 text-lg">
              <a href="/contact">Contact Our Team</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
