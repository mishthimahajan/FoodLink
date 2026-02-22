import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  GitCommit,
  Users,
  Star,
  GitFork,
  Search,
  Crown,
  Medal,
  Award,
  ArrowUpRight,
  Sparkles,
  Trophy,
} from "lucide-react";

/* ===================== CONFIG ===================== */

const REPO_OWNER = "mishthimahajan";
const REPO_NAME = "FoodLink";
const GITHUB_API = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`;

/* ===================== HELPERS ===================== */

const cardVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

function getRankBadge(rank) {
  if (rank === 1)
    return { icon: <Crown size={16} />, label: "Top Contributor" };
  if (rank === 2)
    return { icon: <Medal size={16} />, label: "2nd Place" };
  if (rank === 3)
    return { icon: <Award size={16} />, label: "3rd Place" };
  return null;
}

/* ===================== COMPONENTS ===================== */

function StatCard({ icon, label, value }) {
  return (
    <motion.div
      variants={cardVariant}
      className="p-4 rounded-xl bg-white/90 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center rounded-md bg-indigo-50 text-indigo-600">{icon}</div>
        <div>
          <p className="text-xl font-bold text-gray-700">{value}</p>
          <p className="text-xs text-gray-500">{label}</p>
        </div>
      </div>
    </motion.div>
  );
}

function TopContributorCard({ contributor, rank }) {
  const badge = getRankBadge(rank);

  return (
    <motion.a
      href={contributor.html_url}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariant}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(2,6,23,0.2)" }}
      className="p-6 bg-white/90 rounded-2xl shadow text-center text-gray-700 transition-transform"
    >
      {badge && (
        <div className="flex justify-center gap-2 text-sm mb-3 text-indigo-600">
          <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs">{badge.icon} {badge.label}</span>
        </div>
      )}

      <img
        src={contributor.avatar_url}
        alt={contributor.login}
        className="w-20 h-20 rounded-full mx-auto mb-3 ring-4 ring-white/80 shadow-md object-cover"
      />

      <h3 className="font-bold text-indigo-700">{contributor.login}</h3>

      <div className="flex justify-center gap-1 text-sm text-gray-600 mt-1 items-center">
        <GitCommit size={14} />
        <span>{contributor.contributions} commits</span>
      </div>

      <div className="flex justify-center gap-1 text-xs text-indigo-600 mt-3">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-50">View Profile <ArrowUpRight size={12} /></span>
      </div>
    </motion.a>
  );
}

function ContributorCard({ contributor, rank }) {
  return (
    <motion.a
      href={contributor.html_url}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariant}
      whileHover={{ y: -3 }}
      className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-gray-700 z-10"
    >
      <span className="text-indigo-600 font-bold w-6">#{rank}</span>

      <img
        src={contributor.avatar_url}
        alt={contributor.login}
        className="w-10 h-10 rounded-full ring-4 ring-white/80 shadow-sm object-cover"
      />

      <div className="flex-1">
        <p className="font-semibold text-indigo-700">{contributor.login}</p>
        <div className="flex gap-1 text-xs text-gray-600 items-center">
          <GitCommit size={12} />
          <span>{contributor.contributions}</span>
        </div>
      </div>

      <ExternalLink size={16} />
    </motion.a>
  );
}

 const styles = {
    container: {
      width: "100vw",
      minHeight: "100vh",
      padding: "80px 20px 60px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      boxSizing: "border-box",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Poppins', sans-serif",
    },

    backgroundShapes: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
      overflow: "hidden",
    },

    shape1: {
      position: "absolute",
      top: "15%",
      right: "10%",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #ff6b6b, #feca57)",
      opacity: 0.1,
      animation: "float 8s ease-in-out infinite",
    },

    shape2: {
      position: "absolute",
      bottom: "20%",
      left: "5%",
      width: "250px",
      height: "250px",
      borderRadius: "30px",
      background: "linear-gradient(45deg, #48cae4, #023e8a)",
      opacity: 0.1,
      animation: "float 6s ease-in-out infinite reverse",
      transform: "rotate(45deg)",
    },

    contentWrapper: {
      position: "relative",
      zIndex: 1,
      maxWidth: "1400px",
      margin: "0 auto",
      transition: "all 0.8s ease",
    },
  };
/* ===================== MAIN PAGE ===================== */

export default function Contributor() {
  const [contributors, setContributors] = useState([]);
  const [repoData, setRepoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [contribRes, repoRes] = await Promise.all([
          fetch(`${GITHUB_API}/contributors?per_page=100`),
          fetch(GITHUB_API),
        ]);

        const contribData = await contribRes.json();
        const repo = await repoRes.json();

        setContributors(
          contribData.filter(
            (c) => c.login && !c.login.includes("[bot]")
          )
        );

        setRepoData({
          stars: repo.stargazers_count || 0,
          forks: repo.forks_count || 0,
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalCommits = useMemo(() => {
    return contributors.reduce((sum, c) => sum + c.contributions, 0);
  }, [contributors]);

  const filtered = useMemo(() => {
    if (!searchQuery) return contributors;
    return contributors.filter((c) =>
      c.login.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [contributors, searchQuery]);

  const topThree = filtered.slice(0, 3);
  const rest = filtered.slice(3);

  return (
 <div style={styles.container}>
     {/* Background Shapes */}
        <div style={styles.backgroundShapes}>
          <div style={styles.shape1}></div>
          <div style={styles.shape2}></div>
        </div>
    <div className="min-h-screen  p-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10 ">
          Our Contributors
        </h1>

        {loading && <p className="text-center">Loading...</p>}

        {!loading && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <StatCard icon={<Users />} label="Contributors" value={contributors.length} />
              <StatCard icon={<GitCommit />} label="Commits" value={totalCommits} />
              <StatCard icon={<Star />} label="Stars" value={repoData?.stars} />
              <StatCard icon={<GitFork />} label="Forks" value={repoData?.forks} />
            </div>

            {/* Search */}
            <div className="mb-8 max-w-md mx-auto relative">
              <Search size={16} className="absolute left-3 top-3 text-white/70" />
              <input
                type="text"
                placeholder="Search contributors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 border rounded-full bg-white/10 placeholder-gray-200 text-white/90 backdrop-blur-sm"
              />
            </div>

            {/* Top 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {topThree.map((c, i) => (
                <TopContributorCard key={c.login} contributor={c} rank={i + 1} />
              ))}
            </div>

            {/* Rest */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {rest.map((c, i) => (
                <ContributorCard key={c.login} contributor={c} rank={i + 4} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
    </div>
  );
}