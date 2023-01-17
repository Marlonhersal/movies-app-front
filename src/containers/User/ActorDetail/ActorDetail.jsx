import React, { useEffect } from "react";
import DetailActor from "../../../components/Users/DetailActor/DetailActor";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//Redux
import { getDetail } from "../../../actions/index";

const DirectorDetail = () => {
  const token = localStorage.getItem("Token");
  const despachador = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    despachador(getDetail(id, "actors", token));
  }, []);
  const actorDetail = useSelector((state) => state.Detail);
  return <DetailActor {...actorDetail} />;
};

export default DirectorDetail;
