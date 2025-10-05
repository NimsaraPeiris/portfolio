import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ArrowRight, 
  ExternalLink,
  Send,
  Star,
  Code,
  Palette,
  Zap
} from 'lucide-react';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const heroButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const tl = gsap.timeline();
      
      tl.from(nameRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      })
      .from(taglineRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8")
      .from(heroButtonRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.6");

      // Parallax effect for hero background
      gsap.to(".hero-bg", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Section reveals
      gsap.utils.toArray('.reveal-section').forEach((section: any) => {
        gsap.fromTo(section, 
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Numbers counter animation
      gsap.utils.toArray('.counter').forEach((counter: any) => {
        const target = parseInt(counter.dataset.target);
        gsap.fromTo(counter, 
          { textContent: 0 },
          {
            textContent: target,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: counter,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Project cards stagger animation
      gsap.fromTo('.project-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.projects-grid',
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Social icons animation
      gsap.fromTo('.social-icon',
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: '.social-icons',
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Smooth scroll behavior
      gsap.utils.toArray('.scroll-to').forEach((button: any) => {
        button.addEventListener('click', (e: Event) => {
          e.preventDefault();
          const target = button.getAttribute('href');
          gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: target, offsetY: 80 },
            ease: "power3.inOut"
          });
        });
      });

    });

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      description: "Modern React-based e-commerce solution"
    },
    {
      id: 2,
      title: "Portfolio Dashboard",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      description: "Analytics dashboard with real-time data"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg",
      description: "Secure financial mobile application"
    },
    {
      id: 4,
      title: "AI Chat Interface",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      description: "Intelligent conversational interface"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-neutral-50 via-primary-50/30 to-luxury-50/40 text-neutral-900 overflow-x-hidden min-h-screen">
      {/* Navigation */}
      

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <div className="hero-bg absolute inset-0 bg-gradient-to-br from-primary-100/60 via-luxury-50/40 to-accent-50/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse-slow"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-primary-300/30 to-primary-500/30 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-luxury-300/30 to-luxury-500/30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/6 w-16 h-16 rounded-full bg-gradient-to-br from-accent-300/30 to-accent-500/30 animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="mb-6">
            <span className="font-mono text-sm tracking-wider text-primary-600 bg-primary-50/50 px-4 py-2 rounded-full border border-primary-200/50">
              Welcome to my digital realm
            </span>
          </div>
          
          <h1 
            ref={nameRef}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none text-luxury"
          >
            NiMsArA
            <span className="block text-5xl md:text-7xl lg:text-8xl font-light italic text-neutral-600 mt-2">
              Peiris
            </span>
          </h1>
          
          <p 
            ref={taglineRef}
            className="font-heading text-xl md:text-2xl font-medium mb-12 text-neutral-700 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting <span className="text-primary-600 font-semibold">Digital Experiences</span> with
            <br className="hidden md:block" />
            <span className="text-luxury-600 font-semibold">Creative Code</span> & 
            <span className="text-accent-600 font-semibold"> Elegant Design</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              ref={heroButtonRef}
              className="btn-luxury group text-white px-10 py-4 rounded-full font-heading font-semibold tracking-wide transform hover:scale-105 inline-flex items-center space-x-3 shadow-xl"
            >
              <span>View My Work</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="font-heading font-medium text-neutral-700 px-8 py-4 rounded-full border-2 border-neutral-300 hover:border-primary-400 hover:text-primary-600 transition-all duration-300 inline-flex items-center space-x-2">
              <span>Download CV</span>
            </button>
          </div>
          
          {/* Skills preview */}
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {['React', 'TypeScript', 'Node.js', 'Python', 'UI/UX', 'AWS'].map((skill, index) => (
              <span 
                key={skill}
                className="font-mono text-sm px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-neutral-200/50 text-neutral-700 hover:bg-primary-50/80 hover:border-primary-300/50 hover:text-primary-700 transition-all duration-300"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        {/* Enhanced Social Icons */}
        {/* <div className="social-icons absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-6">
          <a href="#" className="social-icon group luxury-card p-4 rounded-full hover:shadow-xl transform hover:scale-110 transition-all duration-300">
            <Github size={22} className="text-neutral-700 group-hover:text-primary-600" />
          </a>
          <a href="#" className="social-icon group luxury-card p-4 rounded-full hover:shadow-xl transform hover:scale-110 transition-all duration-300">
            <Linkedin size={22} className="text-neutral-700 group-hover:text-luxury-600" />
          </a>
          <a href="#" className="social-icon group luxury-card p-4 rounded-full hover:shadow-xl transform hover:scale-110 transition-all duration-300">
            <Twitter size={22} className="text-neutral-700 group-hover:text-accent-600" />
          </a>
          <a href="#" className="social-icon group luxury-card p-4 rounded-full hover:shadow-xl transform hover:scale-110 transition-all duration-300">
            <Mail size={22} className="text-neutral-700 group-hover:text-primary-600" />
          </a>
        </div> */}
        
        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-32 px-6 reveal-section relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-luxury-50/30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="mb-6">
                <span className="font-mono text-sm tracking-wider text-luxury-600 bg-luxury-50/50 px-4 py-2 rounded-full border border-luxury-200/50">
                  Get to know me
                </span>
              </div>
              
              <h2 className="font-display text-3xl md:text-6xl lg:text-7xl font-bold mb-8 text-neutral-800">
                About
                <span className="block text-luxury font-light italic leading-relaxed">Myself</span>
              </h2>
              
              <div className="space-y-6 mb-12">
                <p className="font-body text-lg text-neutral-700 leading-relaxed">
                  I'm a passionate <span className="font-semibold text-primary-600">full-stack developer</span> and 
                  <span className="font-semibold text-luxury-600"> UI/UX designer</span> who believes in creating 
                  digital experiences that are not just functional, but truly inspiring.
                </p>
                <p className="font-body text-lg text-neutral-700 leading-relaxed">
                  With a background in computer science and a keen eye for design, I bridge the gap between 
                  technical excellence and aesthetic beauty. Every project is an opportunity to push boundaries 
                  and create something remarkable.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="counter text-4xl font-display font-bold text-luxury mb-2" data-target="32">0</div>
                  <div className="font-mono text-xs uppercase tracking-wider text-neutral-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="counter text-4xl font-display font-bold text-primary-600 mb-2" data-target="3">0</div>
                  <div className="font-mono text-xs uppercase tracking-wider text-neutral-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="counter text-4xl font-display font-bold text-accent-600 mb-2" data-target="99">0</div>
                  <div className="font-mono text-xs uppercase tracking-wider text-neutral-600">Client Satisfaction</div>
                </div>
              </div>
              
              <button className="btn-luxury group text-white px-8 py-4 rounded-full font-heading font-semibold inline-flex items-center space-x-2 transform hover:scale-105 shadow-lg">
                <span>Download Resume</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="luxury-card p-8 rounded-3xl text-center group hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code size={32} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3 text-neutral-800">Development</h3>
                <p className="font-body text-sm text-neutral-600 leading-relaxed">React, TypeScript, Node.js, Python, Next.js</p>
              </div>
              
              <div className="luxury-card p-8 rounded-3xl text-center group hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-luxury-500 to-luxury-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Palette size={32} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3 text-neutral-800">Design</h3>
                <p className="font-body text-sm text-neutral-600 leading-relaxed">UI/UX, Figma, Adobe Creative Suite</p>
              </div>
              
              <div className="luxury-card p-8 rounded-3xl text-center group hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap size={32} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3 text-neutral-800">Performance</h3>
                <p className="font-body text-sm text-neutral-600 leading-relaxed">Optimization, SEO, PWA, Analytics</p>
              </div>
              
              <div className="luxury-card p-8 rounded-3xl text-center group hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-600 to-luxury-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star size={32} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3 text-neutral-800">Quality</h3>
                <p className="font-body text-sm text-neutral-600 leading-relaxed">Testing, Clean Code, Documentation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-50/30 to-primary-50/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="font-mono text-sm tracking-wider text-accent-600 bg-accent-50/50 px-4 py-2 rounded-full border border-accent-200/50">
                My Latest Work
              </span>
            </div>
            
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-neutral-800">
              Selected
              <span className="block text-luxury font-light italic mt-2 leading-relaxed">Projects</span>
            </h2>
            
            <p className="font-body text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              A showcase of my recent work, spanning from web applications to mobile experiences, 
              each crafted with attention to detail and user-centric design.
            </p>
          </div>
          
          <div className="projects-grid grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card group luxury-card rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Project overlay content */}
                  <div className="absolute inset-0 flex items-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="text-white">
                      <h3 className="font-heading text-2xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="font-body text-sm text-neutral-200 mb-4">
                        {project.description}
                      </p>
                      <div className="flex space-x-3">
                        <button className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all duration-300">
                          <ExternalLink size={20} className="text-white" />
                        </button>
                        <button className="bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all duration-300">
                          <Github size={20} className="text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project number */}
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                    <span className="font-mono text-sm font-bold text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="font-heading text-2xl font-bold mb-3 text-neutral-800 group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-body text-neutral-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Tailwind'].map((tech) => (
                      <span key={tech} className="font-mono text-xs px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button className="btn-luxury group text-white px-10 py-4 rounded-full font-heading font-semibold inline-flex items-center space-x-2 shadow-lg transform hover:scale-105">
              <span>View All Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-32 px-6 reveal-section relative">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-50/40 to-accent-50/20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="font-mono text-sm tracking-wider text-luxury-600 bg-luxury-50/50 px-4 py-2 rounded-full border border-luxury-200/50">
                Let's work together
              </span>
            </div>
            
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-neutral-800">
              Let's Create
              <span className="block text-luxury font-light italic mt-2 leading-relaxed">Something Amazing</span>
            </h2>
            
            <p className="font-body text-xl text-neutral-600 mb-16 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your vision to life? I'm always excited to work on new projects 
              and collaborate with passionate people who want to make a difference.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="luxury-card p-8 rounded-3xl text-center group hover:shadow-2xl transition-all duration-500">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail size={36} className="text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-neutral-800">Email Me</h3>
              <p className="font-body text-neutral-600 mb-4">Drop me a line anytime</p>
              <a href="mailto:nimsara.peiriss@gmail.com" className="font-mono text-sm text-primary-600 hover:text-primary-700 transition-colors">
                nimsara.peiriss@gmail.com
              </a>
            </div>
            
            <div className="luxury-card p-8 rounded-3xl text-center group hover:shadow-2xl transition-all duration-500">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-luxury-500 to-luxury-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="text-3xl text-white">💬</div>
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-neutral-800">Let's Chat</h3>
              <p className="font-body text-neutral-600 mb-4">Available for freelance work</p>
              <span className="font-mono text-sm text-luxury-600">
                Response within 24h
              </span>
            </div>
            
            <div className="luxury-card p-8 rounded-3xl text-center group hover:shadow-2xl transition-all duration-500">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="text-3xl text-white">🤝</div>
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-neutral-800">Collaborate</h3>
              <p className="font-body text-neutral-600 mb-4">Open to partnerships</p>
              <span className="font-mono text-sm text-accent-600">
                Long-term projects
              </span>
            </div>
          </div>

          <div className="text-center">
            <button className="btn-luxury group text-white px-12 py-5 rounded-full font-heading font-semibold text-lg inline-flex items-center space-x-3 shadow-xl transform hover:scale-105">
              <span>Start a Project</span>
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="font-body text-sm text-neutral-500 mt-6">
              Usually responds within a few hours
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-neutral-900 to-neutral-950 text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 via-luxury-900/10 to-accent-900/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="font-display text-3xl font-bold mb-4 bg-gradient-to-r from-primary-400 via-luxury-400 to-accent-400 bg-clip-text text-transparent">
                Nimsara Peiris
              </div>
              <p className="font-body text-neutral-300 leading-relaxed mb-6 max-w-md">
                Crafting digital experiences with creative code and elegant design. 
                Always pushing the boundaries of what's possible.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="group luxury-card bg-neutral-800/50 p-3 rounded-full hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                  <Github size={20} className="text-neutral-500 group-hover:text-primary-400" />
                </a>
                <a href="#" className="group luxury-card bg-neutral-800/50 p-3 rounded-full hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                  <Linkedin size={20} className="text-neutral-500 group-hover:text-luxury-400" />
                </a>
                <a href="#" className="group luxury-card bg-neutral-800/50 p-3 rounded-full hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                  <Twitter size={20} className="text-neutral-500 group-hover:text-accent-400" />
                </a>
                <a href="#" className="group luxury-card bg-neutral-800/50 p-3 rounded-full hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                  <Mail size={20} className="text-neutral-500 group-hover:text-primary-400" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-3">
                <a href="#home" className="block font-body text-neutral-300 hover:text-primary-400 transition-colors">Home</a>
                <a href="#about" className="block font-body text-neutral-300 hover:text-primary-400 transition-colors">About</a>
                <a href="#projects" className="block font-body text-neutral-300 hover:text-primary-400 transition-colors">Projects</a>
                <a href="#contact" className="block font-body text-neutral-300 hover:text-primary-400 transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Services</h4>
              <div className="space-y-3">
                <p className="font-body text-neutral-300">Web Development</p>
                <p className="font-body text-neutral-300">UI/UX Design</p>
                <p className="font-body text-neutral-300">Mobile Apps</p>
                <p className="font-body text-neutral-300">Consulting</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="font-mono text-sm text-neutral-400 mb-4 md:mb-0">
              © 2025 Nimsara Peiris. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="font-mono text-xs text-neutral-400 hover:text-primary-400 transition-colors">Privacy Policy</a>
              <a href="#" className="font-mono text-xs text-neutral-400 hover:text-primary-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;