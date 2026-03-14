"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  techStack: string[];
  clientOrigin: "indian" | "foreign";
  liveUrl: string;
  featured?: boolean;
  image?: string;
  problem?: string;
  solution?: string;
  result?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack online marketplace with payment integration",
    category: "E-commerce",
    techStack: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    clientOrigin: "foreign",
    liveUrl: "https://example.com",
    featured: true,
    problem: "Client needed a scalable e-commerce solution to handle 10,000+ daily visitors",
    solution: "Built a performant marketplace with optimized checkout flow and inventory management",
    result: "300% increase in conversions, 99.9% uptime, handling 50K+ daily visitors"
  },
  {
    id: "2", 
    title: "SaaS Dashboard",
    description: "Analytics dashboard for business intelligence",
    category: "SaaS",
    techStack: ["React", "Node.js", "MongoDB", "Chart.js"],
    clientOrigin: "indian",
    liveUrl: "https://example.com",
    problem: "Business needed real-time analytics for decision making",
    solution: "Created interactive dashboards with custom reporting features",
    result: "Reduced reporting time by 80%, improved data-driven decisions"
  },
  {
    id: "3",
    title: "Food Delivery App",
    description: "Mobile-first food ordering platform",
    category: "Mobile Apps", 
    techStack: ["React Native", "Firebase", "Google Maps API"],
    clientOrigin: "indian",
    liveUrl: "https://example.com",
    problem: "Restaurant chain needed digital ordering solution",
    solution: "Built user-friendly app with real-time order tracking",
    result: "25% increase in orders, 4.8-star rating from users"
  },
  {
    id: "4",
    title: "Real Estate Portal",
    description: "Property listing and management system",
    category: "Web Apps",
    techStack: ["Vue.js", "Laravel", "MySQL", "AWS"],
    clientOrigin: "foreign", 
    liveUrl: "https://example.com",
    problem: "Real estate agency needed modern property management",
    solution: "Developed comprehensive portal with virtual tours",
    result: "40% faster property listings, improved client satisfaction"
  },
  {
    id: "5",
    title: "Healthcare Management",
    description: "Patient management system for clinics",
    category: "SaaS",
    techStack: ["Angular", "Spring Boot", "PostgreSQL"],
    clientOrigin: "indian",
    liveUrl: "https://example.com",
    problem: "Clinic needed digital patient record management",
    solution: "Built HIPAA-compliant system with appointment scheduling",
    result: "60% reduction in paperwork, improved patient care"
  },
  {
    id: "6",
    title: "Learning Platform",
    description: "Online education portal with video streaming",
    category: "Web Apps",
    techStack: ["Next.js", "AWS", "Mux", "Prisma"],
    clientOrigin: "foreign",
    liveUrl: "https://example.com",
    problem: "Education company needed scalable learning platform",
    solution: "Created platform with video streaming and progress tracking",
    result: "10,000+ active students, 95% course completion rate"
  }
];

