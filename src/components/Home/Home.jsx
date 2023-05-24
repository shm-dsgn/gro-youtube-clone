import Video from "../Video/Video";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import logo from "../../assets/growTube.png";

function Home() {
  const currentPage = window.sessionStorage.getItem("pageNo")
    ? window.sessionStorage.getItem("pageNo")
    : 0;

  const [pageNo, setPageNo] = useState(currentPage);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  window.sessionStorage.setItem("pageNo", pageNo);

  const nextPage = () => {
    if (pageNo >= 0 && pageNo < 9) {
      setPageNo((pageNo) => pageNo + 1);
      setIsLoading(true);
    } else {
      setPageNo(0);
      setIsLoading(true);
    }
  };

  const prevPage = () => {
    if (pageNo > 0 && pageNo < 9) {
      setPageNo((pageNo) => pageNo - 1);
      setIsLoading(true);
    } else if (pageNo === 0) {
      setPageNo(0);
      alert("You are on the first page");
    }
  };

  useEffect(() => {
    setPageNo(JSON.parse(window.sessionStorage.getItem("pageNo")));
  }, []);

  useEffect(() => {
    axios
      .get("https://internship-service.onrender.com/videos?page=" + pageNo)
      .then((res) => {
        setData(res.data.data.posts);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [currentPage, pageNo]);

  return (
    <>
      <div>
        <img src={logo} />
      </div>
      <div className="navigation">
        <button onClick={prevPage}>&#8592;</button>
        <div>{pageNo + 1} out of 10</div>
        <button onClick={nextPage}>&#8594;</button>
      </div>
      <br />
      {isLoading ? <div>Loading...</div> : <Video data={data} />}
      <br />
      <div className="navigation">
        <button onClick={prevPage}>&#8592;</button>
        <div>{pageNo + 1} out of 10</div>
        <button onClick={nextPage}>&#8594;</button>
      </div>
    </>
  );
}

export default Home;
