import React from "react";
import gingerTea from "../../../images/ginger-tea.jpg";
import macha from "../../../images/macha.png";
import shabujCha from "../../../images/shabuj-cha.jpg";
import LatestNewsCard from "./LatestNewsCard";
const latestNews = [
  {
    id: 1,
    date: "Feb 08, 2021",
    title: "How to Make Ginger Tea and Matcha-Ginger Tea",
    img: gingerTea,
    procedure:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quas repudiandae voluptate eum minima minus, debitis modi ipsa quo incidunt perspiciatis totam, facere adipisci quisquam reprehenderit culpa animi aut voluptatibus?",
  },
  {
    id: 2,
    date: "Mar 10, 2021",
    title: "Ways to Experience the Matcha Heaven",
    img: macha,
    procedure:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quas repudiandae voluptate eum minima minus, debitis modi ipsa quo incidunt perspiciatis totam, facere adipisci quisquam reprehenderit culpa animi aut voluptatibus?",
  },
  {
    id: 3,
    date: "Apr 15, 2021",
    title: "World's most popular tea drinks is sabujcha.",
    img: shabujCha,
    procedure:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quas repudiandae voluptate eum minima minus, debitis modi ipsa quo incidunt perspiciatis totam, facere adipisci quisquam reprehenderit culpa animi aut voluptatibus?",
  },
];

const LatestNews = () => {
  return (
    <div>
      <div>
        <h1 className="display-4 text-center mt-5">Latest News</h1>
      </div>
      <div className="row d-flex justify-content-center mb-5 pb-5">
        {latestNews.map((news) => (
          <LatestNewsCard news={news} key={news.id}></LatestNewsCard>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