const categories = ["All", "Web Apps", "Mobile Apps", "E-commerce", "SaaS", "Foreign Projects"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const filteredProjects = projects.filter(project => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Foreign Projects") return project.clientOrigin === "foreign";
    return project.category === selectedCategory;
  });

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <section id="portfolio" className="py-16 bg-white dark:bg-gray-dark md:py-20 lg:py-24">
        <div className="container">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
              Work That Speaks for Itself
            </h2>
            <p className="mx-auto max-w-[600px] text-base text-body-color dark:text-body-color-dark sm:text-lg">
              Projects delivered for clients across India and internationally
            </p>
          </div>

          {/* Social Proof Bar */}
          <div className="mb-12 rounded-lg bg-gray-50 p-6 text-center dark:bg-gray-800">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-body-color dark:text-body-color-dark sm:gap-8 sm:text-base">
              <span>20+ Projects</span>
              <span>🌍 Foreign Clients</span>
              <span>🇮🇳 Indian Clients</span>
              <span>⭐ 5.0 Rating</span>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-sm px-4 py-2 text-sm font-medium transition-all duration-300 sm:px-6 sm:text-base ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-body-color hover:bg-gray-200 dark:bg-gray-800 dark:text-body-color-dark dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-dark"
              >
                <div className="mb-4">
                  <div className="relative h-40 w-full overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 dark:from-primary/10 dark:to-primary/5">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary/50">Preview</span>
                    </div>
                    <div className="absolute top-2 right-2">
                      <span className="rounded-full bg-white px-2 py-1 text-xs font-medium shadow dark:bg-gray-dark">
                        {project.clientOrigin === "foreign" ? "🌍" : "🇮🇳"}
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="mb-3 text-sm text-body-color dark:text-body-color-dark">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-1">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm bg-gray-100 px-2 py-1 text-xs font-medium text-body-color dark:bg-gray-800 dark:text-body-color-dark"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="rounded-sm bg-gray-100 px-2 py-1 text-xs font-medium text-body-color dark:bg-gray-800 dark:text-body-color-dark">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-sm bg-primary px-3 py-2 text-center text-xs font-semibold text-white duration-300 ease-in-out hover:bg-primary/90"
                  >
                    🔗 Live
                  </Link>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 rounded-sm border border-primary bg-transparent px-3 py-2 text-center text-xs font-semibold text-primary duration-300 ease-in-out hover:bg-primary hover:text-white"
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <div className="flex items-center space-x-2">
                {/* Previous Button */}
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800"
                      : "bg-gray-100 text-body-color hover:bg-gray-200 dark:bg-gray-800 dark:text-body-color-dark dark:hover:bg-gray-700"
                  }`}
                >
                  ← Previous
                </button>

                {/* Page Numbers */}
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      currentPage === index + 1
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-body-color hover:bg-gray-200 dark:bg-gray-800 dark:text-body-color-dark dark:hover:bg-gray-700"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                {/* Next Button */}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    currentPage === totalPages
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800"
                      : "bg-gray-100 text-body-color hover:bg-gray-200 dark:bg-gray-800 dark:text-body-color-dark dark:hover:bg-gray-700"
                  }`}
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {/* Client Countries Strip */}
          <div className="mt-16 rounded-lg bg-gray-50 p-6 text-center dark:bg-gray-800">
            <p className="text-sm font-medium text-body-color dark:text-body-color-dark sm:text-base">
              Clients from: 🇺🇸 USA  🇬🇧 UK  🇦🇺 Australia  🇮🇳 India  🇦🇪 UAE
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <h3 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl">
              Like what you see? Let&apos;s build yours.
            </h3>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="https://calendar.app.google/BSq3ewGPyAiYNQKn6"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-primary px-8 py-4 text-base font-bold text-white duration-300 ease-in-out hover:bg-primary/90 hover:shadow-lg"
              >
                📅 Book Free Demo
              </Link>
              <Link
                href="https://wa.me/917470668602?text=Hi%20CodeCEF%2C%20I%20want%20to%20discuss%20my%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:shadow-lg"
                style={{ backgroundColor: '#25D366' }}
              >
                💬 WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-w-2xl rounded-2xl bg-white p-8 dark:bg-gray-dark"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-black dark:text-white">
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-sm p-2 text-body-color hover:bg-gray-100 dark:text-body-color-dark dark:hover:bg-gray-800"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-6 space-y-4">
              <div>
                <h4 className="mb-2 font-semibold text-black dark:text-white">Problem</h4>
                <p className="text-body-color dark:text-body-color-dark">
                  {selectedProject.problem}
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-black dark:text-white">Solution</h4>
                <p className="text-body-color dark:text-body-color-dark">
                  {selectedProject.solution}
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-black dark:text-white">Result</h4>
                <p className="text-body-color dark:text-body-color-dark">
                  {selectedProject.result}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Link
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-sm bg-primary px-6 py-3 text-center text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/90"
              >
                🔗 Live Site
              </Link>
              <button
                onClick={() => setSelectedProject(null)}
                className="flex-1 rounded-sm border border-primary bg-transparent px-6 py-3 text-center text-base font-semibold text-primary duration-300 ease-in-out hover:bg-primary hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
