import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const FacName = () => {
  const [ans, setans] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch("https://62da16fd5d893b27b2f0ebab.mockapi.io/faculty")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setans(data);
      });
  }, []);

  let faculties = ans;

  var arrFac = faculties.map((Obj) => {
    return (
      <Link
        to={"./" + Obj.id}
        style={{ textAlign: "center", textDecoration: "none" }}
      >
        <div className="card" id="dcard">
          <div className="card-body">{Obj.FacultyName}</div>
        </div>
      </Link>
    );
  });

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 className="my-3">Faculty Name</h1>
      {arrFac}
    </div>
  );
};

export default FacName;
