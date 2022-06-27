import React, { useState,useEffect } from "react";
import axios from "axios";

const blogs = "https://medium.com/tag/writing";

function Blogs() {
  const [blogsData, setBlogsData] = useState({});

  console.log(blogsData);

  useEffect(() => {
    getBlogsWithAxios();
  }, []);

  const getBlogsWithAxios = async () => {
    const response=await axios.get(blogs);
    console.log(response);
    console.log(response.data);
    setBlogsData(response.data);
  };
  console.log(blogsData);

  return( <div className="blogs">
    {blogsData?"true":"false"}
  </div>);
}


export default Blogs;
