import React from 'react';

import { PageContainer, BackColor, PageCard } from '../../components/ComponentsGlobal';
import Banner from '../../components/partials/Banner';

import { ContactContainer } from './styled';

const Page = () => {

    return(
        <BackColor>
            <Banner title="Fale Conosco" />
            <PageContainer>
                <PageCard>
                    <ContactContainer>
                        <p>Coloque todas as formas de contato que você disponibiliza para os seus clientes. Você terá também um formulário de contato, e receberá diretamente no seu email, todos os contatos feitos através deste formulário. Os formulários são personalizados, você pode incluir os "campos" que desejar, e ter "campos" de preenchimento obrigatório. </p>

                        <ul>
                            <li className="zap">WhatsApp: (00) 00000-0000</li>
                            <li className="phone">Telefone: (00) 0000-0000</li>
                            <li className="mail">Email: contato@seusite.com</li>
                        </ul>

                        <form action="/">
                            <div className="inputs">
                                <label htmlFor="name">Nome Completo <span>*</span></label>
                                <input type="text" id="name"/>
                            </div>

                            <div className="inputs">
                                <label htmlFor="name">Telefone </label>
                                <input type="text" id="name"/>
                            </div>

                            <div className="inputs">
                                <label htmlFor="name">Email <span>*</span></label>
                                <input type="text" id="name"/>
                            </div>

                            <div className="inputs">
                                <label htmlFor="name">Mensagem <span>*</span></label>
                                <textarea name="msg" id="msg" ></textarea>
                            </div>

                            <div className="input-send">
                                <p className="info-send">Os campos com <span>*</span> são obrigatórios.</p>
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </ContactContainer>
                </PageCard>
            </PageContainer>
        </BackColor>
    );

}

export default Page;