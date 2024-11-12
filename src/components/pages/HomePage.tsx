"use client";
import axios from "axios";
import scss from "./HomePage.module.scss";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [data, setData] = useState<ICharacters>();
  const [showMore, setShowMore] = useState<number>(24);

  const getAllCharacters = async () => {
    const { data } = await axios(
      "https://dattebayo-api.onrender.com/characters",
      {
        params: {
          limit: showMore,
        },
      }
    );
    setData(data);
  };
  useEffect(() => {
    getAllCharacters();
  }, [setShowMore, showMore]);
  return (
    <section className={scss.HomePage}>
      <div className="container">
        <div className={scss.content}>
          {data?.characters.map((item) => (
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
        <div className={scss.showMoreButton}>
          <button onClick={() => setShowMore(() => showMore + 20)}>
            Show more
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
