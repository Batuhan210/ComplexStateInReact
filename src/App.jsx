import "./index.css";
import { useState } from "react";


function App() {
    const [contact, setContact] = useState({
      fName: "",
      lName: "",
      email: "",
    });

    // to inputs
    function handleChange(event) {
      const { value, name } = event.target;
   
      // we hold the previous value
      setContact((prevValue) => {
          return {
            ...prevValue,
            [name] : value
          };
      });
    }
    
      return (
        <div className="container">
          <h1>Hello {contact.fName} {contact.lName} </h1>
            <p>{contact.email}</p>
            <form>
              <input
                  onChange={handleChange}
                  type="text"
                  name="fName"
                  placeholder="First Name"/>

              <input
                onChange={handleChange}
                type="text"
                name="lName"
                placeholder="Last Name"  />

              <input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Email"  />

              <button>Submit</button>
            </form>
        </div>
      );
}
export default App
