import React, { useEffect, useState } from "react";
import { Markup } from "interweave";

const MovieSummary = () => {
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("MovieDetails"));
    setMovieInfo(data);
  }, []);

  const [inputData, setInputData] = useState({
    name: "",
    NoOfTicekt: "",
    mobileno: "",
    email: "",
  });
  const [isToggle, setIsToggle] = useState(false);

  const toggleIt = () => {
    if (isToggle) {
      setIsToggle(false);
    } else {
      setIsToggle(true);
    }
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData({ ...inputData, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...inputData, id: new Date().getTime().toString() };
    localStorage.setItem("userdetails", JSON.stringify(newRecord));
    setInputData({ name: "", NoOfTicekt: "", mobileno: "", email: "" });
    alert("Your Ticket Is Booked Successfully");
    setIsToggle(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <p style={{ fontSize: "40px" }}>
          <b>Movie Summary:</b>
        </p>
        <div>
          {movieInfo.map((data) => {
            return (
              <div
                className="card"
                style={{ height: "25rem", width: "25rem" }}
                key={data.show.id}
              >
                <img
                  src={data.show.image.medium}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{data.show.name}</h5>
                  <div className="card-text" style={{textAlign:"justify"}}>
                    <Markup content={data.show.summary} />
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={toggleIt}
                  >
                    Book A Ticket
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {isToggle && (
        <div style={{ marginLeft: "45px", marginTop: "4%"}}>
          <form
            className="row gy-2 gx-3 align-items-center my-1 mx-5"
            onSubmit={formSubmit}
          >
            {movieInfo.map((data) => {
              return (
                <div key={data.show.id}>
                  <div className="row-auto">
                    <label className="visually-hidden" htmlFor="moviename">
                      {data.show.name}
                    </label>
                    <input
                      type="text"
                      name="moviename"
                      autoComplete="off"
                      className="form-control"
                      id="moviename"
                      placeholder="Movie Name"
                      value={data.show.name}
                    />
                  </div>
                  <div className="row-auto">
                    <label className="visually-hidden" htmlFor="language">
                      {data.show.language}
                    </label>
                    <div className="input-group">
                      <input
                        type="text"
                        name="language"
                        autoComplete="off"
                        className="form-control"
                        id="language"
                        placeholder="Language"
                        value={data.show.language}
                      />
                    </div>
                  </div>
                  <div className="row-auto">
                    <label className="visually-hidden" htmlFor="type">
                      {data.show.type}
                    </label>
                    <input
                      type="text"
                      name="type"
                      autoComplete="off"
                      className="form-control"
                      id="type"
                      placeholder="Type"
                      value={data.show.type}
                    />
                  </div>
                  <div className="row-auto">
                    <label className="visually-hidden" htmlFor="ticketprice">
                      Ticket Price
                    </label>
                    <input
                      type="text"
                      name="ticketprice"
                      autoComplete="off"
                      className="form-control"
                      id="ticketprice"
                      placeholder="Ticket Price"
                      value="₹250"
                    />
                  </div>
                </div>
              );
            })}
            <div className="row-auto">
              <label className="visually-hidden" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                onChange={handleInput}
                value={inputData.name}
                name="name"
                autoComplete="off"
                className="form-control"
                id="name"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="row-auto">
              <label className="visually-hidden" htmlFor="ticket">
                No Of Ticket
              </label>
              <input
                type="text"
                onChange={handleInput}
                value={inputData.NoOfTicekt}
                name="NoOfTicekt"
                autoComplete="off"
                className="form-control"
                id="ticket"
                placeholder="Enter No Of Ticket"
                required
              />
            </div>
            <div className="row-auto">
              <label className="visually-hidden" htmlFor="mobileno">
                Mobile No
              </label>
              <input
                type="text"
                onChange={handleInput}
                value={inputData.mobileno}
                name="mobileno"
                autoComplete="off"
                className="form-control"
                id="mobileno"
                placeholder="Enter Your Mobile No"
                required
              />
            </div>
            <div className="row-auto">
              <label className="visually-hidden" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                onChange={handleInput}
                value={inputData.email}
                name="email"
                autoComplete="off"
                className="form-control"
                id="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="row-auto">
              <button
                type="submit"
                className="btn btn-success"
                style={{ marginLeft: "50%" }}
              >
                Buy
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MovieSummary;
