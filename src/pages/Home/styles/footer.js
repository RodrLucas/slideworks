import styled from 'styled-components'

export const Footer = styled.footer`
    background: #1E2833;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
    


    div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-top: .9rem;
    margin-bottom: .9rem;

    @media screen and (min-width: 768px){
        flex-direction: row;
        justify-content: space-between;
    }

        p{
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 20px;
            letter-spacing: -0.204545px;
            color: #FFFFFF;
            font-family: 'DM Sans', sans-serif;

                &:hover{
                    opacity: 0.6;
                    text-decoration: underline;
                    cursor: pointer;
                }
        }

        div{
            flex-direction: row;

            img{
                &:hover{
                    opacity: 0.6;
                    cursor: pointer;
                }
            }
        }
    }

    @media screen and (min-width: 768px){
        padding: .5rem 2rem;
    }

    @media screen and (min-width: 1024px){
        padding: .5rem 10rem;
    }

`

export const FooterContainer = styled.div`
    border-bottom: 1px solid #ffffff38;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .9rem;
`