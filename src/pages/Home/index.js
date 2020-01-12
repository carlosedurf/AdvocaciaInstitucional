import React from 'react';
import { Link } from 'react-router-dom';
import { PageFluid, PageContent } from "./styled";
import { PageContainer } from '../../components/ComponentsGlobal';

import Equipe from '../../Assets/Images/equipe.jpg';
import Img1 from '../../Assets/Images/homem-celular.jpg';
import Img2 from '../../Assets/Images/aperto-de-mao.jpg';
import Img3 from '../../Assets/Images/juiz.jpg';

const Page = () => {
    return(
        <div>
            <PageFluid>
                <PageContainer>
                    <img src={Equipe} alt="" className="myimage"/>
                </PageContainer>
            </PageFluid>
            <PageContent>
                <div className="aboutInfo">
                    <div className="about">
                        <h2>Sobre</h2>
                        <p>Conte aqui um pequeno resumo sobre a sua empresa, negócio ou projeto pessoal. Quais são os principais benefícios oferecidos? Qualidade, comprometimento, preço competitivo. Lembre-se que você poderá incluir as fotos e textos que quiser neste site. Inclua o conteúdo que desejar, na estrutura de site pré-pronta. Conte a sua história e adicione os seus textos, assim você conquistará ainda mais clientes!</p>
                    </div>

                    <div className="contact">
                        <div>(21) 2000-0000</div>
                        <div>contato@seusite.com</div>
                        <div>Av. Atlântica, Copacabana, Rio de Janeiro/RJ</div>
                        <div>
                            <Link to="/about">Saiba mais</Link>
                        </div>
                    </div>
                </div>

                <div className="destaques">
                    <h2>Destaques</h2>

                    <div className="cards">
                        <div className="card">
                            <div className="card-item">
                                    <img src={Img1} alt=""/>
                                    <div>Seu Negócio</div>
                            </div>
                            <div className="card-text">
                                <p>Fale aqui, de forma resumida, sobre os seus produtos e serviços, ou diga quais são as principais características da sua empresa. Você também pode utilizar este espaço como preferir.</p>
                            </div>
                            <div className="card-button">
                                <Link to="/about">Saiba mais</Link>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-item">
                                <img src={Img2} alt=""/>
                                <div>Seu Negócio</div>
                            </div>
                            <div className="card-text">
                                <p>Fale aqui, de forma resumida, sobre os seus produtos e serviços, ou diga quais são as principais características da sua empresa. Você também pode utilizar este espaço como preferir.</p>
                            </div>
                            <div className="card-button">
                                <Link to="/about">Saiba mais</Link>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-item">
                                <img src={Img3} alt=""/>
                                <div>Seu Negócio</div>
                            </div>
                            <div className="card-text">
                                <p>Fale aqui, de forma resumida, sobre os seus produtos e serviços, ou diga quais são as principais características da sua empresa. Você também pode utilizar este espaço como preferir.</p>
                            </div>
                            <div className="card-button">
                                <Link to="/about">Saiba mais</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContent>
        </div>
    );
}

export default Page;