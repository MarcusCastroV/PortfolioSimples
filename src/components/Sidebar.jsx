import { Card } from './Card'
import { ContactInfo } from './ContactInfo'
import IconLocationTwentyFour from './icons/IconLocationTwentyFour'
import IconGithub from './icons/IconGithub'
import IconLinkedin from './icons/IconLinkedin'
import IconMail from './icons/IconMail'
import { Technology } from './Technology'

export const Sidebar = () => {
  const technologies = [
    'JavaScript',
    'HTML',
    'CSS',
    'ReactJS',
    'Tailwind',
    'Redux',
    'NodeJs',
    'MongoDB',
    'Postgres',
    'Express',
    'Docker',
    'AWS'
  ];
  
  return (
    <div className='w-full md:w-3/12 h-auto px-5 pb-5 flex flex-col justify-center items-center'>
      <Card h='h-72' align='items-center'>
        <div className='rounded-full filter drop-shadow-md bg-white w-32 h-32 flex mb-5'></div>
        <h1 className='text-lg'>Marcus Castro</h1>
      </Card>
      <Card h={'h-56'}>
        <ContactInfo icon={<IconLocationTwentyFour />} text={'Belo Horizonte - MG'} />
        <ContactInfo
          icon={<IconGithub />}
          text={
            <a
              target='blank'
              href='https://github.com/MarcusCastroV'
              className='transition ease-in-out delay-100 hover:text-neutral-300'
            >
              /MarcusCastroV
            </a>
          }
        />
        <ContactInfo
          icon={<IconLinkedin />}
          text={
            <a
              target='blank'
              href='https://www.linkedin.com/in/marcus-castrov/'
              className='transition ease-in-out delay-100 hover:text-neutral-300'
            >
              marcus-castrov
            </a>
          }
        />
        <ContactInfo icon={<IconMail />} text={'marcuscastrov1@gmail.com'} />
      </Card>
      <Card h='h-auto md:h-64' py='pb-5' justify={'justify-start'}>
        <h1 className='ml-5 mt-5 mb-2 text-lg'>Tecnologias</h1>
        <div className='flex col flex-wrap text-sm justify-center'>
        {technologies.map((item, index) => (
          <Technology key={index} technology={item} />
        ))}
        </div>
      </Card>
      <Card h={'h-64'} justify={'justify-start'}>
          <h1 className='ml-5 mt-5 mb-2 text-lg'>
            Experiências
          </h1>
          <ul>
            <li className=' ml-14 list-disc'>
              lorem25
            </li>
            <li className=' ml-14 list-disc'>
              lorem25
            </li>
          </ul>
      </Card>
      <Card h={'h-64'} justify={'justify-start'} >
          <h1 className='ml-5 mt-5 mb-2 text-lg'>
            Educação
          </h1>
          <ul>
            <li className=' ml-14 list-disc'>
              lorem25
            </li>
            <li className=' ml-14 list-disc'>
              lorem25
            </li>
          </ul>
      </Card>

    </div>
  )
}
