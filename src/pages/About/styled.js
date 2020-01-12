import styled from 'styled-components';

export const AboutContent = styled.div`
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
    }

    .imagesThumb{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding: 15px;

        .imageItem{
            width: 23%;
            padding: 10px 10px 6px 10px;
            transition: all ease 0.3s;

            &:hover{
                background-color: #bbbbbb;
            }

            img{
                width: 100%;
                cursor: pointer;
            }
        }
    }

`;