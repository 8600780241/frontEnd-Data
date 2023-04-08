import React, { useContext, useState } from "react";
import { UserContext } from "./Context";
import Navigation from "./Nav"
import { Navigate, useNavigate } from "react-router-dom"
import "./Form.css"

function Form() {
    let navigator = useNavigate()
     const {setUser}  = useContext(UserContext);
    const [formData, setFormData] = useState({

        name: "",
        location: "",
        likes: 0,
        description: "",
        PostImage: "",
        date: new Date()
    })

  function submitForm(e) {
        e.preventDefault()
        const data = new FormData(e.target)
        data.append("likes", 0)
        data.append("date", new Date().toLocaleDateString())
      
   for(let x of data.entries()) {
    console.log(x)
   } 
        fetch("https://insta-clone-backend-data.onrender.com/post", {
            method: "POST",
            body: data,
        })
            .then((data) => data.json())
            .then((responce) => { setUser(d => {return [responce,...d]}) })
            .catch(() => console.log("sending err"))
       navigator(-1)
    }

   
    function fileSubmit(e, prop) {
        setFormData((data) => ({
            ...data,
            [prop]: e.target.value,

        }))
    }
   
    return (
        <>
            <Navigation />
            <br></br> <br></br> <br></br>
            <div className="parentForm" >
                <form action="/upload" method="post" onSubmit={(e) => submitForm(e)} >
                    <div>
                        <input type="file" placeholder="image" name="PostImage" value={formData.PostImage} onChange={(e) => fileSubmit(e, "PostImage")} ></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Name" name="name" value={formData.name} onChange={(e) => fileSubmit(e, "name")}
                        />
                        <input type="text" placeholder="location" name="location" value={formData.location} onChange={(e) => fileSubmit(e, "location")} />
                    </div>
                    <div>
                        <input type="text" name="description" value={formData.description} onChange={(e) => fileSubmit(e, "description")} placeholder="description" />
                    </div>
                    <button type="submit">post</button>
                </form>
            </div>
        </>
    )
}
export default Form