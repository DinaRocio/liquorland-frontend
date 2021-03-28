import { useSelector } from "react-redux";

export default function SessionError(){
  const error = useSelector((state) => state.session.error);
  return <p className="error">{error}</p>
}