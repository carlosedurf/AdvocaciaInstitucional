import React from 'react';
import { Link } from 'react-router-dom';

import { PageContainer, BackColor, PageCard } from '../../components/ComponentsGlobal';
import Banner from '../../components/partials/Banner';

import { WorkContainer } from './styled';

import Predio from '../../Assets/Images/predio.jpg';
import Equipe from '../../Assets/Images/equipe-thumb.jpg';
import Juiz from '../../Assets/Images/juiz.jpg';
import Entrevista from '../../Assets/Images/entrevista.jpg';
import Joia from '../../Assets/Images/joia.jpg';
import SalaReuniao from '../../Assets/Images/sala-reuniao.jpg';

const Page = () => {

    return(
        <BackColor>
            <Banner title="Nossos Serviços" />
            <PageContainer>
                <PageCard>
                    <WorkContainer>
                        <p>Ter um texto aqui é opcional. Se quiser, faça aqui um apanhado geral sobre os tipos de serviços que você oferece, ou aproveite este espaço para falar sobre as vantagens de contratar a sua empresa. Tenha o site ideal para o seu negócio. Ao criar um site com a Loguei, você poderá incluir quantos serviços quiser, então capriche na descrição de cada serviço, e o torne ainda mais interessante para o público-alvo. Na Loguei, a quantidade de páginas é ilimitada. Esta área do site, assim como muitas outras, é opcional. Lembre-se: Você pode colocar no site quantos serviços desejar, dessa forma você terá uma verdadeira vitrine online.</p>

                        <div className="itemsServices">

                            <div className="itemService">
                                <div className="titleService">
                                    <Link to="/">Nome do Serviço</Link>
                                </div>
                                <div className="imageService">
                                    <img src={Equipe} alt=""/>
                                </div>
                                <div className="descService">
                                Conte aqui tudo sobre o seu serviço. Quais são as informações importantes que vale a pena passar para as pessoas que entraram no seu site? Quais as...
                                </div>
                                <div className="buttonService">
                                    <Link to="/">Saiba mais</Link>
                                </div>
                            </div>

                            <div className="itemService">
                                <div className="titleService">
                                    <Link to="/">Nome do Serviço</Link>
                                </div>
                                <div className="imageService">
                                    <img src={Predio} alt=""/>
                                </div>
                                <div className="descService">
                                Conte aqui tudo sobre o seu serviço. Quais são as informações importantes que vale a pena passar para as pessoas que entraram no seu site? Quais as...
                                </div>
                                <div className="buttonService">
                                    <Link to="/">Saiba mais</Link>
                                </div>
                            </div>

                            <div className="itemService">
                                <div className="titleService">
                                    <Link to="/">Nome do Serviço</Link>
                                </div>
                                <div className="imageService">
                                    <img src={Entrevista} alt=""/>
                                </div>
                                <div className="descService">
                                Conte aqui tudo sobre o seu serviço. Quais são as informações importantes que vale a pena passar para as pessoas que entraram no seu site? Quais as...
                                </div>
                                <div className="buttonService">
                                    <Link to="/">Saiba mais</Link>
                                </div>
                            </div>

                            <div className="itemService">
                                <div className="titleService">
                                    <Link to="/">Nome do Serviço</Link>
                                </div>
                                <div className="imageService">
                                    <img src={Juiz} alt=""/>
                                </div>
                                <div className="descService">
                                Conte aqui tudo sobre o seu serviço. Quais são as informações importantes que vale a pena passar para as pessoas que entraram no seu site? Quais as...
                                </div>
                                <div className="buttonService">
                                    <Link to="/">Saiba mais</Link>
                                </div>
                            </div>

                            <div className="itemService">
                                <div className="titleService">
                                    <Link to="/">Nome do Serviço</Link>
                                </div>
                                <div className="imageService">
                                    <img src={Joia} alt=""/>
                                </div>
                                <div className="descService">
                                Conte aqui tudo sobre o seu serviço. Quais são as informações importantes que vale a pena passar para as pessoas que entraram no seu site? Quais as...
                                </div>
                                <div className="buttonService">
                                    <Link to="/">Saiba mais</Link>
                                </div>
                            </div>

                            <div className="itemService">
                                <div className="titleService">
                                    <Link to="/">Nome do Serviço</Link>
                                </div>
                                <div className="imageService">
                                    <img src={SalaReuniao} alt=""/>
                                </div>
                                <div className="descService">
                                Conte aqui tudo sobre o seu serviço. Quais são as informações importantes que vale a pena passar para as pessoas que entraram no seu site? Quais as...
                                </div>
                                <div className="buttonService">
                                    <Link to="/">Saiba mais</Link>
                                </div>
                            </div>

                        </div>
                    </WorkContainer>
                </PageCard>
            </PageContainer>
        </BackColor>
    );

}

export default Page;