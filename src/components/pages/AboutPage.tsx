import { motion } from "framer-motion";
import { Users, Target, Heart, Zap, Award, ArrowRight } from "lucide-react";

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const values = [
    { icon: Target, title: "Our Mission", description: "To connect exceptional talent with transformative opportunities, empowering careers across Africa and beyond." },
    { icon: Heart, title: "Our Values", description: "We believe in integrity, transparency, and creating equal access to opportunities for all professionals." },
    { icon: Zap, title: "Innovation", description: "Leveraging cutting-edge technology and AI to streamline the recruitment process for everyone." },
    { icon: Users, title: "Community", description: "Building a thriving ecosystem where professionals and organizations grow together." },
  ];

  const stats = [
    { label: "Active Jobs", value: "2,450+" },
    { label: "Companies", value: "580+" },
    { label: "Successful Hires", value: "12,340+" },
    { label: "Happy Users", value: "89,000+" },
  ];

  const team = [
    { name: "Abu David Mckenn", role: "CEO & Founder", bio: "Visionary leader with 15+ years of experience in international recruitment and talent management." },
    { name: "Sarah Mitchell", role: "Chief Technology Officer", bio: "Tech innovator passionate about using AI and data to solve complex recruitment challenges." },
    { name: "Michael Johnson", role: "VP of Operations", bio: "Operations expert ensuring seamless user experiences and platform reliability." },
    { name: "Emma Wilson", role: "Head of Marketing", bio: "Brand strategist focused on expanding BULLOM GROUP's global presence and impact." },
  ];

  const milestones = [
    { year: "2020", event: "BULLOM founded in Freetown, Sierra Leone" },
    { year: "2021", event: "Reached 10,000 registered users" },
    { year: "2022", event: "Expanded to 5 African countries" },
    { year: "2023", event: "Launched AI-powered job matching" },
    { year: "2024", event: "Surpassed 50,000 successful placements" },
    { year: "2025", event: "Global expansion to 20+ countries" },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-yellow-400/5 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">About Us</span>
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-white mt-3">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                BULLOM
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Born in Sierra Leone, built for the world. We're transforming the way talent meets opportunity with innovation, integrity, and impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-6">
                From Freetown to the World
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  BULLOM was founded with a simple yet powerful vision: to bridge the gap between talented professionals and meaningful career opportunities, starting from the heart of Sierra Leone.
                </p>
                <p>
                  Named after the historic Bullom people of Sierra Leone, our platform embodies resilience, community, and the power of connection. We believe that talent knows no borders, and opportunity should be accessible to everyone.
                </p>
                <p>
                  Today, BULLOM serves thousands of job seekers and hundreds of companies across multiple countries, powered by cutting-edge technology and a deeply human approach to recruitment.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-zinc-900/60 rounded-3xl p-8 border border-yellow-400/10">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  Our Journey
                </h3>
                <div className="space-y-5">
                  {milestones.map((m, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-16 text-yellow-400 font-bold text-sm">{m.year}</div>
                      <div className="flex-shrink-0 w-2 h-2 mt-2 bg-yellow-400 rounded-full" />
                      <p className="text-zinc-300 text-sm">{m.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">What Drives Us</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
              Our Core Values
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-zinc-900/50 rounded-2xl p-8 text-center border border-yellow-400/10 hover:border-yellow-400/30 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-yellow-400/10 group-hover:shadow-yellow-400/30 transition-shadow">
                  <v.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-yellow-400/5 to-amber-500/5 rounded-3xl border border-yellow-400/10 p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 mb-2">
                    {s.value}
                  </p>
                  <p className="text-zinc-400 font-medium text-sm">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Our Team</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
              Meet Our Leadership
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-zinc-900/50 rounded-2xl overflow-hidden border border-yellow-400/10 hover:border-yellow-400/30 transition-all group"
              >
                <div className="h-44 bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
                      backgroundSize: "16px 16px",
                    }}
                  />
                  <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center text-4xl font-black text-yellow-400 shadow-xl relative z-10">
                    {m.name.charAt(0)}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-white">{m.name}</h3>
                  <p className="text-yellow-400 font-semibold text-sm mb-3">
                    {m.role}
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{m.bio}</p>
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
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-black">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-black/70 mb-8 max-w-xl mx-auto">
            Whether you're looking for opportunities or talent, BULLOM is here to help you succeed.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate("register")}
            className="px-8 py-4 bg-black text-white font-bold rounded-xl inline-flex items-center gap-2 shadow-xl text-lg"
          >
            Get Started Today <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>
    </div>
  );
}
