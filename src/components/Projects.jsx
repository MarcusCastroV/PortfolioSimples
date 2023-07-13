'use client'
import { Card } from './Card'
import { RecentProjects } from './RecentProjects'
export const Projects = () => {
  return (
    <div className='pl-5 w-9/12 '>
      <Card
        h='h-20'
        w='w-[97%]'
        flexDir='flex-row'
        justify='justify-between'
        align='items-center'
        px='px-5'
      >
        <h1 className='text-lg'> Projetos Recentes</h1>
        <a
          className='transition ease-in-out delay-100 hover:text-white '
          href='https://github.com/MarcusCastroV'
          target='blank'
        >
          {' '}
          Veja todos{' '}
        </a>
      </Card>
      <RecentProjects />
    </div>
  )
}
