import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";

interface NotFoundPageProps {
  onNavigate: (page: string) => void;
}

export default function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <div className="min-h-[80vh] bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-yellow-400/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="text-[150px] md:text-[200px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-yellow-400/30 to-yellow-400/5 select-none">
            404
          </div>
          <div className="-mt-16 relative z-10">
            <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
              Page Not Found
            </h1>
            <p className="text-zinc-400 max-w-md mx-auto mb-8">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate("home")}
                className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-yellow-400/20"
              >
                <Home className="w-5 h-5" /> Back to Home
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate("jobs")}
                className="px-6 py-3 border-2 border-yellow-400/30 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-400/5 transition-colors"
              >
                <Search className="w-5 h-5" /> Browse Jobs
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
