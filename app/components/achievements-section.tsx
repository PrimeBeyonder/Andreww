"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AchievementCard } from "./achievement-card";
import { Space_Grotesk } from "next/font/google"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], display: "swap" })


// Mock data for achievements
export const achievementsData = [
  {
    id: 1,
    title: "Professional Web Developer Certificate (Fairway Tech)",
    type: "Certification",
    date: new Date("2024-01-01"), // Adjust if you have an exact date
    description:
      "Awarded by Fairway Tech for advanced proficiency in web development using PHP and JavaScript. Emphasized building scalable applications with best practices and hands-on projects.",
    category: "Certification",
  },
  {
    id: 2,
    title: "ExamPlus Mini App Launch Ahead of Schedule",
    type: "Project Milestone",
    date: new Date("2024-12-22"), // Example date; adjust as needed
    description:
      "Collaborated with the KBZ QA team to fix bugs promptly, introduced a coupon business model, and successfully launched the ExamPlus Mini App two days before the deadline.",
    category: "Development",
  },
  {
    id: 3,
    title: "NCC Computing Level 4",
    type: "Certification",
    date: new Date("2024-01-15"), // Example date
    description:
      "Completed an advanced computing curriculum, focusing on software development fundamentals, problem-solving techniques, and industry-relevant practices.",
    category: "Certification",
  },
  {
    id: 4,
    title: "JLPT N3 Pass",
    type: "Language Proficiency",
    date: new Date("2023-12-06"), // Example date
    description:
      "Successfully passed the Japanese Language Proficiency Test (N3), demonstrating intermediate Japanese skills and facilitating collaboration with Japanese-speaking stakeholders.",
    category: "Language",
  },
  {
    id: 5,
    title: "Led the Development of Two CMS Websites",
    type: "Project Leadership",
    date: new Date("2024-10-01"), // Example date
    description:
      "Designed and developed two CMS websites with user-friendly interfaces and secure authentication systems, improving content management efficiency for clients.",
    category: "Development",
  },
  {
    id: 6,
    title: "MerryMarry Wedding System Development",
    type: "Project Achievement",
    date: new Date("2025-02-10"), // Example date
    description:
      "Developed the MerryMarry Wedding System from concept to launch, ensuring seamless user experience and robust functionality for wedding planning and booking.",
    category: "Development",
  },
  {
    id: 7,
    title: "Enhanced Shwe Min Lab System",
    type: "Technical Contribution",
    date: new Date("2025-3-05"), // Example date
    description:
      "Improved the UI and implemented new backend APIs for flexible pricing plans, including Excel input/export features, making lab system management more efficient.",
    category: "Development",
  }
];


export function AchievementsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Filter achievements based on selected category
  const filteredAchievements = selectedCategory
    ? achievementsData.filter(a => a.category.toLowerCase() === selectedCategory.toLowerCase())
    : achievementsData;
    
  // Get unique categories
  const categories = Array.from(new Set(achievementsData.map(a => a.category)));
  
  return (
    <section className="py-12" id="achievements">
      <motion.div
        className="mb-8"
      >
        <h2 className={`${spaceGrotesk.className} text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4`}>Achievements</h2>
       
        <motion.div 
          className="h-px bg-gradient-to-r from-slate-200 via-slate-400 to-slate-200 dark:from-slate-800 dark:via-slate-600 dark:to-slate-800"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </motion.div>
      
      {/* Category filters with subtle animations */}
      <div className="flex flex-wrap gap-2 mb-8">
        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setSelectedCategory(null)}
          className={`px-3 py-1 text-sm rounded-md transition-all ${
            selectedCategory === null 
              ? "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200" 
              : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
          }`}
        >
          All
        </motion.button>
        
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 text-sm rounded-md transition-all ${
              selectedCategory === category 
                ? "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200" 
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>
      
      {/* Achievement cards grid - 1 column on mobile, 2 columns on md and up */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence>
          {filteredAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <AchievementCard achievement={achievement} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {/* Empty state */}
      {filteredAchievements.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-gray-500 dark:text-gray-400"
        >
          No achievements found in this category.
        </motion.div>
      )}
    </section>
  );
}
