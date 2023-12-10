import React, { useState, useEffect, useContext } from "react";
import styles from "./personalInfo.module.scss";
import { Validate } from "@/lib/utils/validate";
import { StepContext } from "@/lib/context/step/stepContext";
import {IData} from "@/lib/types/types"


const PersonalInfo : React.FC= () => {

  interface ITouched {
    email:boolean,
    phone:boolean,
    fullName:boolean
  }

  // const [data, setData] = useState<IData>({
  //   email: "",
  //   phone: "",
  //   fullName: "",
  // });

  const [errors, setErrors] = useState<IData>({
    email: "",
    phone: "",
    fullName: "",
  });
  const [touched, setTouched] = useState<ITouched>({
    email: false,
    phone: false,
    fullName: false,
  })
  const [formData, setFormData] = useState<IData>({
    email: "",
    phone: "",
    fullName: "",
  });
  const step = useContext(StepContext);



  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const focusHandler = (event:React.FocusEvent<HTMLInputElement>) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = () => {
    if (!Object.keys(errors).length) {
      console.log("You login successfully", "success");
      step.setStep(2);
      localStorage.setItem('step','2');
      localStorage.setItem('formData', JSON.stringify(formData));
    } else {
      console.log("Invalid data", "error");
      setTouched({
        email: true,
        phone: true,
        fullName: true,
      });
    }
  };



  useEffect(() => {
    setErrors(Validate(formData));
  }, [formData, touched]);

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);


  return (
    <div className={styles.container}>
      <div>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <form className={styles.form} >
        <div className={styles.formControl}>
          <label>Name</label>
          <input
            type="text"
            placeholder="e.g. Stephen King"
            name="fullName"
            onChange={changeHandler}
            onFocus={focusHandler}
            value={formData.fullName}
            className={(errors.fullName && touched.fullName) ? styles.uncompleted : ""}
          />
          {errors.fullName && touched.fullName && (
            <span className={styles.error}>{errors.fullName}</span>
          )}
        </div>
        <div className={styles.formControl}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="e.g. stephrnking@lorem.com"
            name="email"
            onChange={changeHandler}
            value={formData.email}
            onFocus={focusHandler}
            className={(errors.email && touched.email) ? styles.uncompleted : ""}
          />
          {errors.email && touched.email && <span className={styles.error}>{errors.email}</span>}
        </div>
        <div className={styles.formControl}>
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="e.g. +1 234 567 897"
            name="phone"
            onChange={changeHandler}
            onFocus={focusHandler}
            value={formData.phone}
            className={(errors.phone && touched.phone) ? styles.uncompleted : ""}
          />
          {errors.phone && touched.phone && <span className={styles.error}>{errors.phone}</span>}
        </div>
      </form>
      <div className={styles.buttonContainer}>
        <button className={Object.keys(errors).length ? styles.deActive : styles.button} onClick={submitHandler} disabled={Object.keys(errors).length > 0}>Next Step</button>
        {/* <button className={styles.backButton}>Go Back</button> */}
      </div>
    </div>
  );
};

export default PersonalInfo;
