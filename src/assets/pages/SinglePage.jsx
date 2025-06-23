import { Link, useNavigate, useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"
import Button from "../components/Button.jsx"


function SinglePage() {
    const navigate = useNavigate()  //jsx bahira javascript ko code ma cha vane link to haina useNavigate use garincha 
    const { id } = useParams()//used to get the parameter of route 
    const [book, setBook] = useState({

    })
    const fetchBook = async () => {
        const response = await axios.get("http://localhost:3000/api/books/" + id)
        setBook(response.data.datas)
    }
    useEffect(() => {
        fetchBook()
    }, [])

    const deleteBook = async () => {
        const response = await axios.delete("http://localhost:3000/api/books/" + id)
        if (response.status === 200) {
            //home page ma navigation gardim
            navigate("/")

        } else {
            alert("Something went wrong")
        }
    }

    return (
        <div>
            <Navbar />
            <h1>{book.bookName}</h1>
            <p>{book.price}</p>
            <p>{book.bookAuthor}</p>
            {/* <Button deleteFunctionHo={deleteBook} /> */}
            <button onClick ={deleteBook}>Delete Me</button>
            <Link to={`/edit-page/${id}`}><button >Edit ME</button></Link>

        </div>
    )
}

export default SinglePage
