import Marquee from "react-fast-marquee";
import { FaReact, FaDocker, FaAws, FaGitAlt, FaLinux, FaPython } from 'react-icons/fa';
import { SiDotnet, SiMongodb, SiPostgresql, SiJenkins, SiTypescript, SiNextdotjs, SiTailwindcss, SiDjango, SiRabbitmq, SiTrivy, SiSonarqube } from 'react-icons/si';

const Label = () => {
  const icons = [
    { Icon: FaReact, name: 'React' },
    { Icon: FaDocker, name: 'Docker' },
    { Icon: FaGitAlt, name: 'Git' },
    { Icon: FaLinux, name: 'Linux' },
    { Icon: FaPython, name: 'Python' },
    { Icon: SiDotnet, name: '.NET' },
    { Icon: SiMongodb, name: 'MongoDB' },
    { Icon: SiPostgresql, name: 'PostgreSQL' },
    { Icon: SiJenkins, name: 'Jenkins' },
    { Icon: SiTypescript, name: 'TypeScript' },
    { Icon: SiNextdotjs, name: 'Next.js' },
    { Icon: SiTailwindcss, name: 'Tailwind CSS' },
    { Icon: SiDjango, name: 'Django' },
    { Icon: SiRabbitmq, name: 'RabbitMQ' },
  ];

  return (
    <div className="w-full overflow-hidden py-6 bg-[#171717]">
      <div className="relative h-full">
        <Marquee speed={40} loop={0} play={true}>
          {[...icons, ...icons].map(({ Icon, name }, index) => (
            <div className="p-1 bg-[#171717]" key={`${name}-${index}`}>
              <div className="flex items-center mx-4 p-5 px-10 rounded-lg bg-[#232323] border-4 border-white hover:shadow-white hover:shadow-xl transition-all duration-300">
                <Icon className="text-5xl text-white mr-2" />
                <span className="text-white font-semibold text-lg">{name}</span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Label;