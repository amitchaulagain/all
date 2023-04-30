import React from "react";
import cover from "../../../img/coverImg.png";
import styles from "../../../css/Cover.module.css";
import Select from 'react-select';




const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
]


const customStyles = {
    control: base => ({
        ...base,
        height: 45,
        minHeight: 35
    })
};
const TravelWidget = () => {
  return (

      <div className="col-lg-4 col-md-7 travel-panel">
          <div className="col-lg-6 col-md-6  ">
              <div className="travel-label">I hold a passport from </div>
              <br></br>
              <div className="travel-label">State of residence </div>
              <br></br>
              <div className="travel-label">I am going to </div>
              <br></br>
              <div className="travel-label">My purpose of trip </div>


          </div>
          <div className="col-lg-6 col-md-6">

              <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={colourOptions[0]}
                  isClearable={false}
                  isSearchable={true}
                  name="passport_from"
                  options={colourOptions}
                  styles={customStyles}
              />
              <br/>
              <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={colourOptions[0]}
                  isClearable={true}
                  isSearchable={true}
                  name="passport_from"
                  options={colourOptions}
                  styles={customStyles}
              />
              <br/>
              <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={colourOptions[0]}
                  isClearable={true}
                  isSearchable={true}
                  name="passport_from"
                  options={colourOptions}
                  styles={customStyles}
              />
              <br/>
              <Select
                  className="basic-single"
                  classNamePrefix="select"
                  defaultValue={colourOptions[0]}
                  isClearable={true}
                  isSearchable={true}
                  name="passport_from"
                  options={colourOptions}
                  styles={customStyles}
              />

              <button type="button" className="btn btn-primary mt-30 button-color">SUBMIT</button>

          </div>




      </div>



  );
};

export default TravelWidget;
