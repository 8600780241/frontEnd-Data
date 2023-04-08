import React, { useContext, useEffect, useState } from "react";

import dot from './more_icon.svg';
import like from './heart@2x.png';
import Nav from "./Nav";
import share from './share@2x.png'
import { Link, json } from "react-router-dom";
import { UserContext } from "./Context";
export default function Post_view() {
    const { user, setUser } = useContext(UserContext);
    useEffect(() => {
        fetch("https://insta-clone-backend-data.onrender.com/postdata")
            .then((data) => data.json())
            .then((responce) => { setUser(responce.reverse()) })
            .catch(() => console.log("sending err"))
    }, [])

    return (<>
        <div className="main-container2">
            <Nav />
            {user.map((i, index) => <div className="post" key={index}><div>
                {console.log(i)}
                <p id="name"><b>{i.name}</b><br></br>{i.location}</p>
                <img id="dot" src={dot} />
            </div>
                <div id="actualPost" ><img id="exactView" src={`https://insta-clone-backend-data.onrender.com/postdata/${i.PostImage}`} />
                </div>

                <div id="likeShare">
                    <img id="like" src={like} />
                    <img id="share" src={share} /><br></br><p id="likesCount">{`likes ${i.likes}`}</p>
                    <p id="date">{i.date}</p><br></br><br></br>
                    <p id="caption"><b>{i.description}</b></p>
                </div>
            </div>
            )}
        </div>
    </>)
}
