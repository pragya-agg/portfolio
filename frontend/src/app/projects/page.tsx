import { ProjectsGrid } from '@/components/projects-grid'
import { ProjectFilters } from '@/components/project-filters'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, 
            from simple web applications to complex enterprise solutions.
          </p>
        </div>

        <ProjectFilters />
        <ProjectsGrid />
      </div>
    </div>
  )
}
