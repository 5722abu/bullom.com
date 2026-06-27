import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  TrendingUp,
  ArrowRight,
  Star,
  CheckCircle,
  Sparkles,
  Shield,
  Zap,
  Globe,
} from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const stats = [
    { label: "Active Jobs", value: "2,450+", icon: Briefcase },
    { label: "Companies", value: "580+", icon: Globe },
    { label: "Successful Hires", value: "12,340+", icon: TrendingUp },
    { label: "Happy Users", value: "89,000+", icon: Users },
  ];

  const steps = [
    {
      icon: Briefcase,
      title: "Create Profile",
      description: "Build your professional profile in minutes with our guided setup",
      step: "01",
    },
    {
      icon: TrendingUp,
      title: "Search Jobs",
      description: "Find perfect opportunities matching your skills and interests",
      step: "02",
    },
    {
      icon: CheckCircle,
      title: "Apply Easily",
      description: "Submit applications with one click and track your progress",
      step: "03",
    },
    {
      icon: Users,
      title: "Get Hired",
      description: "Connect with top employers and land your dream role",
      step: "04",
    },
  ];

  const featuredJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      salary: "$140-180K",
      type: "Full-time",
      tags: ["React", "TypeScript", "Node.js"],
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Innovation Labs",
      location: "New York, NY",
      salary: "$120-160K",
      type: "Full-time",
      tags: ["Strategy", "Agile", "SaaS"],
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "Creative Studios",
      location: "Remote",
      salary: "$90-130K",
      type: "Remote",
      tags: ["Figma", "UI/UX", "Design Systems"],
    },
    {
      id: 4,
      title: "Full Stack Engineer",
      company: "CloudTech Solutions",
      location: "Austin, TX",
      salary: "$130-170K",
      type: "Full-time",
      tags: ["Python", "React", "AWS"],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      text: "BULLOM helped me land my dream job within 2 weeks! The platform's AI matching is incredibly accurate.",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "CTO at StartupXYZ",
      text: "As an employer, BULLOM gave us access to top-tier talent. We've hired 15 amazing engineers through the platform.",
      avatar: "MC",
    },
    {
      name: "Emma Davis",
      role: "UX Designer at Meta",
      text: "The job recommendations were spot-on. Found a perfect role that aligned with my career goals and values.",
      avatar: "ED",
    },
  ];

  const features = [
    { icon: Sparkles, title: "AI-Powered Matching", desc: "Smart algorithms connect you with the perfect opportunities" },
    { icon: Shield, title: "Verified Companies", desc: "All employers are vetted for legitimacy and quality" },
    { icon: Zap, title: "Instant Apply", desc: "One-click applications save you hours of repetitive work" },
    { icon: Globe, title: "Global Reach", desc: "Access opportunities from companies around the world" },
  ];

  return (
    <div className="w-full bg-black overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-yellow-400/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px]" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(250,204,21,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,0.3) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight text-white mt-6">
              Connecting
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500">
                Talent
              </span>{" "}
              with
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500">
                Opportunity
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Find your perfect job or hire top talent. BULLOM is the modern HR
              management and recruitment platform trusted by thousands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate("jobs")}
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-yellow-400/20 hover:shadow-yellow-400/40 transition-shadow text-lg"
              >
                Browse Jobs <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate("register")}
                className="px-8 py-4 border-2 border-yellow-400/40 text-white font-bold rounded-xl hover:bg-yellow-400/5 transition-colors text-lg"
              >
                Post a Job
              </motion.button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 pt-8 text-zinc-500 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-yellow-400" />
                <span>Verified Employers</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-zinc-700" />
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Instant Apply</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-zinc-700" />
              <div className="hidden sm:flex items-center gap-2">
                <Globe className="w-4 h-4 text-yellow-400" />
                <span>Global Reach</span>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="bg-zinc-900/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-yellow-400/10 hover:border-yellow-400/30 transition-all group"
              >
                <stat.icon className="w-6 h-6 text-yellow-400/60 mx-auto mb-3 group-hover:text-yellow-400 transition-colors" />
                <p className="text-3xl md:text-4xl font-black text-white">
                  {stat.value}
                </p>
                <p className="text-zinc-500 text-sm mt-1 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
              Built for Modern Recruitment
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-zinc-900/50 border border-yellow-400/10 rounded-2xl p-8 hover:border-yellow-400/30 transition-all group"
              >
                <div className="w-14 h-14 bg-yellow-400/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-yellow-400/20 transition-colors">
                  <f.icon className="w-7 h-7 text-yellow-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/50 to-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Process</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
              How It Works
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-yellow-400/20 via-yellow-400/40 to-yellow-400/20" />
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="bg-zinc-900/50 border border-yellow-400/10 rounded-2xl p-8 text-center hover:border-yellow-400/30 transition-all group relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-yellow-400/20 group-hover:shadow-yellow-400/40 transition-shadow relative z-10">
                    <step.icon className="w-7 h-7 text-black" />
                  </div>
                  <span className="absolute top-4 right-4 text-5xl font-black text-yellow-400/5 group-hover:text-yellow-400/10 transition-colors">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED JOBS */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <div>
              <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Opportunities</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
                Featured Jobs
              </h2>
            </div>
            <button
              onClick={() => onNavigate("jobs")}
              className="text-yellow-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all group"
            >
              View All Jobs{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredJobs.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                onClick={() => onNavigate("jobs")}
                className="bg-zinc-900/60 rounded-2xl p-6 border border-yellow-400/10 hover:border-yellow-400/30 transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-xl flex items-center justify-center text-yellow-400 font-extrabold text-lg border border-yellow-400/10">
                      {job.company.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-zinc-400 text-sm">{job.company}</p>
                    </div>
                  </div>
                  <Star className="w-5 h-5 text-zinc-600 hover:text-yellow-400 hover:fill-yellow-400 cursor-pointer transition-colors" />
                </div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs px-2.5 py-1 bg-yellow-400/10 text-yellow-400 rounded-lg font-medium">
                    {job.type}
                  </span>
                  <span className="text-sm text-zinc-400">{job.location}</span>
                  <span className="text-sm font-bold text-yellow-400">
                    {job.salary}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 bg-zinc-800 text-zinc-400 rounded-lg border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
              What Our Users Say
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-zinc-900/60 rounded-2xl p-8 border border-yellow-400/10 hover:border-yellow-400/30 transition-all relative"
              >
                {/* Quote mark */}
                <div className="absolute top-6 right-6 text-6xl font-serif text-yellow-400/10 leading-none">"</div>
                
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-zinc-300 mb-6 leading-relaxed relative z-10">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-yellow-400/10">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-xs text-yellow-400/80">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center space-y-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-black leading-tight">
              Ready to Find Your
              <br />
              Next Opportunity?
            </h2>
            <p className="text-xl text-black/70 mt-4 max-w-xl mx-auto">
              Join thousands of professionals who found career success with BULLOM
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate("register")}
                className="px-8 py-4 bg-black text-white font-bold rounded-xl inline-flex items-center justify-center gap-2 shadow-xl text-lg"
              >
                Get Started Today <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate("jobs")}
                className="px-8 py-4 bg-black/10 text-black font-bold rounded-xl text-lg border-2 border-black/20"
              >
                Browse Jobs
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
