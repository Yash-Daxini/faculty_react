import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FacName from "./FacName";
import Route from "react-router-dom";

const SingleFacName = () => {
  const [ans, setans] = useState({});
  let params = useParams();

  const fetchall = () => {
    fetch("https://62da16fd5d893b27b2f0ebab.mockapi.io/faculty")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setans(data);
      });
  };

  useEffect(() => {
    fetch("https://62da16fd5d893b27b2f0ebab.mockapi.io/faculty/" + params.id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setans(data);
      });
  }, []);

  // useEffect(() => {}, []);

  const Delete = () => {
    fetch(`https://62da16fd5d893b27b2f0ebab.mockapi.io/faculty/${params.id}`, {
      method: "DELETE"
    }).then((resp) => {
      resp.json().then((result) => {
        fetchall();
        return (
          <>
            {/* <Route path="/FacName" element={<FacName />}></Route>; */}
          </>
        );
      });
    });
  };

  return (
    <div className="container d-flex justify-content-left ">
      <div className="col-md-3">
        <div className="card my-3 singlehoverclass text-center">
          <img
            src={ans.FacultyImage}
            className="card-img-top"
            alt="Can't Load"
          />
          <div className="card-body text-black">
            <h5 className="card-title text-black">
              <b>{ans.FacultyName}</b>
            </h5>
            <h5 className="card-title text-black">{ans.FacultyDesignation}</h5>
            <hr />
            {ans.FacultyHighestEducation}
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
                    {ans.FacultyExperienceInYears}
                  </label>
                </td>
                <td>
                  <label className="badge bg-secondary">
                    {ans.FacultyWorkingSince}
                  </label>
                </td>
              </tr>
            </table>
            <hr />
            <h6>(M) : +91 - {ans.FacultyMobileNumber}</h6>
            <h6>{ans.FacultyEmailAddress}</h6>
            <h6>{ans.FacultySeating}</h6>
          </div>
        </div>
      </div>
      <div>
        <h2 className="my-2">Profile</h2>
        <p className="text-black">{ans.FacultyProfileDescription}</p>
        <br />
        <br />
        <table>
          <tr>
            <td>
              <b>Area of Specialization</b>
            </td>
            <td>{ans.FacultyAreaSpecialization}</td>
          </tr>
          <tr>
            <td>
              <b>Subjects Taught</b>
            </td>
            <td>{ans.FacultySubjectsTaught}</td>
          </tr>
          <tr>
            <td>
              <b>Membership</b>
            </td>
            <td>{ans.FacultyImage}</td>
          </tr>
        </table>

        <h5 className="btn btn-outline-primary text-black mx-5 my-5 opBtn">
          <Link
            to="../HomeInfo"
            className="text-black"
            style={{ textDecoration: "none" }}
          >
            Back
          </Link>
        </h5>
        <Link to="../FacName">
          <button
            className="btn btn-outline-danger mx-5 my-5 opBtn"
            onClick={Delete}
          >
            Delete
            {/* <Link to="../FacName" className="text-light"
              style={{ textDecoration: "none" }}Delete</Link> */}
          </button>
        </Link>

        <Link to={"../../FacName/" + ans.id + "/Edit"}>
          <button className="btn btn-outline-secondary mx-5 my-5 opBtn">
            Edit
            {/* <Link to="../FacName" className="text-light"
              style={{ textDecoration: "none" }}Delete</Link> */}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleFacName;
