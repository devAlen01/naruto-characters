"use client";
import { useEffect, useState } from "react";
import scss from "./HomePage.module.scss";
import axios from "axios";

const TailedBeasts = () => {
  const [data, setData] = useState<ITailedBeasts>();
  const getTailedBeasts = async () => {
    const { data } = await axios(
      "https://dattebayo-api.onrender.com/tailed-beasts",
      {
        params: {
          limit: 10,
        },
      }
    );
    setData(data);
  };
  useEffect(() => {
    getTailedBeasts();
  }, []);
  return (
    <section className={scss.TailedBeasts}>
      <div className="container">
        <div className={scss.content}>
          {data?.["tailed-beasts"].map((item) => (
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
    </section>
  );
};

export default TailedBeasts;
