import React from 'react';
import PortCard from './PortCard';
import { TBTPCover, TBTPdesc } from './projects/TBTemplate';
import { RPCover, RPContent, RPdesc } from './projects/HKITCRP';
import { SLPv4Cover, SLPv4Content, SLPv4desc } from './projects/SLPv4';
import { MVSECover, MVSEContent, MVSEdesc } from './projects/MVSE';
import { SPWZCover, SPWZContent, SPWZdesc } from './projects/SPWZ';
import { AIBoxCover, AIBoxContent, AIBoxdesc } from './projects/AIBox';
import TBTPContent from './contents/TBTP/TBTPContent';
import { ScrollShadow } from '@heroui/react';
import { useTranslation } from 'next-export-i18n';

const Portfolio = () => {
  const { t } = useTranslation();

  const projectLists = [
    {
      title: t('portfolio.projects.0.title'),
      cover: <TBTPCover />,
      tags: t('portfolio.projects.0.tags', { returnObjects: true }),
      desc: t('portfolio.projects.0.desc'),
      date: "2025.01 - NOW",
      content: <TBTPContent />,
      infoJSON: {
        Git: "https://github.com/Aiden1024/TWINBLADES/",
        Link: "https://aiden1024.github.io/TWINBLADES"
      }
    },

    {
      title: t('portfolio.projects.2.title'),
      cover: <SLPv4Cover />,
      tags: t('portfolio.projects.2.tags', { returnObjects: true }),
      desc: t('portfolio.projects.2.desc'),
      date: "2025.04 - 2025.06",
      content: <SLPv4Content />
    },
    {
      title: t('portfolio.projects.3.title'),
      cover: <AIBoxCover />,
      tags: t('portfolio.projects.3.tags', { returnObjects: true }),
      desc: t('portfolio.projects.3.desc'),
      date: "2025.01 - 2025.04",
      content: <AIBoxContent />
    },
    {
      title: t('portfolio.projects.4.title'),
      cover: <MVSECover />,
      tags: t('portfolio.projects.4.tags', { returnObjects: true }),
      desc: t('portfolio.projects.4.desc'),
      date: "2024.01 - 2024.10",
      content: <MVSEContent />
    },
    {
      title: t('portfolio.projects.5.title'),
      cover: <SPWZCover />,
      tags: t('portfolio.projects.5.tags', { returnObjects: true }),
      desc: t('portfolio.projects.5.desc'),
      date: "2023.10 - 2024.2",
      content: <SPWZContent />
    },
    {
      title: t('portfolio.projects.1.title'),
      cover: <RPCover />,
      tags: t('portfolio.projects.1.tags', { returnObjects: true }),
      desc: t('portfolio.projects.1.desc'),
      date: "2024.07 - NOW",
      content: <RPContent />,
      infoJSON: {
        Link: "https://www.itf.gov.hk/en/funding-programmes/nurturing-talent/research-talent-hub/research-talent-hub-for-spc-projects-rth-spc-/index.html"
      }
    }
  ];

  return (
    <div className='py-16 flex flex-col md:-mx-6' id='projects'>
      <h2 className='text-4xl pb-4 px-4 md:pb-8 font-medium md:px-10'>
        {t('portfolio.projects_title')}
      </h2>

      <ScrollShadow
        isEnabled={false}
        orientation="horizontal"
        className='md:px-10 flex flex-row lg:grid lg:grid-cols-3 items-center overflow-x-scroll scrollbar-hide p-4 gap-4 lg:gap-6 xl:gap-8'
      >
        {projectLists.map((item, index) => (
          <div className='w-[85%] md:w-[60%] lg:w-full flex-shrink-0' key={index}>
            <PortCard {...item} />
          </div>
        ))}
      </ScrollShadow>
    </div>
  );
};

export default Portfolio;