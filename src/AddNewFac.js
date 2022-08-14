import { useState } from "react";

const AddNewFac = () => {
  const [obj, setobj] = useState({});

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
            value={obj.FacultyName}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setobj({ ...obj, FacultyName: e.target.value });
            }}
          />
          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Enter Faculty Designation
          </label>
          <input
            type="text"
            className="form-control"
            value={obj.FacultyDesignation}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setobj({ ...obj, FacultyDesignation: e.target.value });
            }}
          />
          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Enter Faculty Highest Education
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={obj.FacultyHighestEducation}
            aria-describedby="emailHelp"
            onChange={(e) => {
              setobj({ ...obj, FacultyHighestEducation: e.target.value });
            }}
          />
          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Enter Faculty Experience In Years
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={obj.FacultyExperienceInYears}
            aria-describedby="emailHelp"
            onChange={(e) => {
              setobj({ ...obj, FacultyExperienceInYears: e.target.value });
            }}
          />

          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Enter Faculty Working Since
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={obj.FacultyWorkingSince}
            aria-describedby="emailHelp"
            onChange={(e) => {
              setobj({ ...obj, FacultyWorkingSince: e.target.value });
            }}
          />

          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Enter Mobile Number
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={obj.FacultyMobileNumber}
            aria-describedby="emailHelp"
            onChange={(e) => {
              setobj({ ...obj, FacultyMobileNumber: e.target.value });
            }}
          />

          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Enter Faculty Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={obj.FacultyEmailAddress}
            aria-describedby="emailHelp"
            onChange={(e) => {
              setobj({ ...obj, FacultyEmailAddress: e.target.value });
            }}
          />

          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Enter Faculty Seating
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={obj.FacultySeating}
            aria-describedby="emailHelp"
            onChange={(e) => {
              setobj({ ...obj, FacultySeating: e.target.value });
            }}
          />

          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Enter Faculty Profile Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={obj.FacultyProfileDescription}
            aria-describedby="emailHelp"
            onChange={(e) => {
              setobj({ ...obj, FacultyProfileDescription: e.target.value });
            }}
          />

          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Enter Faculty Area Specialization
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={obj.FacultyAreaSpecialization}
            aria-describedby="emailHelp"
            onChange={(e) => {
              setobj({ ...obj, FacultyAreaSpecialization: e.target.value });
            }}
          />

          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Enter Faculty Subjects Taught
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={obj.FacultySubjectsTaught}
            aria-describedby="emailHelp"
            onChange={(e) => {
              setobj({ ...obj, FacultySubjectsTaught: e.target.value });
            }}
          />

          <label htmlFor="exampleInputEmail1" className="form-label my-2">
            Enter Faculty Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={obj.FacultyImage}
            aria-describedby="emailHelp"
            onChange={(e) => {
              setobj({ ...obj, FacultyImage: e.target.value });
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-outline-success"
          onClick={(e) => {
            e.preventDefault();
            fetch("https://62da16fd5d893b27b2f0ebab.mockapi.io/faculty", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify(obj)
            }).then((res) => {
              console.log(res.status);
              res.json().then((data) => {
                console.warn(data);
                setobj({
                  ...obj,
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
              });
            });
          }}
        >
          Add Faculty
        </button>
      </form>
    </div>
  );
};

export default AddNewFac;
