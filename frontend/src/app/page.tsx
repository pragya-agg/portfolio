import { Hero } from '@/components/hero'
import { FeaturedProjects } from '@/components/featured-projects'
import { TechStack } from '@/components/tech-stack'
import { CallToAction } from '@/components/call-to-action'

// Updated: Theme toggle functionality fixed

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <CallToAction />
    </>
  )
}
