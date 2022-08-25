const HomeInfo = () => {
    return (
      <div
        className="container text-center my-3 text-black content"
        style={{ border: "1px" }}
      >
        <h1 className="my-4">Faculty Portal Darshan University</h1>
        <h3>
          <ul
            style={{
              display: "inline",
              listStyle: "square inside url('sqpurple.gif');"
            }}
          >
            <div className="card border-0">
              <li className="my-4">
                <div className="card-body">Faculty Details</div>
              </li>
            </div>
            <div className="card border-0">
              <li className="my-3">
                <div className="card-body">Add New Information Of Faculties</div>
              </li>
            </div>
            <div className="card border-0">
              <li className="my-3">
                <div className="card-body">
                  Delete The Information Of Faculties
                </div>
              </li>
            </div>
            <div className="card border-0">
              <li className="my-3">
                <div className="card-body">Update Information Of Faculties</div>
              </li>
            </div>
          </ul>
        </h3>
      </div>
    );
  };
  
  export default HomeInfo;
  