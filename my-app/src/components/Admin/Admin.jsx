import React, { useState } from "react";

import Drop from "./Dropdown";
export default function Admin() {
  const [selectedForm, setSelectedForm] = useState(null);
  const handleSelect = (formType) => {
    setSelectedForm(formType);
  };
  const renderForm = () => {
    switch (selectedForm) {
      case "form1":
        return (
          <form className="p-4 border rounded mt-4 ">
            <h3 className="text-lg font-semibold mb-2">New Born Details</h3>
            <label className="block mb-2">
              Species Name:
              <input
                type="text"
                name="species"
                className="block w-full mt-1 p-2 border rounded"
              />
              DOB.
              <input
                type="text"
                name="birth"
                className="block w-full mt-1 p-2 border rounded"
              />
            </label>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
              Submit
            </button>
          </form>
        );
      case "form2":
        return (
          <form className="p-4 border rounded mt-4">
            <h3 className="text-lg font-semibold mb-2">
              Rescued Animal Details
            </h3>
            <label className="block mb-2">
              Date of rescue:
              <input
                type="email"
                name="Date"
                className="block w-full mt-1 p-2 border rounded"
              />
              Name of Species
              <input
                type="email"
                name="Species"
                className="block w-full mt-1 p-2 border rounded"
              />
              No of species
              <input
                type="email"
                name="NoOfSpecies"
                className="block w-full mt-1 p-2 border rounded"
              />
              Sex Ratio
              <input
                type="email"
                name="SexRatio"
                className="block w-full mt-1 p-2 border rounded"
              />
              Received from
              <input
                type="email"
                name="RecievedFrom"
                className="block w-full mt-1 p-2 border rounded"
              />
            </label>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
              Submit
            </button>
          </form>
        );
      case "form3":
        return (
          <form className="p-4 border rounded mt-4">
            <h3 className="text-lg font-semibold mb-2">Exchange details</h3>
            <label className="block mb-2">
              Date:
              <input
                type="email"
                name="Date"
                className="block w-full mt-1 p-2 border rounded"
              />
              Species:
              <input
                type="email"
                name="Species"
                className="block w-full mt-1 p-2 border rounded"
              />
              Sex Ratio:
              <input
                type="email"
                name="SexRatio"
                className="block w-full mt-1 p-2 border rounded"
              />
              Recieved From:
              <input
                type="email"
                name="RecievedFrom"
                className="block w-full mt-1 p-2 border rounded"
              />
            </label>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
              Submit
            </button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Admin Panel</h1>
          <h2>Animals</h2>
        </div>
        <h1>Aru</h1>
        <Drop />
      </div> */}
      

      <div className="text-center text-3xl font-bold pb-3">Admin Panel</div>
      {/* event buton  */}

      {/* <div><div className="flex flex-col items-center"></div>
        <div className="relative inline-block">
          <button
            className="bg-gray-700 text-white py-2 px-4 rounded focus:outline-none"
            onClick={() => setSelectedForm(selectedForm ? null : "dropdown")}
          >
            Events
          </button>
          {selectedForm === "dropdown" && (
            <ul className="absolute mt-2 bg-white border rounded shadow-lg w-48">
              <li>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                  onClick={() => handleSelect("form1")}
                >
                  New Born
                </button>
              </li>
              <li>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                  onClick={() => handleSelect("form2")}
                >
                  Rescue
                </button>
              </li>
              <li>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                  onClick={() => handleSelect("form3")}
                >
                  Exchange
                </button>
              </li>
            </ul>
          )}
        </div>

        {renderForm()}
      </div> */}

      {/* animal button  */}

      <div className="flex flex-col items-center">
        <div className="relative inline-block">
          <button
            className="bg-gray-700 text-white py-2 px-4 rounded focus:outline-none"
            onClick={() => setSelectedForm(selectedForm ? null : "dropdown")}
          >
            Animals
          </button>
          {selectedForm === "dropdown" && (
            <ul className="absolute mt-2 bg-white border rounded shadow-lg w-48">
              <li>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                  onClick={() => handleSelect("form1")}
                >
                  New Born
                </button>
              </li>
              <li>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                  onClick={() => handleSelect("form2")}
                >
                  Rescue
                </button>
              </li>
              <li>
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
                  onClick={() => handleSelect("form3")}
                >
                  Exchange
                </button>
              </li>
            </ul>
          )}
        </div>

        {renderForm()}
      </div>
      );
    </>
  );
}
