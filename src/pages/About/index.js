import React from 'react';

import { PageContainer, BackColor, PageCard } from '../../components/ComponentsGlobal';

import Banner from '../../components/partials/Banner';

import { AboutContent } from './styled';

import Predio from '../../Assets/Images/predio.jpg';
import HomemCelular from '../../Assets/Images/homem-celular.jpg';
import Equipe from '../../Assets/Images/equipe-thumb.jpg';
import ApertoMao from '../../Assets/Images/aperto-de-mao.jpg';
import Juiz from '../../Assets/Images/juiz.jpg';

const Page = () =>{

    return(
        <BackColor>
            <Banner title="Sobre" />
            <PageContainer>
                <PageCard>
                    <AboutContent>
                        <p> Conte aqui tudo o que você quiser sobre a sua empresa, negócio ou projeto pessoal. Escreva a vontade. Esse é o momento de cativar e conquistar o cliente (ou futuro cliente), que se interessou em ler mais sobre o que é a empresa. Se você não quiser escrever um texto de sobre / quem somos, não se preocupe, pois disponibilizamos um modelo padrão de texto, basta colocar o nome do seu negócio. Simples, não é mesmo?! </p>

                        <br />

                        <p>Então venha agora mesmo para a Loguei. Venha criar um site profissional pagando muito barato. Você vai se surpreender ao descobrir como é fácil ter um site com lindo design e recursos profissionais.</p>

                        <br />

                        <p>E não se preocupe com o fato do site ter um modelo padrão, pois no momento em que você colocar as suas fotos, textos e logo... O site ficará com a personalidade e o jeito da sua empresa. Ele se tornará único!</p>

                        <br />

                        <p>Inclua o conteúdo que desejar, na estrutura de site pré-pronta. Conte a sua história e adicione os seus textos.</p>

                        <br />

                        <p>Você também pode citar as principais características da sua empresa, como por exemplo:</p>

                        <ul>
                            <li>&#10004; Comprometimento;</li>
                            <li>&#10004; Respeito aos clientes;</li>
                            <li>&#10004; Preço justo;</li>
                            <li>&#10004; Agilidade;</li>
                            <li>&#10004; Ética;</li>
                            <li>&#10004; Entre outros.</li>
                        </ul>

                        <div className="imagesThumb">
                            <div className="imageItem">
                                <img src={Predio} alt=""/>
                            </div>

                            <div className="imageItem">
                                <img src={HomemCelular} alt=""/>
                            </div>

                            <div className="imageItem">
                                <img src={Equipe} alt=""/>
                            </div>

                            <div className="imageItem">
                                <img src={ApertoMao} alt=""/>
                            </div>

                            <div className="imageItem">
                                <img src={Juiz} alt=""/>
                            </div>
                        </div>
                    </AboutContent>
                </PageCard>
            </PageContainer>
        </BackColor>
    );

}

export default Page;