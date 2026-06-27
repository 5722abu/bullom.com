import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, Search, BookOpen } from "lucide-react";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    { id: 1, title: "10 Tips to Ace Your Job Interview", author: "Sarah Mitchell", date: "Mar 15, 2026", category: "Career Tips", excerpt: "Learn the proven strategies that top candidates use to land their dream jobs. From preparation techniques to follow-up emails.", readTime: "5 min read" },
    { id: 2, title: "The Future of Remote Work in 2026", author: "Michael Johnson", date: "Mar 10, 2026", category: "Industry Trends", excerpt: "Explore how remote work is reshaping the job market and what it means for both employers and employees worldwide.", readTime: "7 min read" },
    { id: 3, title: "How to Write a Killer Resume", author: "Emma Wilson", date: "Mar 5, 2026", category: "Resume Guide", excerpt: "Step-by-step guide to creating a resume that gets noticed by recruiters and passes ATS screening systems.", readTime: "6 min read" },
    { id: 4, title: "Salary Negotiation 101", author: "Abu David Mckenn", date: "Feb 28, 2026", category: "Career Tips", excerpt: "Master the art of negotiating your salary package. Know your worth and get the compensation you deserve.", readTime: "8 min read" },
    { id: 5, title: "Top Skills in Demand for 2026", author: "Sarah Mitchell", date: "Feb 20, 2026", category: "Industry Trends", excerpt: "Discover the most sought-after skills employers are looking for and how to develop them for your career.", readTime: "5 min read" },
    { id: 6, title: "Career Transition Guide", author: "Michael Johnson", date: "Feb 15, 2026", category: "Career Tips", excerpt: "A comprehensive guide to successfully switching careers, from self-assessment to landing your first role.", readTime: "10 min read" },
    { id: 7, title: "Building Your Personal Brand", author: "Emma Wilson", date: "Feb 10, 2026", category: "Resume Guide", excerpt: "Learn how to create a strong personal brand that attracts opportunities and makes you stand out.", readTime: "6 min read" },
    { id: 8, title: "AI and the Job Market", author: "Abu David Mckenn", date: "Feb 5, 2026", category: "Industry Trends", excerpt: "How artificial intelligence is transforming recruitment and what job seekers need to know to stay ahead.", readTime: "9 min read" },
    { id: 9, title: "Networking in the Digital Age", author: "Sarah Mitchell", date: "Jan 30, 2026", category: "Career Tips", excerpt: "Effective strategies for building professional connections online and leveraging them for career growth.", readTime: "5 min read" },
  ];

  const categories = ["all", "Career Tips", "Industry Trends", "Resume Guide"];

  const filtered = blogPosts.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/3 w-[500px] h-[300px] bg-yellow-400/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Blog</span>
            <h1 className="text-4xl md:text-5xl font-black mb-3 text-white mt-2">
              Career{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Insights
              </span>
            </h1>
            <p className="text-zinc-400 text-lg">Expert advice to accelerate your career journey</p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Search & Categories */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-zinc-900/60 border border-yellow-400/10 rounded-xl text-white placeholder-zinc-500 focus:border-yellow-400/30 transition-colors text-sm"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-yellow-400 text-black"
                    : "bg-zinc-900/60 text-zinc-400 border border-yellow-400/10 hover:border-yellow-400/30"
                }`}
              >
                {cat === "all" ? "All Posts" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {filtered.length > 0 && selectedCategory === "all" && !searchTerm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-zinc-900/60 rounded-2xl border border-yellow-400/10 overflow-hidden mb-10 group hover:border-yellow-400/30 transition-all cursor-pointer"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-auto bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "20px 20px" }} />
                <span className="text-6xl font-black text-yellow-400/20">BG</span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold text-yellow-400 bg-yellow-400/10 px-2.5 py-1 rounded-lg">
                    {filtered[0].category}
                  </span>
                  <span className="text-xs text-zinc-500">{filtered[0].readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {filtered[0].title}
                </h2>
                <p className="text-zinc-400 mb-4 leading-relaxed">{filtered[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-yellow-400/70" />
                    {filtered[0].author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-yellow-400/70" />
                    {filtered[0].date}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(selectedCategory === "all" && !searchTerm ? filtered.slice(1) : filtered).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-zinc-900/60 rounded-2xl border border-yellow-400/10 overflow-hidden hover:border-yellow-400/30 transition-all cursor-pointer group"
            >
              <div className="h-44 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "20px 20px" }} />
                <span className="text-4xl font-black text-yellow-400/20">BG</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-yellow-400 bg-yellow-400/10 px-2.5 py-1 rounded-lg">
                    {post.category}
                  </span>
                  <span className="text-xs text-zinc-500">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-zinc-500 border-t border-yellow-400/10 pt-4">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-yellow-400/70" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-yellow-400/70" />
                      {post.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-zinc-600" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
            <p className="text-zinc-400">Try adjusting your search or category filter</p>
          </div>
        )}
      </div>
    </div>
  );
}
