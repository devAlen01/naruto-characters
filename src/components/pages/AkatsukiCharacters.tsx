"use client";
import { useEffect, useState } from "react";
import scss from "./HomePage.module.scss";
import axios from "axios";

const AkatsukiCharacters = () => {
  const [data, setData] = useState<IAkatsuki>();
  const [showMore, setShowMore] = useState<number>(20);
  const getAkatsukiCharacters = async () => {
    const { data } = await axios(
      "https://dattebayo-api.onrender.com/akatsuki",
      {
        params: {
          limit: showMore,
        },
      }
    );
    setData(data);
  };
  useEffect(() => {
    getAkatsukiCharacters();
  }, [showMore, setShowMore]);
  return (
    <section className={scss.AkatsukiCharacters}>
      <div className="container">
        <div className={scss.content}>
          {data?.akatsuki.map((item) => (
            <div className={scss.character} key={item.id}>
              <div className={scss.image}>
                <img
                  src={
                    item.images[1] ||
                    item.images[0] ||
                    "https://freelance.ru/img/portfolio/pics/00/42/A4/4367378.jpg"
                  }
                  alt="picture"
                />
              </div>
              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className={scss.showMoreButton}>
        <button onClick={() => setShowMore(() => showMore + 20)}>
          showMore
        </button>
      </div>
    </section>
  );
};

export default AkatsukiCharacters;
