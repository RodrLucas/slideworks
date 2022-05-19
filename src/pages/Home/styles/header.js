import styled from 'styled-components'

export const Header = styled.header`
    width: 100vw;
    height: 20%;
    border: 1px solid #CCCCCC;
    margin-bottom: 5rem;

    .container__header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem;

        img{
            cursor: pointer;

            &:hover{
                width: 15px;
            }
        }

        ul{
            display: flex;
            gap: 0.5rem;
            align-items: center;
            justify-content: center;
        }
    }

    @media screen and (min-width: 768px){
        .container__header{
            flex-direction: row;
            justify-content: space-evenly;
            ul{
                gap: 1.5rem;
            }
        }
    }

`
export const Li = styled.li`
    
    a{
        display: flex;
        justify-content: center;
        align-items: center;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
        cursor: pointer;
    
        &:hover{
            opacity: 0.6;
            text-decoration: underline;
        }
    }
`
