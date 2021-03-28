import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import Template from "../templates/Template";


export default function Search (){
  const token = useSelector((state) => state.session.token)

  if (!token) {
    return <Redirect to="/login" />;
  }
  return (
    <Template>
    <p>Search</p>
  </Template>
  );
}
