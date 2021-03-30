import { useSelector } from "react-redux";

export default function UsersError() {
  const errors = useSelector((state) => state.users.errors);
  return (
    <div className="error">
      {Object.entries(errors).map((error) => (
        <p>
          {error[0]}: {error[1].join(", ")}
        </p>
      ))}
    </div>
  );
}
