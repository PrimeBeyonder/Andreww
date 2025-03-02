"use client"

import type React from "react"

import { useRouter } from "next/navigation";
import { motion } from "framer-motion"
import { ArrowRight, Github, LinkIcon } from "lucide-react"
import Image from "next/image" // Changed import
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiDjango,
  SiVuedotjs,
  SiAngular,
  SiFirebase,
  SiDocker,
  SiExpress,
  SiNestjs,
} from "react-icons/si"

interface ProjectCardProps {
  project: {
    project_id: string
    project_title: string
    project_subtitle: string
    project_cover_img: string
    project_tech_stacks: string[]
    project_link?: string
    github_link?: string
    project_status: "Completed" | "In Progress"
    personal: boolean; // Added personal field
  }
}

const techStackIcons: { [key: string]: { icon: React.ElementType; color: string } } = {
  React: { icon: SiReact, color: "#61DAFB" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TailwindCSS: { icon: SiTailwindcss, color: "#06B6D4" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  PHP: { icon: SiPhp, color: "#777BB4" },
  Laravel: { icon: SiLaravel, color: "#FF2D20" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Python: { icon: SiPython, color: "#3776AB" },
  Django: { icon: SiDjango, color: "#092E20" },
  Vue: { icon: SiVuedotjs, color: "#4FC08D" },
  Angular: { icon: SiAngular, color: "#DD0031" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Express: { icon: SiExpress, color: "#000000" },
  NestJS: { icon: SiNestjs, color: "#E0234E" },
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -2,
      }}
      transition={{ duration: 0.1 }}
      className="flex flex-col bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 w-full border border-gray-100 dark:border-gray-800"
    >
      {/* Project Image with subtle zoom effect and gradient overlay */}
      <div className="w-full h-[160px] relative group overflow-hidden">
        <Image
          src={project.project_cover_img || "/placeholder.svg"}
          alt={project.project_title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="280px"
          priority={false}
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <motion.div
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1, scale: 1.05 }}
          className="absolute top-2 left-2"
        >
          <Badge
            variant={project.personal ? "outline" : "secondary"}
            className="bg-white/80 dark:bg-gray-900/80 text-[10px] font-medium backdrop-blur-sm border-opacity-50 shadow-sm"
          >
            {project.personal ? "Personal" : "Work"}
          </Badge>
        </motion.div>
      </div>

      {/* Project Details */}
      <div className="p-3.5 flex flex-col justify-between flex-1">
        <div className="space-y-2">
          {/* Title and Status Badge */}
          <div className="flex items-start justify-between">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 line-clamp-1">
              {project.project_title}
            </h3>
            <motion.div
            >
              <Badge
                variant={project.project_status === "Completed" ? "default" : "secondary"}
                className={`ml-1 scale-75 opacity-80 ${
                  project.project_status === "Completed"
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                }`}
              >
                {project.project_status}
              </Badge>
            </motion.div>
          </div>

          {/* Subtitle */}
          <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
            {project.project_subtitle}
          </p>

          {/* Tech Stack Icons with improved hover effects */}
          <TooltipProvider delayDuration={300}>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.project_tech_stacks.slice(0, 6).map((tech) => {
                const techStack = techStackIcons[tech]
                if (!techStack) return null

                const Icon = techStack.icon
                return (
                  <Tooltip key={tech}>
                    <TooltipTrigger asChild>
                      <motion.div
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="rounded-r-xl p-1 hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <Icon className="w-4 h-4 transition-colors duration-200" style={{ color: techStack.color }} />
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="text-xs px-2 py-1 shadow-md" sideOffset={5}>
                      <p>{tech}</p>
                    </TooltipContent>
                  </Tooltip>
                )
              })}
            </div>
          </TooltipProvider>
        </div>

        {/* Links and Detail Button with improved hover states */}
        <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100 dark:border-gray-800">
          <div className="flex gap-2 text-xs text-gray-600 dark:text-gray-400">
            {project.project_link && (
              <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={project.project_link}
                  className="flex items-center gap-1 hover:text-gray-900 dark:hover:text-gray-200 transition-all group"
                  target="_blank"
                >
                  <LinkIcon className="w-3 h-3 group-hover:rotate-12 transition-transform" />
                  <span className="text-[10px] font-medium group-hover:underline">Demo</span>
                </Link>
              </motion.div>
            )}
            {project.github_link && (
              <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={project.github_link}
                  className="flex items-center gap-1 hover:text-gray-900 dark:hover:text-gray-200 transition-all group"
                  target="_blank"
                >
                  <Github className="w-3 h-3 group-hover:rotate-12 transition-transform" />
                  <span className="text-[10px] font-medium group-hover:underline">Source</span>
                </Link>
              </motion.div>
            )}
          </div>

          <motion.button
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800"
            aria-label="View details"
            onClick={() => router.push(`/projects/${project.project_id}`)}
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

