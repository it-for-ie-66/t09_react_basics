import { useState, ChangeEvent } from "react";

function T03() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.id);
    if (e.target.id === "fname") {
      setFirstName(e.target.value);
    } else if (e.target.id === "lname") {
      setLastName(e.target.value);
    }
  }

  // let fullName = "Enter your name";
  // if (firstName || lastName) {
  //   fullName = `${firstName} ${lastName}`;
  // }
  const fullName = `${firstName} ${lastName}`.trim() || "Enter your name";

  return (
    <>
      <div>{fullName}</div>
      <div>
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" onChange={handleChange} />
      </div>
    </>
  );
}

export default T03;
