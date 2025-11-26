"use client"
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Check,
  ChevronDown,
  ArrowRight,
  Play,
  BarChart3,
  Zap,
  Globe,
  Shield,
  Users,
  Layout,
  MessageCircle,
  PieChart,
  TrendingUp,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

// --- Global Styles & Animations ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
    
    body {
      font-family: 'Inter', sans-serif;
    }
    
    h1, h2, h3, h4, .font-serif {
      font-family: 'Playfair Display', serif;
    }

    .animate-fade-up {
      animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      opacity: 0;
      transform: translateY(20px);
    }

    @keyframes fadeUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .delay-100 { animation-delay: 100ms; }
    .delay-200 { animation-delay: 200ms; }
    .delay-300 { animation-delay: 300ms; }

    /* Custom Scrollbar for a premium feel */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1; 
    }
    ::-webkit-scrollbar-thumb {
      background: #ccc; 
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #aaa; 
    }
  `}</style>
);

// --- Components ---

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 text-sm tracking-wide";
  const variants = {
    primary:
      "bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/20 hover:shadow-green-600/40",
    secondary:
      "bg-white border border-gray-200 hover:border-green-600 hover:text-green-700 text-gray-800 shadow-sm hover:shadow-md",
    outline: "border border-gray-200 hover:bg-gray-50 text-gray-600",
    text: "text-gray-600 hover:text-green-600 px-0 py-0 shadow-none hover:shadow-none bg-transparent",
    white: "bg-white text-green-700 hover:bg-gray-50 shadow-lg shadow-black/5",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Tag = ({ children }) => (
  <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-bold tracking-wider uppercase mb-6 border border-green-100/50 shadow-sm">
    {children}
  </span>
);

const SectionHeading = ({ tag, title, subtitle, center = true }) => (
  <div
    className={`mb-20 ${
      center ? "text-center" : "text-left"
    } max-w-3xl mx-auto animate-fade-up`}
  >
    {tag && <Tag>{tag}</Tag>}
    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]">
      {title}
    </h2>
    {subtitle && (
      <p className="text-xl text-gray-500 leading-relaxed font-light">
        {subtitle}
      </p>
    )}
  </div>
);

// --- Sections ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg shadow-green-600/20 group-hover:scale-105 transition-transform">
              P
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-900 font-serif">
              Pixel
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-600">
            {["Services", "About Us", "Case Studies", "Blog", "FAQs"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-green-600 transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-green-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left py-1"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <div className="hidden md:block">
            <Button variant="secondary" className="!px-6 !py-2.5 text-sm">
              Get started
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 p-2"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-8 absolute w-full shadow-2xl animate-fade-up">
          <div className="flex flex-col gap-6">
            {["Services", "About Us", "Case Studies", "Blog", "FAQs"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-2xl font-serif font-medium text-gray-900 hover:text-green-600"
                >
                  {item}
                </a>
              )
            )}
            <Button className="w-full mt-4">Get started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-40 pb-24 overflow-hidden relative">
      {/* Background Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-green-50/50 to-transparent rounded-[100%] blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-8 md:px-12 text-center animate-fade-up">
        <Tag>Now with Integrated Intelligence</Tag>
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-[1.05] tracking-tight">
          Outsmart the Competition
          <br />
          <span className="font-serif italic text-gray-800 font-light relative inline-block">
            <span className="relative z-10">Conversion Focused</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-green-200/60 -z-0 skew-x-12 transform origin-left"></span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Let us help you attract, convert, and retain customers with marketing
          that performs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
          <Button className="w-full sm:w-auto text-lg px-10">
            Try free today
          </Button>
          <Button
            variant="secondary"
            className="w-full sm:w-auto text-lg px-10"
          >
            See pricing
          </Button>
        </div>

        {/* Abstract Network Visualization */}
        <div className="relative max-w-5xl mx-auto h-[350px] md:h-[500px] flex items-center justify-center delay-200 animate-fade-up">
          {/* Central Hub with Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="relative z-10 w-28 h-28 bg-white rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center justify-center border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-tr from-green-500 to-green-700 rounded-full flex items-center justify-center text-white shadow-inner">
              <Zap size={40} fill="currentColor" strokeWidth={1.5} />
            </div>
          </div>

          {/* Floating Nodes */}
          <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
            {/* Node 1 */}
            <div className="absolute top-[20%] left-[20%] w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-blue-600 border border-gray-50 transform hover:scale-110 transition-transform cursor-pointer">
              <BarChart3 size={24} />
            </div>
            {/* Node 2 */}
            <div className="absolute top-[30%] right-[20%] w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-purple-600 border border-gray-50 transform hover:scale-110 transition-transform cursor-pointer">
              <Globe size={24} />
            </div>
            {/* Node 3 */}
            <div className="absolute bottom-[20%] left-[35%] w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-orange-600 border border-gray-50 transform hover:scale-110 transition-transform cursor-pointer">
              <Users size={24} />
            </div>
            {/* Node 4 */}
            <div className="absolute top-12 right-[40%] w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 border border-gray-100">
              <Layout size={20} />
            </div>
          </div>

          {/* Connecting Lines (SVG) - Slightly Thinner/Subtle */}
          <svg
            className="absolute inset-0 w-full h-full -z-10 text-gray-200/70"
            style={{ strokeDasharray: "4,4" }}
          >
            <path
              d="M512 250 L 300 150"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M512 250 L 700 200"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M512 250 L 400 380"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>

        <p className="text-sm font-bold tracking-widest uppercase text-gray-400 mt-16 mb-8 font-sans">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 delay-300 animate-fade-up">
          {["Scale", "Atlantic", "Kansas", "Vision", "Barca"].map((brand) => (
            <span
              key={brand}
              className="text-3xl font-serif font-bold text-gray-800"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImpactSection = () => {
  return (
    <section className="py-32 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-8 md:px-12 grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 animate-fade-up">
          <Tag>Our Impact</Tag>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Over 10 Years of <br />
            Delivering <span className="text-green-600">Growth</span>
          </h2>
          <p className="text-xl text-gray-500 mb-12 font-light leading-relaxed">
            We don't just promise results, we deliver them, year after year. Our
            data-driven approach ensures consistent improvement for enterprise
            and startup clients alike.
          </p>

          <div className="grid grid-cols-2 gap-12 mb-8 border-t border-gray-200 pt-8">
            <div>
              <div className="text-5xl font-serif font-bold text-green-600 mb-2">
                300%
              </div>
              <div className="text-gray-600 font-medium tracking-wide">
                Average ROI
              </div>
            </div>
            <div>
              <div className="text-5xl font-serif font-bold text-green-600 mb-2">
                50M+
              </div>
              <div className="text-gray-600 font-medium tracking-wide">
                Leads Generated
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[600px] w-full order-1 lg:order-2 perspective-1000 animate-fade-up delay-200">
          {/* Layered Cards Effect */}
          <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gray-900 rounded-[2rem] overflow-hidden shadow-2xl z-10 transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
              alt="Meeting"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-white p-4 rounded-[2rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] z-20 transform -rotate-2 hover:rotate-0 transition-transform duration-700 ease-out border border-gray-100">
            <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                alt="Data"
                className="w-full h-full object-cover"
              />
              {/* Floating Play Button */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group cursor-pointer">
                <div className="w-20 h-20 bg-white/30 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="ml-1 text-white fill-white" size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ title, desc, visual }) => (
  <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-[0_0_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 group">
    <div className="h-56 mb-10 flex items-center justify-center bg-gray-50/50 rounded-3xl overflow-hidden relative group-hover:bg-green-50/30 transition-colors">
      {visual}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
      {title}
    </h3>
    <p className="text-gray-500 leading-relaxed font-light">{desc}</p>
  </div>
);

const Features = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <SectionHeading
          tag="Services"
          title="Powerful Features to Boost Your Branding"
          subtitle="From identity to impact, tools that take your brand further."
        />

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          <FeatureCard
            title="Increase Your Outreach"
            desc="Craft a clear voice, vision, and market fit that sets your brand apart."
            visual={
              <div className="w-3/4 bg-white p-6 rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-end gap-3 h-28">
                  <div className="w-1/5 bg-green-100 h-[40%] rounded-md"></div>
                  <div className="w-1/5 bg-green-200 h-[60%] rounded-md"></div>
                  <div className="w-1/5 bg-green-300 h-[30%] rounded-md"></div>
                  <div className="w-1/5 bg-green-400 h-[80%] rounded-md"></div>
                  <div className="w-1/5 bg-green-600 h-[50%] rounded-md shadow-lg shadow-green-600/20"></div>
                </div>
              </div>
            }
          />
          <FeatureCard
            title="Social Media Panel"
            desc="Tailored templates, content guidelines, and platform-specific designs."
            visual={
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-full h-full flex items-center justify-center gap-6 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-[#1877F2] text-white p-3 rounded-2xl shadow-lg transform -translate-x-12">
                    <Facebook size={24} />
                  </div>
                  <div className="bg-black text-white p-3 rounded-2xl shadow-lg transform translate-y-12">
                    <Twitter size={24} />
                  </div>
                  <div className="bg-[#E4405F] text-white p-3 rounded-2xl shadow-lg transform translate-x-12">
                    <Instagram size={24} />
                  </div>
                </div>
                <div className="relative z-10 bg-white p-5 rounded-2xl shadow-2xl border border-gray-100">
                  <Zap className="text-green-500 fill-green-500" size={32} />
                </div>
              </div>
            }
          />
          <FeatureCard
            title="Personalized Branding"
            desc="Track brand assets, performance, and audience perception, all in one place."
            visual={
              <div className="w-3/4 bg-white p-8 rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] transform group-hover:scale-105 transition-transform duration-500">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Brand Health
                  </div>
                  <span className="text-green-600 text-xs font-bold bg-green-50 px-2 py-1 rounded">
                    +24%
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-400 to-green-600 w-[75%] rounded-full shadow-[0_0_10px_rgba(34,197,94,0.4)]"></div>
                </div>
              </div>
            }
          />
        </div>

        {/* Simplify Process Block */}
        <div className="grid md:grid-cols-2 gap-12 bg-gray-50 rounded-[3rem] p-10 md:p-16 items-center shadow-inner">
          <div>
            <h3 className="text-4xl font-bold mb-10 font-serif">
              Simplify the processes
            </h3>
            <ul className="space-y-6">
              {[
                { icon: <BarChart3 size={20} />, text: "Real-Time Analytics" },
                { icon: <Users size={20} />, text: "Client Dashboard Access" },
                { icon: <Layout size={20} />, text: "Branded Asset Library" },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-green-200 transition-colors cursor-default"
                >
                  <div className="bg-green-100 text-green-700 p-3 rounded-xl">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-gray-800 text-lg">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-400 to-green-500 h-[500px] rounded-[2.5rem] flex items-center justify-center relative overflow-hidden group shadow-2xl shadow-green-500/20">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="bg-white/95 backdrop-blur-xl w-3/4 p-8 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transform group-hover:-translate-y-4 transition-transform duration-700 ease-out border border-white/40">
              <div className="flex justify-between mb-6">
                <div className="h-4 w-1/3 bg-gray-200 rounded-full"></div>
                <div className="h-4 w-8 bg-gray-200 rounded-full"></div>
              </div>
              <div className="h-3 w-full bg-gray-100 rounded-full mb-3"></div>
              <div className="h-3 w-5/6 bg-gray-100 rounded-full mb-8"></div>
              <div className="flex gap-4">
                <div className="h-28 w-1/2 bg-green-50 rounded-xl border border-green-100"></div>
                <div className="h-28 w-1/2 bg-gray-50 rounded-xl border border-gray-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const cards = [
    {
      icon: <TrendingUp />,
      title: "Results-Driven Strategy",
      desc: "We don't just make things look good, we make them work.",
    },
    {
      icon: <Zap />,
      title: "Full-Service Expertise",
      desc: "From branding to content to performance ads.",
    },
    {
      icon: <Shield />,
      title: "Transparent Pricing",
      desc: "No hidden fees. You know exactly where every dollar goes.",
    },
    {
      icon: <Users />,
      title: "Proven Track Record",
      desc: "We work quietly for quiet, trusted by startups and giants.",
    },
  ];

  return (
    <section className="py-32 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <SectionHeading
          tag="Our Edge"
          title="Why Choose Us"
          subtitle="Discover the key reasons why clients trust us to deliver results."
        />

        <div className="grid md:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-[2rem] border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.15)] transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(card.icon, { size: 24 })}
              </div>
              <h4 className="font-bold font-serif text-xl mb-4 text-gray-900">
                {card.title}
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed font-light">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      desc: "Perfect for early stage brands.",
      features: [
        "Basic Brand Strategy",
        "Social Media Setup",
        "Content Calendar (2 Weeks)",
        "SEO Starter Kit",
        "3 Branded Graphics",
      ],
      highlight: false,
    },
    {
      name: "Business",
      price: "$299",
      desc: "For growing teams that need strategy.",
      features: [
        "Everything in Starter",
        "Social Media Management",
        "Up to 10 Branded Graphics",
        "Advanced SEO Optimization",
        "Priority Support (24h)",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "$799+",
      desc: "All-in-one solution for scaling.",
      features: [
        "Everything in Business",
        "Dedicated Marketing Manager",
        "CRO & Automation Setup",
        "Full Ad Campaign Management",
        "Weekly Content Production",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-32 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <SectionHeading
          tag="Pricing"
          title="Transparent Pricing"
          subtitle="Choose a plan that fits your needs today and grows with you tomorrow."
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`p-10 rounded-[2.5rem] border transition-all duration-500 relative ${
                plan.highlight
                  ? "bg-[#F0FDF4] border-green-500 shadow-[0_25px_50px_-12px_rgba(34,197,94,0.25)] scale-105 z-10"
                  : "bg-white border-gray-100 hover:border-gray-300 hover:shadow-xl"
              }`}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-2xl font-serif">{plan.name}</h3>
                {plan.highlight && (
                  <span className="text-xs font-bold text-green-700 bg-white px-3 py-1 rounded-full shadow-sm uppercase tracking-wide">
                    Popular
                  </span>
                )}
              </div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-bold font-serif tracking-tight text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-500">/mo</span>
              </div>
              <p className="text-gray-500 text-sm mb-10 pb-8 border-b border-gray-100/50">
                {plan.desc}
              </p>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 text-sm text-gray-600"
                  >
                    <div
                      className={`mt-0.5 min-w-[1.25rem] min-h-[1.25rem] rounded-full flex items-center justify-center ${
                        plan.highlight
                          ? "bg-green-200 text-green-800"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlight ? "primary" : "outline"}
                className="w-full justify-center"
              >
                {plan.highlight ? "Get Started" : "Contact Sales"}{" "}
                <ArrowRight size={16} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-32 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <SectionHeading
          tag="Testimonial"
          title="What Our Clients Say"
          center={true}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-[2rem] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-0 group-hover:opacity-50 transition-opacity"></div>

              <div className="flex text-yellow-400 gap-1 mb-8">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed font-light text-lg italic font-serif">
                "This product completely transformed our workflow. The intuitive
                design and powerful features made it an instant favorite for our
                entire marketing team."
              </p>
              <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden ring-2 ring-white shadow-md">
                  <img
                    src={`https://i.pravatar.cc/150?img=${i + 12}`}
                    alt="User"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900 font-serif">
                    Michael Ross
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">
                    Product Manager
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const questions = [
    "What kind of businesses do you work with?",
    "How long does it take to see results?",
    "Do you offer custom packages?",
    "What is the next step to get started?",
    "Can I customize a plan to fit my needs?",
  ];

  return (
    <section className="py-32 bg-white" id="faqs">
      <div className="max-w-3xl mx-auto px-8 md:px-12">
        <SectionHeading
          tag="FAQ"
          title="Common Questions"
          subtitle="Everything you need to know about working with us."
        />

        <div className="space-y-6">
          {questions.map((q, i) => (
            <div
              key={i}
              className={`border rounded-3xl overflow-hidden transition-all duration-300 ${
                openIndex === i
                  ? "bg-gray-50 border-green-200 shadow-sm"
                  : "bg-white border-gray-100"
              }`}
            >
              <button
                onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
                className="w-full flex justify-between items-center p-8 text-left font-serif font-bold text-lg text-gray-900 hover:text-green-700 transition-colors"
              >
                {q}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === i
                      ? "bg-green-200 text-green-800 rotate-180"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <ChevronDown size={18} />
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${
                  openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-8 pt-0 text-gray-500 leading-relaxed font-light">
                  We work with startups, small businesses, and established
                  brands across various industries. Whether you're B2B or B2C,
                  we tailor our strategies to fit your goals.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="py-24 px-6 md:px-12">
    <div className="max-w-7xl mx-auto bg-[#0a1f12] rounded-[3.5rem] p-12 md:p-32 text-center relative overflow-hidden shadow-2xl">
      {/* Abstract Green Shapes */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-600 rounded-full blur-[150px] opacity-20 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-400 rounded-full blur-[150px] opacity-10 transform translate-x-1/2 translate-y-1/2"></div>

      {/* Decorative SVG curves */}
      <svg
        className="absolute left-10 bottom-10 w-40 h-40 text-green-500/20"
        viewBox="0 0 100 100"
      >
        <path
          d="M10,90 Q50,90 50,50"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <svg
        className="absolute right-20 top-20 w-32 h-32 text-green-500/20"
        viewBox="0 0 100 100"
      >
        <path
          d="M90,10 Q50,10 50,50"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-serif">
          Ready to Grow Your Brand?
        </h2>
        <p className="text-green-100/80 max-w-2xl mx-auto mb-12 text-xl font-light leading-relaxed">
          Take the next step toward building a stronger, more visible brand
          today. Join the ranks of industry leaders.
        </p>
        <Button
          variant="white"
          className="mx-auto !text-lg !px-12 !py-5 font-bold hover:scale-105"
        >
          Get Started Now
        </Button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-8 md:px-12 grid md:grid-cols-5 gap-16 mb-20">
      <div className="md:col-span-2">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white font-serif font-bold text-xl">
            P
          </div>
          <span className="text-2xl font-bold font-serif">Pixel</span>
        </div>
        <p className="text-gray-500 max-w-sm mb-8 leading-relaxed font-light">
          Take the first step toward smarter marketing. Empowering brands to
          grow with data-driven strategies and world-class design.
        </p>
      </div>

      <div>
        <h4 className="font-bold mb-8 font-serif text-lg">Product</h4>
        <ul className="space-y-4 text-sm text-gray-500 font-medium">
          <li>
            <a href="#" className="hover:text-green-600 transition-colors">
              Solutions
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600 transition-colors">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600 transition-colors">
              Case Studies
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-8 font-serif text-lg">Company</h4>
        <ul className="space-y-4 text-sm text-gray-500 font-medium">
          <li>
            <a href="#" className="hover:text-green-600 transition-colors">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600 transition-colors">
              Our Team
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600 transition-colors">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600 transition-colors">
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-8 font-serif text-lg">Resources</h4>
        <ul className="space-y-4 text-sm text-gray-500 font-medium">
          <li>
            <a href="#" className="hover:text-green-600 transition-colors">
              Guides
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600 transition-colors">
              Webinars
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600 transition-colors">
              Success Stories
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-600 transition-colors">
              FAQs
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-8 md:px-12 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-medium">
      <p>© 2025 Pixel. All rights reserved.</p>
      <div className="flex gap-8 mt-6 md:mt-0">
        <Instagram
          size={20}
          className="hover:text-green-600 cursor-pointer transition-colors"
        />
        <Twitter
          size={20}
          className="hover:text-green-600 cursor-pointer transition-colors"
        />
        <Linkedin
          size={20}
          className="hover:text-green-600 cursor-pointer transition-colors"
        />
      </div>
    </div>
  </footer>
);

// --- Main App ---

const Home = () => {
  return (
    <div className="bg-white selection:bg-green-100 selection:text-green-900 text-slate-900">
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
        <ImpactSection />
        <Features />
        <WhyChooseUs />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
