import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Star,
  MapPin,
  Briefcase,
  DollarSign,
  X,
  Clock,
  SlidersHorizontal,
} from "lucide-react";

interface JobsPageProps {
  onNavigate: (page: string) => void;
}

export default function JobsPage(_props: JobsPageProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    jobType: "all",
    category: "all",
    experience: "all",
  });

  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      salary: "$140-180K",
      type: "full-time",
      category: "IT",
      experience: "senior",
      posted: "2 days ago",
      description: "We're looking for an experienced React developer to lead our frontend team. You'll work on cutting-edge products used by millions.",
      tags: ["React", "TypeScript", "Node.js"],
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Innovation Labs",
      location: "New York, NY",
      salary: "$120-160K",
      type: "full-time",
      category: "Management",
      experience: "mid",
      posted: "3 days ago",
      description: "Drive product strategy and roadmap for our SaaS platform. Collaborate with engineering, design, and marketing teams.",
      tags: ["Strategy", "Agile", "SaaS"],
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "Creative Studios",
      location: "Remote",
      salary: "$90-130K",
      type: "full-time",
      category: "Design",
      experience: "mid",
      posted: "1 day ago",
      description: "Create beautiful, intuitive interfaces for web and mobile applications. Work with our design system and user research team.",
      tags: ["Figma", "UI/UX", "Design Systems"],
    },
    {
      id: 4,
      title: "Full Stack Engineer",
      company: "CloudTech Solutions",
      location: "Austin, TX",
      salary: "$130-170K",
      type: "full-time",
      category: "IT",
      experience: "mid",
      posted: "5 days ago",
      description: "Build and maintain scalable web applications using modern technologies. Full stack role with focus on cloud architecture.",
      tags: ["Python", "React", "AWS"],
    },
    {
      id: 5,
      title: "Marketing Manager",
      company: "BrandBoost",
      location: "Boston, MA",
      salary: "$80-120K",
      type: "full-time",
      category: "Marketing",
      experience: "mid",
      posted: "1 week ago",
      description: "Lead our marketing campaigns and brand strategy. Drive growth through digital and traditional marketing channels.",
      tags: ["Digital Marketing", "SEO", "Analytics"],
    },
    {
      id: 6,
      title: "Junior Developer",
      company: "StartupXYZ",
      location: "Remote",
      salary: "$60-85K",
      type: "full-time",
      category: "IT",
      experience: "entry",
      posted: "4 days ago",
      description: "Great opportunity for a junior developer to learn and grow. We provide mentorship and a supportive environment.",
      tags: ["JavaScript", "HTML/CSS", "Git"],
    },
    {
      id: 7,
      title: "Data Scientist",
      company: "DataFlow Inc.",
      location: "Chicago, IL",
      salary: "$110-150K",
      type: "full-time",
      category: "IT",
      experience: "mid",
      posted: "3 days ago",
      description: "Apply machine learning and statistical methods to solve complex business problems. Work with large-scale datasets.",
      tags: ["Python", "ML", "SQL"],
    },
    {
      id: 8,
      title: "DevOps Engineer",
      company: "CloudTech Solutions",
      location: "Austin, TX",
      salary: "$120-160K",
      type: "full-time",
      category: "IT",
      experience: "senior",
      posted: "6 days ago",
      description: "Build and maintain CI/CD pipelines, infrastructure as code, and cloud architecture on AWS and GCP.",
      tags: ["AWS", "Docker", "Kubernetes"],
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType =
      filters.jobType === "all" || job.type === filters.jobType;
    const matchesCategory =
      filters.category === "all" || job.category === filters.category;
    const matchesExperience =
      filters.experience === "all" || job.experience === filters.experience;
    return matchesSearch && matchesType && matchesCategory && matchesExperience;
  });

  const activeFilters = Object.values(filters).filter((v) => v !== "all").length;

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-yellow-400/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Careers</span>
            <h1 className="text-4xl md:text-5xl font-black mb-3 text-white mt-2">
              Explore{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Opportunities
              </span>
            </h1>
            <p className="text-zinc-400 text-lg">{jobs.length}+ active positions waiting for you</p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? "fixed inset-0 z-50 bg-black/90 lg:relative lg:bg-transparent" : "hidden lg:block"} lg:col-span-1`}>
            <div className={`${showFilters ? "absolute right-0 top-0 h-full w-80 bg-zinc-900 p-6 overflow-y-auto" : ""} lg:relative lg:w-auto lg:h-auto`}>
              <div className="bg-zinc-900/60 border border-yellow-400/10 rounded-2xl p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="w-5 h-5 text-yellow-400" />
                    <h2 className="text-lg font-bold text-white">Filters</h2>
                  </div>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="lg:hidden text-zinc-400 hover:text-white p-1"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-zinc-300 mb-3 text-sm uppercase tracking-wider">
                      Job Type
                    </h3>
                    <select
                      value={filters.jobType}
                      onChange={(e) =>
                        setFilters({ ...filters, jobType: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-black/50 border border-yellow-400/15 rounded-xl text-white text-sm focus:border-yellow-400/40 transition-colors"
                    >
                      <option value="all">All Types</option>
                      <option value="full-time">Full Time</option>
                      <option value="part-time">Part Time</option>
                      <option value="contract">Contract</option>
                    </select>
                  </div>

                  <div>
                    <h3 className="font-semibold text-zinc-300 mb-3 text-sm uppercase tracking-wider">
                      Category
                    </h3>
                    <select
                      value={filters.category}
                      onChange={(e) =>
                        setFilters({ ...filters, category: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-black/50 border border-yellow-400/15 rounded-xl text-white text-sm focus:border-yellow-400/40 transition-colors"
                    >
                      <option value="all">All Categories</option>
                      <option value="IT">IT & Technology</option>
                      <option value="Design">Design</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Management">Management</option>
                    </select>
                  </div>

                  <div>
                    <h3 className="font-semibold text-zinc-300 mb-3 text-sm uppercase tracking-wider">
                      Experience
                    </h3>
                    <select
                      value={filters.experience}
                      onChange={(e) =>
                        setFilters({ ...filters, experience: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-black/50 border border-yellow-400/15 rounded-xl text-white text-sm focus:border-yellow-400/40 transition-colors"
                    >
                      <option value="all">All Levels</option>
                      <option value="entry">Entry Level</option>
                      <option value="mid">Mid Level</option>
                      <option value="senior">Senior</option>
                    </select>
                  </div>

                  <button
                    onClick={() =>
                      setFilters({
                        jobType: "all",
                        category: "all",
                        experience: "all",
                      })
                    }
                    className="w-full px-4 py-2.5 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-yellow-400/20 transition-all text-sm"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="lg:col-span-3">
            {/* Search */}
            <div className="flex gap-3 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by title, company, or skill..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-zinc-900/60 border border-yellow-400/10 rounded-xl text-white placeholder-zinc-500 focus:border-yellow-400/30 transition-colors text-sm"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden px-4 py-3 bg-zinc-900/60 border border-yellow-400/10 rounded-xl text-white relative"
              >
                <Filter className="w-5 h-5" />
                {activeFilters > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 text-black text-xs font-bold rounded-full flex items-center justify-center">
                    {activeFilters}
                  </span>
                )}
              </button>
            </div>

            {/* Results count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-zinc-400 text-sm">
                Showing{" "}
                <span className="font-bold text-yellow-400">
                  {filteredJobs.length}
                </span>{" "}
                of {jobs.length} jobs
              </p>
              {activeFilters > 0 && (
                <span className="text-xs px-2.5 py-1 bg-yellow-400/10 text-yellow-400 rounded-full font-medium">
                  {activeFilters} filter{activeFilters > 1 ? "s" : ""} active
                </span>
              )}
            </div>

            {/* Job Cards */}
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {filteredJobs.map((job) => (
                  <motion.div
                    key={job.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ y: -2 }}
                    className="bg-zinc-900/60 rounded-2xl border border-yellow-400/10 hover:border-yellow-400/30 transition-all cursor-pointer group"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-xl flex items-center justify-center text-yellow-400 font-extrabold text-lg border border-yellow-400/10 flex-shrink-0">
                            {job.company.charAt(0)}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
                              {job.title}
                            </h3>
                            <p className="text-zinc-400 text-sm">{job.company}</p>
                          </div>
                        </div>
                        <Star className="w-5 h-5 text-zinc-600 hover:text-yellow-400 hover:fill-yellow-400 transition-colors flex-shrink-0" />
                      </div>

                      <p className="text-zinc-400 text-sm mb-4 leading-relaxed line-clamp-2">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="flex items-center gap-1.5 text-sm text-zinc-400">
                          <MapPin className="w-3.5 h-3.5 text-yellow-400" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm font-semibold text-yellow-400">
                          <DollarSign className="w-3.5 h-3.5" />
                          {job.salary}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-zinc-400">
                          <Briefcase className="w-3.5 h-3.5 text-yellow-400" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm text-zinc-500">
                          <Clock className="w-3.5 h-3.5" />
                          {job.posted}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 bg-zinc-800/80 text-zinc-400 rounded-lg border border-zinc-700/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {filteredJobs.length === 0 && (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-zinc-600" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">No jobs found</h3>
                  <p className="text-zinc-400">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
