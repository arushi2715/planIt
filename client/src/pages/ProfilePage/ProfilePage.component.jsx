import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import images from "../../components/Carousel/Images";
import ImageCarousel from "../../components/Carousel/Carousel.component";
import "./ProfilePage.styles.css";

function ProfilePage() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");

  async function getUser() {
    const result = await fetch(
      "https://jot-diaries.herokuapp.com/auth/getUser",
      {
        method: "GET",
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );

    const data = await result.json();

    if(data.status===false){
        window.alert(data.message)       
    }
    else{
        setUser(data.userExists[0].name);
    }
  }

  useEffect(()=>{
    if(!localStorage.getItem("token")){
        navigate("/");
    }else{
        getUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return(
    <div>
        <div className="profile-page">
            Hello {user}!
            <ImageCarousel images={images}/>
    </div>  
  </div>
  )
}

export default ProfilePage;
