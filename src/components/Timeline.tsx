import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="experiencias">
      <div className="items-container">
        <h1>Experiências </h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - atual"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Desenvolvedor Back-end - <a className="name-timeline-enterprise-link" href="https://www.django.dev.br/" target="_blank" rel="noreferrer">Django Devs Brasil</a></h3>
            <h4 className="vertical-timeline-element-subtitle">Remoto, 05/2024 - Atual</h4>
            <p>
              Desenvolvimento Back-end com Django, PostgreSQL, Git, Python, HTML5, Bootstrap, Javascript Vanilla, DRF, Linux, DevOps, TDD, DRY, KISS, YAGNI, LoD e SOLID.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Desenvolvedor Full-stack - <a className="name-timeline-enterprise-link" href="https://github.com/NathanOnCodes/NoMoreMeet/tree/main" target="_blank" rel="noreferrer">NoMoreMeet</a></h3>
            <h4 className="vertical-timeline-element-subtitle">Remoto, 06/2023 - 01/2024 (Prazo Determinado)</h4>
            <p>
              Desenvolvedor Full-stack com Next.js, Tailwind CSS, HTML5, Git, Prisma, PostgreSQL, DRY, KISS, YAGNI, LoD e SOLID.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Analista de Projetos - <a className="name-timeline-enterprise-link" href="https://github.com/NathanOnCodes/Motion" target="_blank" rel="noreferrer">Motion</a></h3>
            <h4 className="vertical-timeline-element-subtitle">Remoto, 06/2023 - 10/2023 (Prazo Determinado)</h4>
            <p>
              Analise de escopo de projeto, levantamento de requisitos, definição de tasks, sprint e squad. Feedback e alinhamento de ideias.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Desenvolvedor Front-end - <a className="name-timeline-enterprise-link" href="https://grupomultiplica.com.br/" target="_blank" rel="noreferrer">Grupo Multiplica</a></h3>
            <h4 className="vertical-timeline-element-subtitle">São Paulo, 07/2022 - 05/2023</h4>
            <p>
              Desenvolvimento Front-end com React.js, Typescript, MUI, Styled-components, Redux, React Query, React Form, Git, KISS, DRY, YAGNI, LoD e SOLID.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;