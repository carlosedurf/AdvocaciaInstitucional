import styled from 'styled-components';

export const PageFluid = styled.div`
    background-color: #5C4535;

    .myimage{
        max-width: 1080px;
        margin-bottom: -4px;
    }
`;

export const PageContent = styled.div`

    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    .aboutInfo{
        display: flex;
        width: 100%;

        .about{
            flex: 1;
            padding:25px;

            h2{
                color: #4E3727;
                font-family: sans-serif;
                margin-bottom: 10px;
            }

            p{
                color: #3B3B3B;
                text-align: justify;
            }
        }

        .contact{
            margin: 25px;
            width: 250x;
            padding: 25px;
            margin-left: 10px;
            background-color: #4E3726;
            color: #FFF;
            display: flex;
            justify-content: center;
            align-items: left;
            flex-direction: column;

            div{
                margin-top: 10px;

                &:first-child{
                    margin-top: 0;
                }

                a{
                    background-color: #FFF;
                    color: #4E3726;
                    display: inline-block;
                    border-radius: 50px;
                    font-weight: bold;
                }
            }
        }
    }

    .destaques{
        padding: 25px;
        
        h2{
            color: #4E3727;
            font-family: sans-serif;
            margin-bottom: 10px;
        }

        .cards{
            display: flex;

            .card{
                margin-right: 25px;
                display: flex;
                flex-direction: column;
                
                &:last-child{
                    margin-right: 0;
                }

                &:first-child .card-item{

                }

                .card-item{
                    position: relative;

                    img{
                        background-size: cover;
                        width: 100%;
                    }

                    div{
                        background-color: rgba(0, 0, 0, 0.6);
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        font-size: 20px;
                        font-family: sans-serif;
                        padding: 10px 0;
                        text-indent: 20px;
                        color: #FFF;

                    }

                }

                .card-text{
                    margin-top: 20px;

                    p{
                        color: #666666;
                        text-align: justify;
                    }
                }

                .card-button{
                    margin-top: 20px;

                    a{
                        color: #FFF;
                        background-color: #4E3727;

                        &:hover{
                            color: #4E3727;
                            background-color: #FFF;
                        }
                    }
                }
            }
        }
    }
`;