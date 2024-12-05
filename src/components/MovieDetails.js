import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const param = useParams();
  const [movie, setMovie] = useState([]);

  //get  movie by details
  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`
    );
    setMovie(res.data);
  };
  useEffect(() => {
    getMovieDetails();
  }, []);
  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4 ">
          <div className="card-detalis  d-flex align-items-center ">
            <img
              className="img-movie w-30"
              src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
              alt="null"
            />
            <div className="justify-content-center text-center  mx-auto">
              <p className="card-text-details border-bottom">
                اسم الفيلم: {movie.title}
              </p>
              <p className="card-text-details border-bottom">
                تاريخ الفيلم :{movie.release_date}
              </p>
              <p className="card-text-details border-bottom">
                عدد المقيمين : {movie.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                التقييم :{movie.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1 ">
          <div className="card-story  d-flex flex-column align-items-start">
            <div className="text-end p-4 ">
              <p className="card-text-title border-bottom ">القصة:</p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story">
                {movie.overview && movie.overview.length > 0
                  ? movie.overview
                  : " لا يوجد قصه لهذا الفيلم"}
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-center "
        >
          <Link to="/">
            <button
              style={{
                backgroundColor: "rgba(82, 109, 137, 0.51)",
                borderRadius: "15px",
                marginBottom: "20px",
              }}
              className="btn btn-primary mx-2"
            >
              عوده للرئيسيه
            </button>
          </Link>
          <a href={movie.homepage}>
            <button
              style={{
                backgroundColor: "rgba(82, 109, 137, 0.51)",
                borderRadius: "15px",
              }}
              className="btn btn-primary"
            >
              مشاهده الفيلم
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetails;
