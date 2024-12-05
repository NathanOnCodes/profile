import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Django",
    "Flask",
    "Spring Boot",
    "Next.js",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "Gitflow",
    "GitHub",
    "Docker",
    "Jira",
    "VPS",
    "Linux",
    "Scrapy",
    "Selenium",
    "AWS"
];

const labelsThird = [
    "OpenAI",
    "Langflow",
    "LangChain",
    "Crew AI",
    "Prototipação",
    "MVP",
    "Django",
    "Next.js",
    "PostgreSQL",
    "Heroku",
    "Tailwind Css",
    "PaaS",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Desenvolvedor Full-stack</h3>
                    <p>Tenho experiência e conhecimento em Node.js, Typescript, Nest.js, Python, Django, React.js, Next.js, SQL PostgreSQL, Git, Docker, Deploy em cloud e padrões de design de software como TDD, DRY, KISS e SOLID.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Infraestrutura</h3>
                    <p>Sou capaz de criar e gerenciar contêineres, fazer deploy em servidores VPS Linux, PaaS e AWS, seguir boas práticas de versionamento de código como Gitflow.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Análise de Projetos</h3>
                    <p>Levantamento de requisitos funcionais e não funcionais, criação de diagramas de classe, diagramas de estado e diagramas de casos de uso, elaboração de documentação, sinergia de equipes, trabalho em equipe e comunicação.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
