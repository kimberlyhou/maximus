import React, { useState, useRef } from "react";
import "./Form.scss";

export default function Form() {
  const [toggle, setToggle] = useState(false);
  const [obj, setObj] = useState({});
  let divRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    let form = document.querySelector("form");
    const data = new FormData(form);
    const json = {};
    Array.from(data.entries()).forEach(([key, value]) => {
      json[key] = value;
    });
    setObj(json);

    setToggle(true);
  }

  return (
    <>
      {!toggle ? (
        <div className="form-container">
          <h2>Metadata Writer</h2>
          <div>
            Tool to convert song metadata into a pre-formatted structure
          </div>
          <form
            id="my-form"
            method="POST"
            action=""
            encType="multipart/form-data"
          >
            <div className="field">
              <div
                id="drop_zone"
                onDrag={() => {}}
                onDrop={() => {}}
                className="drag"
              >
                <img
                  className="logo"
                  alt="Maximus Music Group logo"
                  src={require("../../assets/MAXIMUS-SJA-1B.jpg")}
                ></img>
              </div>
            </div>
            <div className="form-group ">
              <div className="field">
                <input placeholder="First Name" type="text" name="firstName" />
              </div>
              <div className="field">
                <input placeholder="Last Name" type="text" name="lastName" />
              </div>

              <div className="field">
                <input placeholder="Contact Number" type="tel" name="number" />
              </div>
              <div className="field">
                <input placeholder="Email" type="email" name="email" />
              </div>
              <div className="field">
                <input placeholder="Song Name" type="text" name="title" />
              </div>
              <div className="field">
                <label for="previousReleaseOrDistribution">
                  Has this song been previously released or distributed?
                </label>
                <select
                  id="previousReleaseOrDistribution"
                  class="select"
                  name="previousReleaseOrDistribution"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="field">
                <label for="explicitLyrics">
                  Does this song have explicit lyrics?
                </label>
                <select
                  id="explicitLyrics"
                  class="select"
                  name="explicitLyrics"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="field">
                <label for="hasPublisher">
                  Is this song listed with a publisher?
                </label>
                <select id="hasPublisher" class="select" name="hasPublisher">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="field">
                <label for="opportunitySubmission">
                  Are you submitting this for a specific opportunity we sent
                  you?
                </label>
                <select
                  id="opportunitySubmission"
                  class="select"
                  name="opportunitySubmission"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="field bottom">
                <input
                  placeholder="If yes, what is the opportunity name?"
                  type="text"
                  name="opportunityName"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="field">
                <input placeholder="Artist" type="text" name="artist" />
              </div>
              <div className="field">
                <input placeholder="BPM" type="text" name="bpm" />
              </div>
              <div className="field">
                <input placeholder="Initial Key" type="text" name="key" />
              </div>
              <div className="field">
                <input placeholder="Genre" type="text" name="genre" />
              </div>
            </div>
            <div className="form-group">
              <div className="field">
                <textarea
                  placeholder={
                    "Songwriter(s)/Composer(s) with IPI #s \nExample: FirstName LastName (BMI #12345678)"
                  }
                  className="form-control"
                  type="text"
                  name="composer"
                />
              </div>
              <div className="field">
                <textarea
                  placeholder="Description (Mood, Feel, Instruments, Keywords, etc. separated by commas"
                  className="form-control"
                  type="text"
                  name="desc"
                />
              </div>
              <div className="field">
                <textarea
                  placeholder="Lyrics"
                  className="form-control"
                  type="text"
                  name="lyrics"
                />
              </div>
              <div className="button">
                <button className="btn btn-primary" onClick={onSubmit}>
                  Get Comment Data
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <>
          <div className="container">
            <div className="grey-container">
              <div ref={divRef} className="clipboard">
                <div>First Name: {obj["firstName"]} </div>
                <div>Last Name: {obj["lastName"]}</div>
                <div>Contact Number: {obj["number"]}</div>
                <div>Email: {obj["email"]}</div>
                <div>
                  Has this song been previously released or distributed:{" "}
                  {obj["previousReleaseOrDistribution"]}
                </div>
                <div>
                  Does this song have explicit lyrics: {obj["explicitLyrics"]}
                </div>
                <div>
                  Is this song listed with a publisher: {obj["hasPublisher"]}
                </div>
                <div>
                  Are you submitting this for a specific opportunity we sent
                  you: {obj["opportunitySubmission"]}
                </div>
                <div>Opportunity Name: {obj["opportunityName"]}</div>
                <br />
                <div>Song Name: {obj["title"]}</div>
                <div>Artist: {obj["artist"]}</div>
                <div>BPM: {obj["bpm"]}</div>
                <div>Genre: {obj["genre"]}</div>
                <div>Description: {obj["desc"]}</div>
                <div>Initial Key: {obj["key"]}</div>
                <br />
                <div>RIGHTS HOLDERS</div>
                <div>Songwriter(s):</div>
                {obj["composer"].split(/[\n]+/).map((writer) => {
                  return (
                    <>
                      <div>{writer}</div>
                    </>
                  );
                })}
                <br />
                <br />
                <div>
                  SYNC LICENSING For licensing, please contact: Maxwell Elefant
                  (max@maximusmusicgroup.com), Stephen Antonelli
                  (stephen@maximusmusicgroup.com) !!!-ONE STOP READY-!!!
                </div>
              </div>
              <div className="clipboard">
                <div>
                  <label>Lyrics: </label>
                </div>
                {obj["lyrics"].split(/[\n]+/).map((lyrics) => {
                  return (
                    <>
                      <div>{lyrics}</div>
                    </>
                  );
                })}
              </div>
            </div>
            <button
              className="btn btn-primary back-button"
              onClick={() => setToggle(false)}
            >
              Back
            </button>
          </div>
        </>
      )}
    </>
  );
}
