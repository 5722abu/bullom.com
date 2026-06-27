import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Star,
  Bell,
  Settings,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  TrendingUp,
  Calendar,
} from "lucide-react";
import { useStore } from "@/store";

export default function DashboardPage() {
  const { user } = useStore();
  const [activeTab, setActiveTab] = useState("overview");

  const applications = [
    { id: 1, title: "Senior React Developer", company: "TechCorp Inc.", status: "reviewing", date: "Mar 12, 2026", location: "San Francisco, CA" },
    { id: 2, title: "Product Manager", company: "Innovation Labs", status: "interview", date: "Mar 10, 2026", location: "New York, NY" },
    { id: 3, title: "UX/UI Designer", company: "Creative Studios", status: "applied", date: "Mar 8, 2026", location: "Remote" },
    { id: 4, title: "Full Stack Engineer", company: "CloudTech Solutions", status: "rejected", date: "Mar 5, 2026", location: "Austin, TX" },
    { id: 5, title: "Data Scientist", company: "DataFlow Inc.", status: "offer", date: "Mar 3, 2026", location: "Chicago, IL" },
  ];

  const savedJobs = [
    { id: 1, title: "Frontend Engineer", company: "Netflix", salary: "$150-200K", location: "Remote" },
    { id: 2, title: "Backend Developer", company: "Stripe", salary: "$160-210K", location: "San Francisco, CA" },
    { id: 3, title: "Mobile Developer", company: "Airbnb", salary: "$140-180K", location: "New York, NY" },
  ];

  const notifications = [
    { id: 1, text: "TechCorp Inc. viewed your application", time: "2 hours ago", read: false },
    { id: 2, text: "Innovation Labs invited you for an interview", time: "1 day ago", read: false },
    { id: 3, text: "DataFlow Inc. sent you an offer", time: "2 days ago", read: true },
    { id: 4, text: "Your profile was viewed 15 times this week", time: "3 days ago", read: true },
  ];

  const stats = [
    { label: "Applications", value: "12", icon: FileText, change: "+3 this week" },
    { label: "Interviews", value: "4", icon: Calendar, change: "+1 this week" },
    { label: "Profile Views", value: "89", icon: Eye, change: "+23 this week" },
    { label: "Saved Jobs", value: "7", icon: Star, change: "+2 this week" },
  ];

  const statusColors: Record<string, { bg: string; text: string; label: string }> = {
    applied: { bg: "bg-blue-400/10", text: "text-blue-400", label: "Applied" },
    reviewing: { bg: "bg-yellow-400/10", text: "text-yellow-400", label: "Under Review" },
    interview: { bg: "bg-purple-400/10", text: "text-purple-400", label: "Interview" },
    offer: { bg: "bg-green-400/10", text: "text-green-400", label: "Offer" },
    rejected: { bg: "bg-red-400/10", text: "text-red-400", label: "Rejected" },
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: TrendingUp },
    { id: "applications", label: "Applications", icon: FileText },
    { id: "saved", label: "Saved Jobs", icon: Star },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-yellow-400/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center text-black font-extrabold text-2xl shadow-lg shadow-yellow-400/20">
                {user?.name?.charAt(0) || "U"}
              </div>
              <div>
                <h1 className="text-2xl font-black text-white">
                  Welcome back, {user?.name || "User"}!
                </h1>
                <p className="text-zinc-400 text-sm">
                  {user?.email || "user@example.com"} · Job Seeker
                </p>
              </div>
            </div>
            <button className="px-4 py-2 bg-zinc-900/60 border border-yellow-400/10 rounded-xl text-zinc-300 text-sm hover:border-yellow-400/30 transition-colors flex items-center gap-2">
              <Settings className="w-4 h-4" /> Settings
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Tabs */}
        <div className="flex gap-1 mb-8 overflow-x-auto pb-2 border-b border-yellow-400/10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "text-yellow-400 bg-yellow-400/5 border-b-2 border-yellow-400"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
              {tab.id === "notifications" && (
                <span className="w-5 h-5 bg-yellow-400 text-black text-xs font-bold rounded-full flex items-center justify-center">
                  {notifications.filter((n) => !n.read).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Overview */}
        {activeTab === "overview" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-zinc-900/60 rounded-2xl p-6 border border-yellow-400/10 hover:border-yellow-400/20 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 bg-yellow-400/10 rounded-xl flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-yellow-400" />
                    </div>
                    <span className="text-xs text-green-400 font-medium">{stat.change}</span>
                  </div>
                  <p className="text-3xl font-black text-white">{stat.value}</p>
                  <p className="text-zinc-500 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Recent Applications */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Recent Applications</h2>
              <div className="space-y-3">
                {applications.slice(0, 3).map((app) => (
                  <div
                    key={app.id}
                    className="bg-zinc-900/60 rounded-xl p-5 border border-yellow-400/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-yellow-400/10 rounded-xl flex items-center justify-center text-yellow-400 font-bold text-sm flex-shrink-0">
                        {app.company.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-sm">{app.title}</h3>
                        <p className="text-zinc-400 text-xs">{app.company} · {app.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="text-xs text-zinc-500">{app.date}</span>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-lg ${statusColors[app.status].bg} ${statusColors[app.status].text}`}>
                        {statusColors[app.status].label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Applications Tab */}
        {activeTab === "applications" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
            {applications.map((app) => (
              <div
                key={app.id}
                className="bg-zinc-900/60 rounded-xl p-5 border border-yellow-400/10 hover:border-yellow-400/20 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center text-yellow-400 font-bold flex-shrink-0">
                      {app.company.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{app.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-zinc-400 mt-1">
                        <span>{app.company}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {app.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {app.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5 ${statusColors[app.status].bg} ${statusColors[app.status].text}`}>
                    {app.status === "offer" && <CheckCircle className="w-3.5 h-3.5" />}
                    {app.status === "rejected" && <XCircle className="w-3.5 h-3.5" />}
                    {statusColors[app.status].label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Saved Jobs Tab */}
        {activeTab === "saved" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
            {savedJobs.map((job) => (
              <div
                key={job.id}
                className="bg-zinc-900/60 rounded-xl p-5 border border-yellow-400/10 hover:border-yellow-400/20 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center text-yellow-400 font-bold flex-shrink-0">
                    {job.company.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{job.title}</h3>
                    <p className="text-zinc-400 text-sm">{job.company} · {job.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400 font-semibold text-sm">{job.salary}</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold rounded-lg text-sm">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Notifications Tab */}
        {activeTab === "notifications" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className={`bg-zinc-900/60 rounded-xl p-5 border transition-colors flex items-start gap-4 ${
                  notif.read
                    ? "border-yellow-400/5"
                    : "border-yellow-400/20 bg-yellow-400/[0.02]"
                }`}
              >
                <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${notif.read ? "bg-zinc-700" : "bg-yellow-400"}`} />
                <div className="flex-1">
                  <p className={`text-sm ${notif.read ? "text-zinc-400" : "text-white"}`}>
                    {notif.text}
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">{notif.time}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
