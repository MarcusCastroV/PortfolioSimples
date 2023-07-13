import { Card } from './Card'
import { getApiGitHub } from '@/services/api/fetchData'
import { useState, useEffect } from 'react'
import IconGithub from './icons/IconGithub'
import IconFolderOpen from './icons/IconFolderOpen'
import IconLinkTwentyFour from './icons/IconLinkTwentyFour'

export const RecentProjects = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const reposData = await getApiGitHub()
      setRepos(reposData)
    }

    fetchData()
  }, [])

  return (
    <div className='flex gap-[3%] flex-wrap'>
      {repos.length > 0 &&
        repos.filter((repo) => repo.id !== 666090106).slice(0, 4).map((repo) => (
          <Card
            key={repo.id}
            h='h-56'
            w='w-full md:w-[47%]'
            justify='justify-between'
            px='px-5'
            py='py-5'
          >
            <a
              className='flex gap-3 w-min whitespace-nowrap transition-all ease-in-out delay-100 hover:text-slate-300'
              href={repo.homepage ? repo.homepage : repo.html_url}
              target='blank'
            >
              <IconFolderOpen />
              {repo.name}
            </a>

            <p className={'text-sm text-ellipsis line-clamp-4'}>{repo.description ? repo.description : 'Vou adicionar a descrição'}</p>

            <div className='flex justify-between'>
              <div className='flex gap-6'>
                <a
                  className='transition-all ease-in-out delay-100 hover:text-slate-300'
                  href={repo.html_url}
                  target='blank'
                  rel='noopener noreferrer'
                >
                  <IconGithub />
                </a>
                {repo.homepage && (
                  <a
                    className='transition-all ease-in-out delay-100 hover:text-slate-300'
                    href={repo.homepage}
                    target='blank'
                    title='link de produçao'
                  >
                    <IconLinkTwentyFour />
                  </a>
                )}
              </div>
              <div className='flex items-baseline gap-2'>
                <span
                  className={`w-3 h-3 rounded-full ${
                    repo.language === 'TypeScript'
                      ? 'bg-[#3178C6]'
                      : repo.language === 'JavaScript'
                      ? 'bg-[#F1E05A]'
                      : 'bg-black'
                  }`}
                ></span>

                <span>{repo.language}</span>
              </div>
            </div>
          </Card>
        ))}
    </div>
  )
}
