import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  Building2,
  FileText,
  BarChart3,
  Shield,
  Settings,
  Eye,
  CheckCircle,
  Clock,
  ArrowUp,
  ArrowDown,
  Plus,
  Search,
  Filter,
  Download,
  Edit3,
  Trash2,
  Ban,
  UserCheck,
  Mail,
  DollarSign,
  Globe,
  Activity,
  Server,
  TrendingUp,
  ChevronRight,
  Lock,
  KeyRound,
  Database,
} from "lucide-react";
import { useStore } from "@/store";

export default function AdminDashboard() {
  const { user } = useStore();
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");

  // --- DATA ---
  const stats = [
    { label: "Total Users", value: "89,245", icon: Users, change: "+12.5%", up: true },
    { label: "Active Jobs", value: "2,450", icon: Briefcase, change: "+8.3%", up: true },
    { label: "Companies", value: "584", icon: Building2, change: "+5.1%", up: true },
    { label: "Applications", value: "15,832", icon: FileText, change: "+18.7%", up: true },
    { label: "Revenue MRR", value: "$84.2k", icon: DollarSign, change: "+22.4%", up: true },
    { label: "Platform Uptime", value: "99.97%", icon: Server, change: "+0.02%", up: true },
  ];

  const [users, setUsers] = useState([
    { id: 1, name: "John Smith", email: "john@example.com", role: "Job Seeker", date: "Mar 15, 2026", status: "active", apps: 8, lastActive: "2h ago" },
    { id: 2, name: "Jane Doe", email: "jane@company.com", role: "Employer", date: "Mar 14, 2026", status: "active", apps: 0, lastActive: "1h ago" },
    { id: 3, name: "Bob Wilson", email: "bob@startup.io", role: "Employer", date: "Mar 13, 2026", status: "pending", apps: 0, lastActive: "5d ago" },
    { id: 4, name: "Alice Brown", email: "alice@email.com", role: "Job Seeker", date: "Mar 12, 2026", status: "active", apps: 14, lastActive: "4h ago" },
    { id: 5, name: "Charlie Davis", email: "charlie@tech.com", role: "Job Seeker", date: "Mar 11, 2026", status: "suspended", apps: 2, lastActive: "12d ago" },
    { id: 6, name: "Tina Okoro", email: "tina@lumiere.co", role: "Employer", date: "Mar 10, 2026", status: "active", apps: 0, lastActive: "30m ago" },
    { id: 7, name: "David Kamara", email: "david.k@gmail.com", role: "Job Seeker", date: "Mar 9, 2026", status: "active", apps: 21, lastActive: "now" },
  ]);

  const [jobs, setJobs] = useState([
    { id: 1, title: "Senior React Developer", company: "TechCorp Inc.", status: "active", applications: 45, date: "Mar 14, 2026", salary: "$140-180k", category: "IT", featured: true },
    { id: 2, title: "Product Manager", company: "Innovation Labs", status: "active", applications: 32, date: "Mar 13, 2026", salary: "$120-160k", category: "Management", featured: false },
    { id: 3, title: "UX Designer", company: "Creative Studios", status: "pending", applications: 0, date: "Mar 12, 2026", salary: "$90-130k", category: "Design", featured: false },
    { id: 4, title: "DevOps Engineer", company: "CloudTech", status: "active", applications: 28, date: "Mar 11, 2026", salary: "$130-170k", category: "IT", featured: true },
    { id: 5, title: "Data Analyst", company: "DataFlow Inc.", status: "expired", applications: 67, date: "Mar 5, 2026", salary: "$95-125k", category: "Analytics", featured: false },
    { id: 6, title: "Sales Lead", company: "BrandBoost", status: "flagged", applications: 19, date: "Mar 15, 2026", salary: "$70-110k", category: "Sales", featured: false },
  ]);

  const companiesAdmin = [
    { id: 1, name: "TechCorp Inc.", plan: "Enterprise", verified: true, jobs: 12, spend: "$2,400", status: "active" },
    { id: 2, name: "Innovation Labs", plan: "Pro", verified: true, jobs: 8, spend: "$1,200", status: "active" },
    { id: 3, name: "Creative Studios", plan: "Starter", verified: false, jobs: 2, spend: "$300", status: "pending" },
    { id: 4, name: "CloudTech Solutions", plan: "Enterprise", verified: true, jobs: 15, spend: "$2,400", status: "active" },
  ];

  const activityLog = [
    { action: "New user registered", detail: "john@example.com", time: "5 min ago", sev: "info" },
    { action: "Job posted", detail: "Senior React Developer at TechCorp", time: "15 min ago", sev: "success" },
    { action: "Application submitted", detail: "Jane Doe → Product Manager", time: "32 min ago", sev: "info" },
    { action: "Company verified", detail: "Innovation Labs", time: "1h ago", sev: "success" },
    { action: "Payment failed", detail: "BrandBoost ($99/mo)", time: "2h ago", sev: "warn" },
    { action: "Job flagged", detail: "Sales Lead – spam report", time: "2h ago", sev: "error" },
    { action: "User suspended", detail: "charlie@tech.com (TOS)", time: "3h ago", sev: "error" },
    { action: "DB backup completed", detail: "Auto backup 1.2GB", time: "6h ago", sev: "info" },
  ];

  // --- HELPERS ---
  const statusBadge = (status: string) => {
    const map: Record<string, { bg: string; text: string; dot?: string }> = {
      active: { bg: "bg-green-400/10", text: "text-green-400", dot: "bg-green-400" },
      pending: { bg: "bg-yellow-400/10", text: "text-yellow-400", dot: "bg-yellow-400" },
      suspended: { bg: "bg-red-400/10", text: "text-red-400", dot: "bg-red-400" },
      expired: { bg: "bg-zinc-400/10", text: "text-zinc-400", dot: "bg-zinc-500" },
      flagged: { bg: "bg-red-400/10", text: "text-red-400", dot: "bg-red-400" },
    };
    const s = map[status] || map.active;
    return (
      <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg ${s.bg} ${s.text} capitalize inline-flex items-center gap-1.5`}>
        <span className={`w-1.5 h-1.5 rounded-full ${s.dot || "bg-current"}`} />
        {status}
      </span>
    );
  };

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredJobs = jobs.filter(j =>
    j.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    j.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleUserStatus = (id: number) => {
    setUsers(prev => prev.map(u =>
      u.id === id ? { ...u, status: u.status === "active" ? "suspended" : "active" } : u
    ));
  };
  const approveJob = (id: number) =>
    setJobs(prev => prev.map(j => j.id === id ? { ...j, status: "active" } : j));
  const toggleFeatureJob = (id: number) =>
    setJobs(prev => prev.map(j => j.id === id ? { ...j, featured: !j.featured } : j));

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "users", label: "Users", icon: Users, count: users.length },
    { id: "jobs", label: "Job Moderation", icon: Briefcase, count: jobs.filter(j=>j.status==="pending"||j.status==="flagged").length },
    { id: "companies", label: "Companies", icon: Building2, count: companiesAdmin.length },
    { id: "analytics", label: "Analytics", icon: TrendingUp },
    { id: "activity", label: "Audit Log", icon: Clock },
    { id: "settings", label: "System", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Admin Banner */}
      <div className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between text-sm font-semibold">
          <div className="flex items-center gap-3">
            <Shield className="w-4 h-4" />
            <span>BULLOM ADMIN CONTROL CENTER</span>
            <span className="hidden sm:inline px-2 py-0.5 bg-black/10 rounded text-[10px] uppercase tracking-wider">v2.3.1 · production</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-green-600 rounded-full animate-pulse" /> All systems operational</span>
            <span className="hidden md:inline">{user?.email || "admin@bullom.com"}</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="relative py-10 border-b border-yellow-400/10">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[420px] h-[220px] bg-yellow-400/5 rounded-full blur-[90px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-400/20">
                <KeyRound className="w-7 h-7 text-black" />
              </div>
              <div>
                <h1 className="text-[28px] font-black text-white tracking-tight">Admin Console</h1>
                <p className="text-zinc-400 text-sm">Real-time platform control · Sierra Leone · GMT</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-zinc-900 border border-yellow-400/15 rounded-xl text-zinc-300 text-sm hover:border-yellow-400/30 transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" /> Export CSV
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-xl text-sm font-semibold hover:shadow-md hover:shadow-yellow-400/20 flex items-center gap-2">
                <Plus className="w-4 h-4" /> New Job
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Tabs */}
        <div className="flex gap-1 mb-8 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 border-b border-yellow-400/10 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setSearchTerm(""); }}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all whitespace-nowrap border-b-2 -mb-px ${
                activeTab === tab.id
                  ? "text-yellow-400 border-yellow-400 bg-yellow-400/5"
                  : "text-zinc-400 border-transparent hover:text-white"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
              {tab.count !== undefined && tab.count > 0 && (
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  tab.id === "jobs" ? "bg-red-400/20 text-red-300" : "bg-zinc-800 text-zinc-300"
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-zinc-900/50 rounded-2xl p-5 border border-yellow-400/10"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 bg-yellow-400/10 rounded-xl flex items-center justify-center">
                      <stat.icon className="w-4 h-4 text-yellow-400" />
                    </div>
                    <span className={`text-xs font-semibold flex items-center gap-0.5 ${stat.up ? "text-emerald-400" : "text-red-400"}`}>
                      {stat.up ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="text-zinc-500 text-xs mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-zinc-900/50 rounded-2xl p-6 border border-yellow-400/10">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-bold text-white flex items-center gap-2"><Activity className="w-4 h-4 text-yellow-400" /> Live metrics</h3>
                  <span className="text-[11px] text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">Live</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  {[
                    ["Signups /h", "18"],
                    ["Applications /h", "214"],
                    ["Active employers", "127"],
                    ["Avg time to hire", "11.6 d"],
                  ].map(([k,v]) => (
                    <div key={k} className="bg-black/40 rounded-xl p-3 border border-yellow-400/5">
                      <div className="text-zinc-500 text-xs">{k}</div>
                      <div className="text-white font-bold text-lg">{v}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    ["New users (7d)", 78],
                    ["Job posts (7d)", 64],
                    ["Hires confirmed", 92],
                  ].map(([label, pct]) => (
                    <div key={label as string}>
                      <div className="flex justify-between text-xs text-zinc-400 mb-1">
                        <span>{label}</span><span>{pct}%</span>
                      </div>
                      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-yellow-400 to-amber-500" style={{ width: pct + "%" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-zinc-900/50 rounded-2xl p-6 border border-yellow-400/10">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2"><Server className="w-4 h-4 text-yellow-400" /> System health</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    ["API", "99.97%", "ok"],
                    ["DB Primary", "12ms", "ok"],
                    ["Search", "degraded", "warn"],
                    ["Emails", "normal", "ok"],
                  ].map(([name, val, st]) => (
                    <li key={name as string} className="flex items-center justify-between">
                      <span className="text-zinc-300">{name}</span>
                      <span className={`text-xs px-2 py-1 rounded ${st==="ok" ? "text-emerald-300 bg-emerald-400/10" : st==="warn" ? "text-yellow-300 bg-yellow-400/10" : "text-red-300 bg-red-400/10"}`}>{val}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-zinc-900/50 rounded-2xl p-6 border border-yellow-400/10">
              <h3 className="font-bold text-white mb-4">Recent activity</h3>
              <div className="space-y-3 text-sm">
                {activityLog.slice(0,5).map((log,i)=>(
                  <div key={i} className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${
                      log.sev==="error" ? "bg-red-400" : log.sev==="warn" ? "bg-yellow-400" : log.sev==="success" ? "bg-emerald-400" : "bg-zinc-600"
                    }`} />
                    <div className="flex-1 text-zinc-300">{log.action} <span className="text-zinc-500">– {log.detail}</span></div>
                    <div className="text-zinc-500 text-xs">{log.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* USERS */}
        {activeTab === "users" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} placeholder="Search users by name or email…" className="w-full pl-9 pr-3 py-2.5 bg-zinc-900/60 border border-yellow-400/10 rounded-xl text-sm text-white placeholder-zinc-500 focus:border-yellow-400/30" />
              </div>
              <button className="px-3 py-2.5 bg-zinc-900 border border-yellow-400/10 rounded-xl text-zinc-300 text-sm flex items-center gap-2"><Filter className="w-4 h-4" /> Filters</button>
              <button className="px-3 py-2.5 bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-xl text-sm font-semibold flex items-center gap-2"><Plus className="w-4 h-4" /> Invite</button>
            </div>
            <div className="bg-zinc-900/50 rounded-2xl border border-yellow-400/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-yellow-400/10 text-[11px] uppercase tracking-wider text-zinc-400">
                      <th className="text-left px-5 py-3">User</th>
                      <th className="text-left px-5 py-3">Role</th>
                      <th className="text-left px-5 py-3">Applications</th>
                      <th className="text-left px-5 py-3">Status</th>
                      <th className="text-left px-5 py-3">Last active</th>
                      <th className="text-left px-5 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map(u=>(
                      <tr key={u.id} className="border-b border-yellow-400/[0.06] hover:bg-yellow-400/[.03]">
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-yellow-400/10 rounded-lg flex items-center justify-center text-yellow-400 text-sm font-bold">{u.name.charAt(0)}</div>
                            <div>
                              <div className="text-white text-sm font-medium">{u.name}</div>
                              <div className="text-zinc-500 text-xs">{u.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-3 text-sm text-zinc-300">{u.role}</td>
                        <td className="px-5 py-3 text-sm text-yellow-300">{u.apps}</td>
                        <td className="px-5 py-3">{statusBadge(u.status)}</td>
                        <td className="px-5 py-3 text-sm text-zinc-400">{u.lastActive}</td>
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-2 text-zinc-400">
                            <button className="hover:text-white" title="View"><Eye className="w-4 h-4" /></button>
                            <button className="hover:text-white" title="Edit"><Edit3 className="w-4 h-4" /></button>
                            <button className="hover:text-white" title="Email"><Mail className="w-4 h-4" /></button>
                            <button
                              onClick={()=>toggleUserStatus(u.id)}
                              className={u.status==="active" ? "hover:text-red-400" : "hover:text-emerald-400"}
                              title={u.status==="active" ? "Suspend" : "Activate"}
                            >
                              {u.status==="active" ? <Ban className="w-4 h-4" /> : <UserCheck className="w-4 h-4" />}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* JOB MODERATION */}
        {activeTab === "jobs" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} placeholder="Search jobs or company…" className="w-full pl-9 pr-3 py-2.5 bg-zinc-900/60 border border-yellow-400/10 rounded-xl text-sm text-white placeholder-zinc-500 focus:border-yellow-400/30" />
              </div>
              <div className="text-xs text-zinc-400 flex items-center gap-3">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-yellow-400" /> {jobs.filter(j=>j.status==="pending").length} pending</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-400" /> {jobs.filter(j=>j.status==="flagged").length} flagged</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredJobs.map(j=>(
                <div key={j.id} className="bg-zinc-900/50 border border-yellow-400/10 rounded-2xl p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-white font-bold">{j.title}</h4>
                      <div className="text-sm text-zinc-400">{j.company} · {j.category} · {j.salary}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      {j.featured && <span className="px-2 py-1 bg-yellow-400/10 text-yellow-400 text-[10px] rounded font-bold">FEATURED</span>}
                      {statusBadge(j.status)}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">{j.applications} applications · {j.date}</span>
                    <div className="flex items-center gap-2">
                      {j.status !== "active" && (
                        <button onClick={()=>approveJob(j.id)} className="px-3 py-1.5 bg-emerald-500/10 text-emerald-300 rounded-lg text-xs font-semibold flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5" /> Approve</button>
                      )}
                      <button onClick={()=>toggleFeatureJob(j.id)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${j.featured ? "bg-zinc-800 text-zinc-300" : "bg-yellow-400/10 text-yellow-300"}`}>
                        {j.featured ? "Unfeature" : "Feature"}
                      </button>
                      <button className="p-1.5 hover:text-red-300 text-zinc-400"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* COMPANIES */}
        {activeTab === "companies" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {companiesAdmin.map(c=>(
                <div key={c.id} className="bg-zinc-900/50 border border-yellow-400/10 rounded-2xl p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-yellow-400/10 rounded-xl flex items-center justify-center text-yellow-400 font-bold">{c.name.charAt(0)}</div>
                      <div>
                        <div className="text-white font-semibold">{c.name}</div>
                        <div className="text-xs text-zinc-400">{c.plan} plan · {c.jobs} jobs</div>
                      </div>
                    </div>
                    {statusBadge(c.verified ? "active" : "pending")}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400">Monthly spend: <span className="text-yellow-300 font-semibold">{c.spend}</span></span>
                    <div className="flex items-center gap-2 text-zinc-400">
                      <button className="hover:text-white"><Eye className="w-4 h-4" /></button>
                      <button className="hover:text-white"><Edit3 className="w-4 h-4" /></button>
                      <button className="hover:text-white"><Mail className="w-4 h-4" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ANALYTICS */}
        {activeTab === "analytics" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {[
                ["Conversion (visit→apply)", "4.7%", "+0.4pp"],
                ["Time to first response", "1.6d", "-0.3d"],
                ["Interview rate", "23.1%", "+2.1pp"],
                ["Offer acceptance", "71%", "+3pp"],
                ["Avg apps / job", "38", "+6"],
                ["Churn (employers)", "2.1%", "-0.4pp"],
              ].map(([label, val, delta])=>{
                const up = !delta.includes("-") || delta.includes("+");
                return (
                  <div key={label as string} className="bg-zinc-900/50 border border-yellow-400/10 rounded-2xl p-5">
                    <div className="text-zinc-500 text-xs">{label}</div>
                    <div className="text-2xl font-black text-white mt-1">{val}</div>
                    <div className={`text-xs mt-2 ${up ? "text-emerald-400" : "text-red-400"}`}>{delta} vs last 30d</div>
                  </div>
                );
              })}
            </div>
            <div className="bg-zinc-900/50 border border-yellow-400/10 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Top job categories</h3>
              <div className="space-y-3">
                {[
                  ["IT / Engineering", 44],
                  ["Design", 21],
                  ["Marketing", 16],
                  ["Management", 12],
                  ["Other", 7],
                ].map(([cat, pct])=>(
                  <div key={cat as string}>
                    <div className="flex justify-between text-xs text-zinc-400 mb-1"><span>{cat}</span><span>{pct}%</span></div>
                    <div className="h-2 bg-black/60 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-yellow-400 to-amber-500" style={{ width: pct + "%" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* ACTIVITY */}
        {activeTab === "activity" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
            {activityLog.map((log, i)=>(
              <div key={i} className="bg-zinc-900/50 border border-yellow-400/10 rounded-xl p-4 flex items-center gap-4 text-sm">
                <span className={`w-2 h-2 rounded-full ${
                  log.sev==="error" ? "bg-red-400" : log.sev==="warn" ? "bg-yellow-400" : log.sev==="success" ? "bg-emerald-400" : "bg-zinc-600"
                }`} />
                <div className="flex-1 text-zinc-200">{log.action} <span className="text-zinc-500">— {log.detail}</span></div>
                <div className="text-zinc-500 text-xs">{log.time}</div>
                <ChevronRight className="w-4 h-4 text-zinc-600" />
              </div>
            ))}
          </motion.div>
        )}

        {/* SETTINGS */}
        {activeTab === "settings" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Platform config */}
            <div className="bg-zinc-900/50 border border-yellow-400/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4 text-white font-bold"><Lock className="w-4 h-4 text-yellow-400" /> Platform config</div>
              <div className="space-y-3 text-sm">
                {[
                  ["Maintenance mode", false],
                  ["Registration open", true],
                  ["Email verification required", true],
                  ["Auto job approval", false],
                ].map(([label, checked])=>(
                  <label key={label as string} className="flex items-center justify-between">
                    <span className="text-zinc-300">{label as string}</span>
                    <input type="checkbox" defaultChecked={checked as boolean} className="w-4 h-4 rounded bg-black border-yellow-400/30 text-yellow-400" />
                  </label>
                ))}
              </div>
            </div>
            {/* Integrations */}
            <div className="bg-zinc-900/50 border border-yellow-400/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4 text-white font-bold"><Globe className="w-4 h-4 text-yellow-400" /> Integrations</div>
              <div className="space-y-3 text-sm">
                {[
                  ["Stripe billing", true],
                  ["SendGrid email", true],
                  ["S3 storage", true],
                  ["Algolia search", false],
                ].map(([label, checked])=>(
                  <label key={label as string} className="flex items-center justify-between">
                    <span className="text-zinc-300">{label as string}</span>
                    <input type="checkbox" defaultChecked={checked as boolean} className="w-4 h-4 rounded bg-black border-yellow-400/30 text-yellow-400" />
                  </label>
                ))}
              </div>
            </div>
            {/* Security */}
            <div className="bg-zinc-900/50 border border-yellow-400/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4 text-white font-bold"><Shield className="w-4 h-4 text-yellow-400" /> Security</div>
              <div className="space-y-3 text-sm">
                {[
                  ["2FA for admins", true],
                  ["Rate limit API", true],
                  ["Audit log retention 90d", true],
                  ["IP allowlist", false],
                ].map(([label, checked])=>(
                  <label key={label as string} className="flex items-center justify-between">
                    <span className="text-zinc-300">{label as string}</span>
                    <input type="checkbox" defaultChecked={checked as boolean} className="w-4 h-4 rounded bg-black border-yellow-400/30 text-yellow-400" />
                  </label>
                ))}
              </div>
            </div>
            <div className="bg-zinc-900/50 border border-yellow-400/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4 text-white font-bold"><Database className="w-4 h-4 text-yellow-400" /> Data tools</div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <button className="py-2 bg-zinc-950 border border-yellow-400/15 rounded-lg text-zinc-300 hover:border-yellow-400/30">Export users</button>
                <button className="py-2 bg-zinc-950 border border-yellow-400/15 rounded-lg text-zinc-300 hover:border-yellow-400/30">Export jobs</button>
                <button className="py-2 bg-zinc-950 border border-yellow-400/15 rounded-lg text-zinc-300 hover:border-yellow-400/30">Run backup</button>
                <button className="py-2 bg-amber-500/10 border border-amber-400/30 rounded-lg text-amber-300">Clear cache</button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
