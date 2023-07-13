import { Sidebar } from '@/components/Sidebar'
import { Projects } from '@/components/Projects'
export default function Home() {
  return (
    <main className="bg-background-color flex flex-column h-full text-text-color">
      <Sidebar />
      <Projects />
    </main>
  )
}
