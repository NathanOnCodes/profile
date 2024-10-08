import React from "react";
import mockcarserv from '../assets/images/mockcarserv.png';
import mockbeyond from '../assets/images/mockbeyond .png';
import mockmotion from '../assets/images/mockmotion.png';
import mocknomoremeet from '../assets/images/mocknomoremeet.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projetos">
        <h1>Projetos</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://carserv.django.dev.br/" target="_blank" rel="noreferrer"><img src={mockcarserv} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://carserv.django.dev.br/" target="_blank" rel="noreferrer"><h2>CarServ</h2></a>
                <p className="text-paragraph">Sistema como serviço que é uma solução completa para vistoria e demais serviço automotivos.</p>
            </div>
            <div className="project">
                <a href="https://grupomultiplica.com.br/solucoes-de-credito/beyond-bank/" target="_blank" rel="noreferrer"><img src={mockbeyond} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://grupomultiplica.com.br/solucoes-de-credito/beyond-bank/" target="_blank" rel="noreferrer"><h2>Beyond Bank</h2></a>
                <p className="text-paragraph">Gestão de contas, ativos e créditos a pagar para clientes B2B.</p>
            </div>
            <div className="project">
                <a href="https://github.com/NathanOnCodes/Motion" target="_blank" rel="noreferrer"><img src={mockmotion} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/NathanOnCodes/Motion" target="_blank" rel="noreferrer"><h2>Motion</h2></a>
                <p className="text-paragraph">Rede social de mobilidade urbana com objetivo de conectar passageiros do transporte público de São Paulo para colaborarem entre si.</p>
            </div>
            <div className="project">
                <a href="https://github.com/NathanOnCodes/NoMoreMeet" target="_blank" rel="noreferrer"><img src={mocknomoremeet} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/NathanOnCodes/NoMoreMeet" target="_blank" rel="noreferrer"><h2>NoMoreMeet</h2></a>
                <p className="text-paragraph">Sistema de gerenciamento de reuniões que calcula e gerencia tempo de duração, gerando dados sobre o impacto de reuniões desnecessárias ao seu negócio.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;