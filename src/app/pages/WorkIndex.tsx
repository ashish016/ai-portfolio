import { projects } from '../../data/site'
import { Lines, Reveal } from '../components/motion'
import { WorkCard } from '../components/WorkCard'

export function WorkIndex() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
      <div className="flex items-end justify-between gap-6">
        <Lines as="h1" className="font-display text-[42px] sm:text-[60px]" lines={['Selected work']} />
        <Reveal className="hidden text-right text-[14px] text-muted sm:block">{projects.length} projects</Reveal>
      </div>
      <div className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:gap-x-8 lg:gap-y-20">
        {projects.map((project, index) => (
          <WorkCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}