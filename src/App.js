import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    comments: false,
    candidates:false,
    offers: false,
    mode: "",
  });

  console.log(formData);
  function changeHandler(event){
    const {name, value, checked, type}= event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className="flex flex-col items-center">
      <form className="flex flex-wrap flex-col w-[765px] max-w-[90%] gap-[7px] shadow-lg p-8 pl-9 items-start" onSubmit={submitHandler}>
        <label htmlFor="firstName" className="font-medium text-sm">First Name</label>
        <input type="text" name="firstName" id="firstName" value={formData.firstName} placeholder="Sahil" onChange={changeHandler} className="border rounded-lg border-blue-300 p-2 w-full"/>

        <label htmlFor="lastName" className="font-medium text-sm">Last Name</label>
        <input type="text" name="lastName" id="lastName" value={formData.lastName} placeholder="Kumar" onChange={changeHandler} className="border rounded-lg border-blue-300 p-2 w-full"/>

        <label htmlFor="email" className="font-medium text-sm">Email Address</label>
        <input type="text" name="email" id="email" value={formData.email} placeholder="xxx@gmail.com" onChange={changeHandler} className="border rounded-lg border-blue-300 p-2 w-full"/>

        <label htmlFor="country" className="font-medium text-sm">Country</label>
        <select name="country" id="country" onChange={changeHandler} value={formData.country} className="border rounded-lg border-blue-300 p-2 w-full">
          <option value="Choose">Choose Country</option>
          <option value="India">India</option>
          <option value="USA">United States</option>
          <option value="Mexico">Mexico</option>
          <option value="germany">Germany</option>
          <option value="Russia">Russia</option>
        </select>

        <label htmlFor="street" className="font-medium text-sm">Street Address</label>
        <input type="text" name="street" id="street" value={formData.street} placeholder="Nikuwana" onChange={changeHandler} className="border rounded-lg border-blue-300 p-2 w-full"/>

        <label htmlFor="city" className="font-medium text-sm">City</label>
        <input type="text" name="city" id="city" value={formData.city} placeholder="Ratia" onChange={changeHandler} className="border rounded-lg border-blue-300 p-2 w-full"/>
        
        <label htmlFor="state" className="font-medium text-sm">State/Province</label>
        <input type="text" name="state" id="state" value={formData.state} placeholder="Haryana" onChange={changeHandler} className="border rounded-lg border-blue-300 p-2 w-full"/>

        <label htmlFor="zip" className="font-medium text-sm">Zip/Pin Code</label>
        <input type="text" name="zip" id="zip" value={formData.zip} placeholder="125051" onChange={changeHandler} className="border rounded-lg border-blue-300 p-2 w-full"/>

        <label className="font-medium text-sm">By Email</label>
        <fieldset className="mt-2 flex flex-col gap-3 w-full">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4" name="comments" id="comments" checked={formData.comments} onChange={changeHandler}/>
            <div>
              <label htmlFor="comments" className="font-medium text-sm">Comments</label>
              <p className="text-sm font-light">Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4" name="candidates" id="candidates" checked={formData.candidates} onChange={changeHandler}/>
            <div>
              <label htmlFor="candidates" className="font-medium text-sm">Candidates</label>
              <p className="text-sm font-light">Get notified when a candidate applies for a job.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input type="checkbox" className="h-4 w-4" name="offers" id="offers" checked={formData.offers} onChange={changeHandler}/>
            <div>
              <label htmlFor="offers" className="font-medium text-sm">Offers</label>
              <p className="text-sm font-light">Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>

        <div>
          <label className="font-medium text-sm">Push Notification</label>
          <p className="text-sm font-light">These are delivered via SMS to your mobile phone.</p>
        </div>
        <fieldset className="flex flex-col gap-2 mt-2">
          <div className="flex flex-row gap-2 items-center">
            <input type="radio" name="mode" id="everything" value="everything" onChange={changeHandler} checked={formData.mode==="everything"} className="h-4 w-4"/>
            <label htmlFor="everything" className="font-medium text-sm">Everything</label>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <input type="radio" name="mode" id="same" value="same-as-email" onChange={changeHandler} checked={formData.mode==="same-as-email"} className="h-4 w-4"/>
            <label htmlFor="same" className="font-medium text-sm">Same as Email</label>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <input type="radio" name="mode" id="push" value="no-push-notification" onChange={changeHandler} checked={formData.mode==="no-push-notification"} className="h-4 w-4"/>
            <label htmlFor="push" className="font-medium text-sm">No push notification</label>
          </div>
        </fieldset>

        <button className="bg-blue-500 text-white mt-1 font-bold text-center pt-2 pb-2 pl-4 pr-4 rounded-md">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
