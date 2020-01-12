import styled from 'styled-components';

export const ContactContainer = styled.div`
    font-family: sans-serif;
    font-size: 15px;
    line-height: 20px;
    color: #444444;
    text-align: justify;

    ul{
        display: flex;
        flex-direction: column;
        padding-top: 15px;

        li{
           margin-left: 15px; 
           padding: 5px 0;
        }

        .zap{
            color: darkgreen;
        }

        .phone{
            color: #F44336;
        }

        .mail{
            color: #007296;
        }
    }

    form{
        margin-top: 25px;

        .inputs{
            margin-bottom: 25px;

            input, textarea{
                width: 100%;
                border: 1px solid #CCC;
            }

            textarea{
                resize: none;
                height: 100px;
            }
        }

        .input-send .info-send{
            display: block;
            width: 400px;

            span{
                font-weight: bold;
                color: red;
            }
        }
    }
`;