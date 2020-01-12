import styled from 'styled-components';

export const WorkContainer = styled.div`
    font-family: sans-serif;
    font-size: 15px;
    line-height: 20px;
    color: #444444;
    text-align: justify;

    .itemsServices{
        display: flex;
        padding: 10px;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;

        .itemService{
            width: 30%;
            box-shadow: 1px 1px 4px #CCC;
            margin: 100px 10px 10px 10px; 
            
            .titleService a{
                color: #4E3727;
                font-weight: 600;
                font-size: 17px;
            }

            .imageService img{
                width: 100%;
            }

            .descService{
                padding: 10px;
            }

            .buttonService{
                padding: 10px;

                a{
                    background-color: rgba(63,43,31, 1);
                    display: inline-block;
                    color: #FFF;
                    transition: all ease 0.3s;

                    &:hover{
                        background-color: rgba(63,43,31, 0.8);
                    }
                }

            }
        }
    }
`;