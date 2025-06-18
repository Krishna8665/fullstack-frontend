import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import axios from 'axios'

function Home() {
  const [books, setBooks] = useState([])
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3000/api/books/")
    setBooks(response.data.datas) // response.data   chai lekhnai parcha hai compulsary tesapchi k lyaune ho . pachi lekhne console ki bowser n/w ma herne
  }
    
    
    useEffect(() => {
      fetchBooks()

    }, [])

    return (
      <>
        <Navbar />
        <div className="flex flex-wrap ">
          {
            books.map(function (book) {
              return (

                <Card book={book} key={book.id}/>
              )

            })

          }

        </div>

      </>
    )

  }


  export default Home
