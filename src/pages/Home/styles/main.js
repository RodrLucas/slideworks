import styled from 'styled-components'

export const Main = styled.main`
    max-width: 85vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    @media screen and (min-width: 768px){
        flex-direction: row;
        flex-wrap: wrap;
    }
`

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 260px;
    height: 520px;
    border: 1px solid #DBDBDB;
    padding: 0.5rem;
    margin: 10px 0;
    border-radius: 5px;

    @media screen and (min-width: 768px){
        margin-right: .9rem;
    }
`

export const BookImg = styled.img`
    border-radius: 5px;
    width: 100%;
    height: 50%;
`

export const BookTitle = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.0275em;
    color: #19191D;
    font-family: 'Inter', sans-serif;
`

export const BookAuthor = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: 0.018em;
    color: #787885;
    font-family: 'Inter', sans-serif;
`

export const BookDescription = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: 0.018em;
    color: #787885;
    font-family: 'Inter', sans-serif;
`

export const ContainerGenreAndCalendar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const BookGenre = styled.p`
    display: inline-block;
    border: 1px solid #9DC2FF;
    padding: .5rem;
    border-radius: 5px;
    font-weight: 500;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: 0.018em;
    color: #2264D1;
    font-family: 'Inter', sans-serif;
`

export const BookPublished = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: 0.018em;
    color: #2264D1;
`