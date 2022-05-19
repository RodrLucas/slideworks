import React, { useState, useEffect } from 'react'
import { Header, Li } from './styles/header'
import { Main, ContainerItems, BookImg, BookTitle, BookAuthor, BookDescription, ContainerGenreAndCalendar, BookGenre, BookPublished } from './styles/main'
import { Footer, FooterContainer } from './styles/footer'
import Logo from '../../assets/Logo.svg'
import Search from '../../assets/SearchIcon.svg'
import FooterLogo from '../../assets/Logo2.svg'
import Facebook from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'
import Twitter from '../../assets/twitter.svg'


import { formatDate } from '../../utilities/formatDate'



function Home() {
    const [books, setBooks] = useState([fetch('https://fakerapi.it/api/v1/books')])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://fakerapi.it/api/v1/books')
            const data = await response.json()
            setBooks(data.data)
        }
        fetchData();
    }, [])


    return (
        <>
            <Header>
                <div className='container__header'>
                    <img src={Logo} alt='Logo-Bibbble' />
                    <ul>
                        <Li><a href='https://www.google.com'>Home</a></Li>
                        <Li><a href='https://www.google.com'>About</a></Li>
                        <Li><a href='https://www.google.com'>Features</a></Li>
                        <Li><a href='https://www.google.com'>Pricing</a></Li>
                        <Li><a href='https://www.google.com'>Gallery</a></Li>
                        <Li><a href='https://www.google.com'>Team</a></Li>
                        <Li><img src={Search} alt='Search' /></Li>
                    </ul>
                </div>
            </Header>
            <Main>
                {books.map((book) => {
                    return (
                        <ContainerItems key={Math.random()}>
                            <BookImg key={Math.random()} src={book.image} alt='firstImage' />
                            <BookTitle key={Math.random()} >{book.title}</BookTitle>
                            <BookAuthor key={Math.random()} >{book.author}</BookAuthor>
                            <BookDescription key={Math.random()} >{book.description}</BookDescription>
                            <ContainerGenreAndCalendar key={Math.random()} >
                                <BookGenre key={Math.random()} >{book.genre}</BookGenre>
                                <BookPublished key={Math.random()} >{formatDate(book.published)}</BookPublished>
                            </ContainerGenreAndCalendar>
                        </ContainerItems>
                    )
                })}

            </Main>
            <Footer>
                <FooterContainer>
                    <img src={FooterLogo} alt='Logo'/>
                </FooterContainer>
                <div>
                    <div>
                        <p>Terms &amp; Conditions</p>
                        <p>Privacy Policy</p>
                    </div>

                    <div>
                        <img src={Facebook} alt='Facebook Icon'/>
                        <img src={Instagram} alt='Instagram Icon'/>
                        <img src={Twitter} alt='Twitter Icon'/>
                    </div>
                </div>
            </Footer>
        </>
    )
}

export default Home