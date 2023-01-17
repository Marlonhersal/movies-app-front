import React, { useEffect } from "react";
import DetailDirector from "../../../components/Users/DetailDirector/DetailDirector";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//Redux
import { getDetail } from "../../../actions/index";

const DirectorDetail = () => {
  const token = localStorage.getItem("Token");
  const despachador = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    despachador(getDetail(id, "directors", token));
  }, []);
  const detail = useSelector((state) => state.Detail);
  console.log(detail);
  return <DetailDirector {...detail} />;
};

export default DirectorDetail;
