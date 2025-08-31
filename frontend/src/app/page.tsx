import { Hero } from '@/components/hero'
import { FeaturedProjects } from '@/components/featured-projects'
import { TechStack } from '@/components/tech-stack'
import { CallToAction } from '@/components/call-to-action'

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
