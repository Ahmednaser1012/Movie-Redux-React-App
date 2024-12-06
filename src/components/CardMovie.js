import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const CardMovie = ({ mov }) => {
  return (
    <Col lg="3" className="my-1">
      <Link to={`/movie/${mov.id}`}>
        <div className="card" xs="1">
          <img
            src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path}
            className="card__image"
            alt="null"
          />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>اسم الفيلم : {mov.original_title}</p>
              <p>تاريخ الاصدار:{mov.release_date}</p>
              <p>عدد المقيمين: {mov.vote_count}</p>
              <p>التقييم:{mov.vote_average} </p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default CardMovie;
