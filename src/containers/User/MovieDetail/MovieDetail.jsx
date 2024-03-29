import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailMovie from "../../../components/Users/DetailMovie/DetailMovie";
import { getDetail } from "../../../actions/index";

function MovieDetail(props) {
  const token = localStorage.getItem("Token");
  const despachador = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    despachador(getDetail(id, "movies", token));
  }, []);
  const movieDetail = useSelector((state) => state.Detail);
  return <DetailMovie {...movieDetail} />;
}

export default MovieDetail;
