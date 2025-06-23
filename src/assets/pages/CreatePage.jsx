import { useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function CreatePage() {
    const navigate = useNavigate()
    //first approach
    // const [bookName, setBookname] = useState("")
    // const [bookGenre, setBookgenre] = useState("")
    // const [bookAuthor, setBookauthor] = useState("")
    // const [bookPrice, setBookprice] = useState("")
    // console.log(bookName,bookGenre,bookAuthor,bookPrice)

    //Second Approach
    const [bookData,setBookData] = useState({  //manually data decham aaile hamle tala field diyera
        bookName : "",
        bookGenre : "",
        bookAuthor : "",
        price : ""

    })

    const handleChange = (event)=> {
       // console.log(event.target.value)
       // let value = event.target.value //k data type haneko
       // let name = event.target.name //kun ma type haneko 
       let {name, value} = event.target  
       //bookName c programming
       //bookAuthor hello

       setBookData({
        ...bookData, //Spread syntax(...) ko kaam agadi j cha jasto xa testai hoss , bookname ko value halesi testai rahncha bookgenre ko value halesi pani 
        [name] : value  // value --> manish , name--> bookAuthor

       })

    }
    //console.log(bookData)

    const submitData = async (event)=>{
        event.preventDefault()
       // console.log("data submit vayo")
        //mathi state ma vako data lai api lai dine --localhost:3000/api/books  - post method
        //post garda duita pathaunai paryo , pathaune data ko format always object hunu parcah, jun at the end axios le json ma convert garera pathaidincha
        const response = await axios.post("http://localhost:3000/api/books",bookData)
        if (response.status === 200){
            alert("book added successfully")
            navigate("/")
            
        }else{
            alert("something went wrong")
        }
    }


    return (
        <>
            <Navbar />
            <div className="bg-white border border-4 rounded-lg shadow relative m-10">
                <div className="flex items-start justify-between p-5 border-b rounded-t">
                    <h3 className="text-xl font-semibold">
                        Create Book
                    </h3>
                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </button>
                </div>
                <div className="p-6 space-y-6">
                    <form onSubmit={submitData}>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">Book Name</label>
                                <input type="text" onChange={handleChange} name="bookName" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="rich dad poor dad" required />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="category" className="text-sm font-medium text-gray-900 block mb-2">Book Genre</label>
                                <input type="text" onChange={handleChange} name="bookGenre" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="self-improvement" required />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2">Book  Author</label>
                                <input type="text" onChange={handleChange} name="bookAuthor" id="brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Mark Henry" required />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                                <input type="number" onChange={handleChange} name="bookPrice" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$230" required />
                            </div>
                            {/* <div className="col-span-full">
          <label htmlFor="product-details" className="text-sm font-medium text-gray-900 block mb-2">Product Details</label>
          <te        xtarea id="product-details" rows={6} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Details" defaultValue={""} />
        </div> */}
                        </div>
                          <div className="p-6 border-t border-gray-200 rounded-b">
                    <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="submit">Save all</button>
                </div>
                    </form>
                </div>
              
            </div>

        </>
    )
}

export default CreatePage
