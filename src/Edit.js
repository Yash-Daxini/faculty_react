import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import SingleFacDetail from "./SingleFacDetail";

const Edit = () => {
  const [eobj, seteobj] = useState({});
  const param = useParams();

  useEffect(() => {
    fetch("https://62da16fd5d893b27b2f0ebab.mockapi.io/faculty/" + param.id)
      .then((response) => {
        // alert(param.id);
        return response.json();
      })
      .then((data) => {
        // alert(data.FacultyName);
        // console.log(data);
        seteobj(data);
      });
    console.log(eobj);
  }, []);

  return (
    <div className="text-center container my-3">
      <h1 className="my-3">Fill The Form To Add New Faculty</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Faculty Name
          </label>
          <input
            type="text"
            className="form-control"
            value={eobj.FacultyName}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              seteobj({ ...eobj, FacultyName: e.target.value });
            }}
          />
          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Enter Faculty Designation
          </label>
          <input
            type="text"
            className="form-control"
            value={eobj.FacultyDesignation}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              seteobj({ ...eobj, FacultyDesignation: e.target.value });
            }}
          />
          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Enter Faculty Highest Education
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={eobj.FacultyHighestEducation}
            aria-describedby="emailHelp"
            onChange={(e) => {
              seteobj({ ...eobj, FacultyHighestEducation: e.target.value });
            }}
          />
          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Enter Faculty Experience In Years
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={eobj.FacultyExperienceInYears}
            aria-describedby="emailHelp"
            onChange={(e) => {
              seteobj({ ...eobj, FacultyExperienceInYears: e.target.value });
            }}
          />

          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Enter Faculty Working Since
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={eobj.FacultyWorkingSince}
            aria-describedby="emailHelp"
            onChange={(e) => {
              seteobj({ ...eobj, FacultyWorkingSince: e.target.value });
            }}
          />

          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Enter Mobile Number
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={eobj.FacultyMobileNumber}
            aria-describedby="emailHelp"
            onChange={(e) => {
              seteobj({ ...eobj, FacultyMobileNumber: e.target.value });
            }}
          />

          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Enter Faculty Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={eobj.FacultyEmailAddress}
            aria-describedby="emailHelp"
            onChange={(e) => {
              seteobj({ ...eobj, FacultyEmailAddress: e.target.value });
            }}
          />

          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Enter Faculty Seating
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={eobj.FacultySeating}
            aria-describedby="emailHelp"
            onChange={(e) => {
              seteobj({ ...eobj, FacultySeating: e.target.value });
            }}
          />

          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Enter Faculty Profile Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={eobj.FacultyProfileDescription}
            aria-describedby="emailHelp"
            onChange={(e) => {
              seteobj({ ...eobj, FacultyProfileDescription: e.target.value });
            }}
          />

          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Enter Faculty Area Specialization
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={eobj.FacultyAreaSpecialization}
            aria-describedby="emailHelp"
            onChange={(e) => {
              seteobj({ ...eobj, FacultyAreaSpecialization: e.target.value });
            }}
          />

          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Enter Faculty Subjects Taught
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={eobj.FacultySubjectsTaught}
            aria-describedby="emailHelp"
            onChange={(e) => {
              seteobj({ ...eobj, FacultySubjectsTaught: e.target.value });
            }}
          />

          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Enter Faculty Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={eobj.FacultyImage}
            aria-describedby="emailHelp"
            onChange={(e) => {
              seteobj({ ...eobj, FacultyImage: e.target.value });
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-outline-success"
          onClick={(e) => {
            e.preventDefault();
            fetch(
              "https://62da16fd5d893b27b2f0ebab.mockapi.io/faculty/" + param.id,
              {
                method: "PUT",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(eobj)
              }
            ).then((res) => {
              console.log(res.status);
              res.json().then((data) => {
                // alert(data.FacultyName);
              });
            });
            seteobj({
              ...eobj,
              FacultyName: "",
              FacultyDesignation: "",
              FacultyHighestEducation: "",
              FacultyExperienceInYears: "",
              FacultyWorkingSince: "",
              FacultyMobileNumber: "",
              FacultyEmailAddress: "",
              FacultySeating: "",
              FacultyProfileDescription: "",
              FacultyAreaSpecialization: "",
              FacultySubjectsTaught: "",
              FacultyImage: ""
            });
          }}
        >
          Add Faculty
        </button>
      </form>
    </div>
  );
};

export default Edit;
