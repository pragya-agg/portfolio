import { AboutHero } from '@/components/about-hero'
import { Skills } from '@/components/skills'
import { Education } from '@/components/education'
import { Values } from '@/components/values'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <AboutHero />
      <Skills />
      <Education />
      <Values />
    </div>
  )
}
