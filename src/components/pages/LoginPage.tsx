import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles } from "lucide-react";
import { useStore } from "@/store";

interface LoginPageProps {
  onNavigate: (page: string) => void;
}

export default function LoginPage({ onNavigate }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setUser } = useStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (email === "admin@bullom.com") {
        setUser({
          id: "1",
          email,
          name: "Admin User",
          role: "admin",
          created_at: new Date().toISOString(),
        });
        onNavigate("admin");
      } else {
        setUser({
          id: "2",
          email,
          name: email.split("@")[0],
          role: "job_seeker",
          created_at: new Date().toISOString(),
        });
        onNavigate("dashboard");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px]" />
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
            <h1 className="text-3xl font-black text-white mb-2">Welcome Back</h1>
            <p className="text-zinc-400">Sign in to your account to continue</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 bg-zinc-900/60 border border-yellow-400/10 rounded-xl text-white placeholder-zinc-500 focus:border-yellow-400/30 transition-colors"
                  required
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3.5 bg-zinc-900/60 border border-yellow-400/10 rounded-xl text-white placeholder-zinc-500 focus:border-yellow-400/30 transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-yellow-400/30 bg-zinc-900 text-yellow-400 focus:ring-yellow-400/30"
                />
                <span className="text-sm text-zinc-400">Remember me</span>
              </label>
              <button
                type="button"
                className="text-sm text-yellow-400 hover:text-yellow-300"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3.5 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-yellow-400/20 transition-all disabled:opacity-60"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              ) : (
                <>
                  Sign In <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Demo hint */}
          <div className="bg-zinc-900/40 rounded-xl border border-yellow-400/10 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-xs font-semibold text-yellow-400">Demo Accounts</span>
            </div>
            <div className="text-xs text-zinc-400 space-y-1">
              <p><span className="text-zinc-300">Admin:</span> admin@bullom.com</p>
              <p><span className="text-zinc-300">User:</span> any other email</p>
              <p className="text-zinc-500">Use any password</p>
            </div>
          </div>

          {/* Register link */}
          <p className="text-center text-zinc-400 text-sm">
            Don't have an account?{" "}
            <button
              onClick={() => onNavigate("register")}
              className="text-yellow-400 font-semibold hover:text-yellow-300"
            >
              Sign Up
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
