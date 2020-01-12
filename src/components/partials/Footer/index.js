import React from 'react';

import './style.css';

import { PageContainer } from '../../ComponentsGlobal';

const Footer = () => {
    return(
        <footer>
            <PageContainer>
                <div className="rodape">
                    <div className="newslatter">
                        <div className="title-news">Cadastre-se para receber novidades</div>
                        <div className="datas">
                            <div className="inputs">
                                <label htmlFor="name">Nome Completo <span>*</span></label>
                                <input type="text" id="name" />
                            </div>

                            <div className="inputs">
                                <label htmlFor="email">E-mail <span>*</span></label>
                                <input type="email" id="email" />
                            </div>

                            <div className="input-send">
                                <button id="send" className="button-send">Enviar</button>
                            </div>
                        </div>
                    </div>

                    <div className="copy">
                        Copyright &copy; - 2020 Todos Direitos Reservados <br/>
                        Create by: Carlos Eduardo
                    </div>
                </div>
            </PageContainer>
        </footer>
    );
}

export default Footer;