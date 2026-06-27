import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Users, Briefcase, Globe, Search, Building2 } from "lucide-react";

interface CompaniesPageProps {
  onNavigate: (page: string) => void;
}

export default function CompaniesPage({ onNavigate }: CompaniesPageProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const companies = [
    { id: 1, name: "TechCorp Inc.", industry: "Technology", location: "San Francisco, CA", openPositions: 12, rating: 4.8, employees: "500-1000", description: "Leading technology company building next-gen software solutions." },
    { id: 2, name: "Innovation Labs", industry: "Software", location: "New York, NY", openPositions: 8, rating: 4.6, employees: "200-500", description: "Innovative software studio creating breakthrough products." },
    { id: 3, name: "Creative Studios", industry: "Design", location: "Los Angeles, CA", openPositions: 5, rating: 4.7, employees: "50-200", description: "Award-winning design agency delivering stunning digital experiences." },
    { id: 4, name: "CloudTech Solutions", industry: "Cloud Services", location: "Austin, TX", openPositions: 15, rating: 4.9, employees: "1000+", description: "Enterprise cloud infrastructure and DevOps solutions provider." },
    { id: 5, name: "BrandBoost", industry: "Marketing", location: "Boston, MA", openPositions: 6, rating: 4.5, employees: "100-500", description: "Full-service digital marketing agency driving brand growth." },
    { id: 6, name: "DataFlow Inc.", industry: "Analytics", location: "Chicago, IL", openPositions: 9, rating: 4.7, employees: "200-500", description: "Data analytics platform helping businesses make smarter decisions." },
    { id: 7, name: "SecureNet", industry: "Cybersecurity", location: "Washington, DC", openPositions: 7, rating: 4.8, employees: "200-500", description: "Enterprise cybersecurity solutions protecting global organizations." },
    { id: 8, name: "HealthTech Co.", industry: "Healthcare", location: "Remote", openPositions: 11, rating: 4.6, employees: "500-1000", description: "Digital health platform revolutionizing patient care." },
    { id: 9, name: "GreenEnergy Ltd.", industry: "Clean Energy", location: "Denver, CO", openPositions: 4, rating: 4.4, employees: "100-500", description: "Sustainable energy solutions for a greener future." },
  ];

  const filteredCompanies = companies.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-yellow-400/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Companies</span>
            <h1 className="text-4xl md:text-5xl font-black mb-3 text-white mt-2">
              Top{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Hiring Companies
              </span>
            </h1>
            <p className="text-zinc-400 text-lg">
              Discover companies actively hiring talented professionals
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Search */}
        <div className="relative max-w-xl mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by company or industry..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-zinc-900/60 border border-yellow-400/10 rounded-xl text-white placeholder-zinc-500 focus:border-yellow-400/30 transition-colors text-sm"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-zinc-900/60 rounded-2xl border border-yellow-400/10 p-6 hover:border-yellow-400/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center text-black font-extrabold text-xl shadow-lg shadow-yellow-400/10 group-hover:shadow-yellow-400/30 transition-shadow">
                  {company.name.charAt(0)}
                </div>
                <div className="flex items-center gap-1 bg-yellow-400/10 px-2.5 py-1 rounded-lg">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-white text-sm">
                    {company.rating}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                {company.name}
              </h3>
              <p className="text-sm text-yellow-400/80 font-medium mb-3">
                {company.industry}
              </p>
              <p className="text-sm text-zinc-400 mb-5 leading-relaxed line-clamp-2">
                {company.description}
              </p>
              <div className="space-y-2.5 mb-6 text-sm">
                <div className="flex items-center gap-2.5 text-zinc-400">
                  <Globe className="w-4 h-4 text-yellow-400/70" />
                  {company.location}
                </div>
                <div className="flex items-center gap-2.5 text-zinc-400">
                  <Users className="w-4 h-4 text-yellow-400/70" />
                  {company.employees} employees
                </div>
                <div className="flex items-center gap-2.5 text-zinc-400">
                  <Briefcase className="w-4 h-4 text-yellow-400/70" />
                  <span className="font-semibold text-yellow-400">
                    {company.openPositions}
                  </span>{" "}
                  open positions
                </div>
              </div>
              <button
                onClick={() => onNavigate("jobs")}
                className="w-full px-4 py-2.5 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-yellow-400/20 transition-all text-sm"
              >
                View Positions
              </button>
            </motion.div>
          ))}
        </div>

        {filteredCompanies.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-zinc-600" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No companies found</h3>
            <p className="text-zinc-400">Try adjusting your search</p>
          </div>
        )}
      </div>
    </div>
  );
}
