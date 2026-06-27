import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ChevronDown, CheckCircle, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const faqs = [
    { q: "How do I post a job?", a: "Create an employer account and click 'Post a Job' from your dashboard. Fill in the job details including title, description, requirements, and salary range, then publish it to make it visible to job seekers." },
    { q: "How can I apply for jobs?", a: "Create a job seeker account, browse available jobs using our search and filter tools, and click 'Apply' on any listing that interests you. You can track all your applications from your dashboard." },
    { q: "Is there a fee to use BULLOM?", a: "BULLOM is completely free for job seekers. Employers can post jobs for free with our basic plan, or choose premium plans for additional features like featured listings and advanced analytics." },
    { q: "How long does it take to get hired?", a: "Most candidates receive interview invitations within 1-2 weeks of applying. The entire hiring process typically takes 2-4 weeks depending on the employer's timeline." },
    { q: "Can I use BULLOM outside Sierra Leone?", a: "Yes! BULLOM serves job seekers and employers globally. We have a growing presence across Africa and international markets, connecting talent worldwide." },
  ];

  const contactCards = [
    {
      icon: Mail,
      title: "Email Us",
      info: "info@bullom.com",
      sub: "We reply within 24 hours",
      href: "mailto:info@bullom.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+232 31 297087",
      sub: "+232 74 146230",
      href: "tel:+23231297087",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "3 Tigi Drive, Regent Road",
      sub: "Lumley, Freetown, Sierra Leone",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 w-[500px] h-[300px] bg-yellow-400/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Contact</span>
            <h1 className="text-4xl md:text-5xl font-black mb-3 text-white mt-2">
              Get In{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Touch
              </span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Have a question or need help? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {contactCards.map((card, i) => (
            <motion.a
              key={i}
              href={card.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-zinc-900/60 rounded-2xl p-8 border border-yellow-400/10 text-center hover:border-yellow-400/30 transition-all group block"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-yellow-400/10 group-hover:shadow-yellow-400/30 transition-shadow">
                <card.icon className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
              <p className="text-yellow-400 font-medium text-sm">{card.info}</p>
              <p className="text-zinc-400 text-sm mt-1">{card.sub}</p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form & FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-yellow-400" />
              <h2 className="text-2xl font-bold text-white">Send a Message</h2>
            </div>
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-zinc-900/60 rounded-2xl border border-yellow-400/20 p-12 text-center"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-zinc-400">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3.5 bg-zinc-900/60 border border-yellow-400/10 rounded-xl text-white placeholder-zinc-500 focus:border-yellow-400/30 transition-colors text-sm"
                    required
                  />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3.5 bg-zinc-900/60 border border-yellow-400/10 rounded-xl text-white placeholder-zinc-500 focus:border-yellow-400/30 transition-colors text-sm"
                    required
                  />
                </div>
                <select
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-4 py-3.5 bg-zinc-900/60 border border-yellow-400/10 rounded-xl text-white text-sm focus:border-yellow-400/30 transition-colors"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="job">Job Inquiry</option>
                  <option value="employer">Employer Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3.5 bg-zinc-900/60 border border-yellow-400/10 rounded-xl text-white placeholder-zinc-500 resize-none focus:border-yellow-400/30 transition-colors text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-yellow-400/20 transition-all"
                >
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-zinc-900/60 rounded-xl border border-yellow-400/10 overflow-hidden hover:border-yellow-400/20 transition-colors"
                >
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === i ? null : i)
                    }
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-white text-sm pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-yellow-400 transition-transform flex-shrink-0 ${
                        expandedFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedFaq === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="px-6 pb-4"
                    >
                      <p className="text-zinc-400 text-sm leading-relaxed border-t border-yellow-400/10 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
