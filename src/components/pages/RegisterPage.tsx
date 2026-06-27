import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Briefcase, Users } from "lucide-react";
import { useStore } from "@/store";

interface RegisterPageProps {
  onNavigate: (page: string) => void;
}

export default function RegisterPage({ onNavigate }: RegisterPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "job_seeker" as "job_seeker" | "employer",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setUser } = useStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) return;
    setLoading(true);
    setTimeout(() => {
      setUser({
        id: "3",
        email: formData.email,
        name: formData.name,
        role: formData.role,
        created_at: new Date().toISOString(),
      });
      onNavigate("dashboard");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden py-12">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(250,204,21,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative w-full max-w-md mx-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Logo */}
          <div className="text-center">
            <button
              onClick={() => onNavigate("home")}
              className="inline-flex items-center gap-2.5 font-bold text-2xl text-white mb-6"
            >
              <div className="w-11 h-11 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center text-black font-extrabold text-lg shadow-lg shadow-yellow-400/20">
                B
              </div>
              BULLOM <span className="text-yellow-400">GROUP</span>
            </button>
            <h1 className="text-3xl font-black text-white mb-2">Create Account</h1>
            <p className="text-zinc-400">Join BULLOM and start your journey</p>
          </div>

          {/* Role Selector */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, role: "job_seeker" })}
              className={`p-4 rounded-xl border text-center transition-all ${
                formData.role === "job_seeker"
                  ? "bg-yellow-400/10 border-yellow-400/40 text-yellow-400"
                  : "bg-zinc-900/60 border-yellow-400/10 text-zinc-400 hover:border-yellow-400/20"
              }`}
            >
              <Briefcase className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-semibold">Job Seeker</span>
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, role: "employer" })}
              className={`p-4 rounded-xl border text-center transition-all ${
                formData.role === "employer"
                  ? "bg-yellow-400/10 border-yellow-400/40 text-yellow-400"
                  : "bg-zinc-900/60 border-yellow-400/10 text-zinc-400 hover:border-yellow-400/20"
              }`}
            >
              <Users className="w-6 h-6 mx-auto mb-2" />
              <span className="text-sm font-semibold">Employer</span>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
              <input
                type="text"
                placeholder="Full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full pl-12 pr-4 py-3.5 bg-zinc-900/60 border border-yellow-400/10 rounded-xl text-white placeholder-zinc-500 focus:border-yellow-400/30 transition-colors"
                required
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
              <input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full pl-12 pr-4 py-3.5 bg-zinc-900/60 border border-yellow-400/10 rounded-xl text-white placeholder-zinc-500 focus:border-yellow-400/30 transition-colors"
                required
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full pl-12 pr-12 py-3.5 bg-zinc-900/60 border border-yellow-400/10 rounded-xl text-white placeholder-zinc-500 focus:border-yellow-400/30 transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className="w-full pl-12 pr-4 py-3.5 bg-zinc-900/60 border border-yellow-400/10 rounded-xl text-white placeholder-zinc-500 focus:border-yellow-400/30 transition-colors"
                required
              />
            </div>

            {formData.password &&
              formData.confirmPassword &&
              formData.password !== formData.confirmPassword && (
                <p className="text-red-400 text-sm">Passwords do not match</p>
              )}

            <div className="pt-2">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-yellow-400/30 bg-zinc-900 text-yellow-400 mt-0.5"
                  required
                />
                <span className="text-sm text-zinc-400">
                  I agree to the{" "}
                  <span className="text-yellow-400">Terms of Service</span> and{" "}
                  <span className="text-yellow-400">Privacy Policy</span>
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading || (formData.password !== formData.confirmPassword && formData.confirmPassword.length > 0)}
              className="w-full px-6 py-3.5 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-yellow-400/20 transition-all disabled:opacity-60"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              ) : (
                <>
                  Create Account <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Login link */}
          <p className="text-center text-zinc-400 text-sm">
            Already have an account?{" "}
            <button
              onClick={() => onNavigate("login")}
              className="text-yellow-400 font-semibold hover:text-yellow-300"
            >
              Sign In
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
