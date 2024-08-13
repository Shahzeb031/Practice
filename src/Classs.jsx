import { Loader2 } from "lucide-react";
import { useState } from "react";

const Final3 = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    Age: "",
    gender: "",
  });
  const [loader, setLoader] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setLoader(true);
    console.log("button", formData);
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="flex flex-col gap-4" onSubmit={handleClick}>
        <div className="flex flex-col">
          <label>Full Name</label>
          <input
            className="border border-gray-300 rounded px-2 focus-visible:outline-none"
            placeholder="Type full name..."
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label>Email</label>
          <input
            className="border border-gray-300 rounded px-2 focus-visible:outline-none"
            placeholder="Type your email..."
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label>Password</label>
          <input
            className="border border-gray-300 rounded px-2 focus-visible:outline-none"
            placeholder="Type your password..."
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label>Age</label>
          <input
            className="border border-gray-300 rounded px-2 focus-visible:outline-none"
            placeholder="Enter your Age"
            type="Number"
            id="Age"
            value={formData.Age}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label>Gender</label>
          <input
            className="border border-gray-300 rounded px-2 focus-visible:outline-none"
            placeholder="Enter your Gender"
            type="Radio"
            id="Gender"
            value={formData.Gender}
            onChange={handleChange}
          />
        </div>
        <button
          className="border border-blue-500 gap-2 rounded px-3 py-2 flex items-center justify-center"
          type="submit"
        >
          {loader && (
            <Loader2 className="animate-spin text-blue-500" />
          )}
          Submit
        </button>
      </form>
    </div>
  );
};

export default Final3;