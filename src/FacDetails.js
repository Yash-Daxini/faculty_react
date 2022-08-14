import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const FacDetails = () => {
  const [Obj, setObj] = useState([]);

  useEffect(() => {
    fetch("https://62da16fd5d893b27b2f0ebab.mockapi.io/faculty")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setObj(data);
      });
  }, []);

  let faculties = Obj;

  var detail = faculties.map((Obj) => {
    return (
      <div className="col-md-3">
        <Link to={"../FacName/" + Obj.id} style={{ textDecoration: "none" }}>
          <div className="col-md-3">
            <div className="card my-3 hoverclass text-center">
              <img
                src={Obj.FacultyImage}
                className="card-img-top"
                alt="Can't Load"
              />
              <div className="card-body text-black">
                <h6 className="card-title text-black">
                  <b>{Obj.FacultyName}</b>
                </h6>
                <h6 className="card-title text-black">
                  {Obj.FacultyDesignation}
                </h6>
                {/* <hr /> */}
                {Obj.FacultyHighestEducation}
                <hr />
                <table>
                  <tr>
                    <td>
                      <h6>Experience&ensp;</h6>
                    </td>
                    <td>
                      <h6>&ensp;WorkingSince</h6>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="badge bg-secondary">
                        {Obj.FacultyExperienceInYears}
                      </label>
                    </td>
                    <td>
                      <label className="badge bg-secondary">
                        {Obj.FacultyWorkingSince}
                      </label>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 className="my-3">Faculty Detail</h1>
      <div className="row">{detail}</div>
    </div>
  );
};

export default FacDetails;
