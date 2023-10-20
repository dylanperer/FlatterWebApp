import { Navigate, useNavigate } from "@solidjs/router";
import { Component } from "solid-js";
import { AppRoutes } from "../common/navman";

const Discover: Component<{}> = (props) => {
 const navigate = useNavigate();

 // navigate(AppRoutes.SignUp);
 
 return <div>Discover</div>;
};

export default Discover;
