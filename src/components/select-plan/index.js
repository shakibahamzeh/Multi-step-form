import React, { useContext, useState } from "react";
import styles from "./selectPlan.module.scss";
import Image from "next/image";
import { Toggle } from "rsuite";
import { StepContext } from "@/lib/context/step/stepContext";
const SelectPlan = () => {
  const planDataMonthly = [
    { id: 0, title: "Arcade", icon: "/icon-arcade.svg", price: 9 },
    { id: 1, title: "Advanced", icon: "/icon-advanced.svg", price: 12 },
    { id: 2, title: "Pro", icon: "/icon-pro.svg", price: 15 },
  ];
  const planDataYearly = [
    { id: 0, title: "Arcade", icon: "/icon-arcade.svg", price: 90 },
    { id: 1, title: "Advanced", icon: "/icon-advanced.svg", price: 120 },
    { id: 2, title: "Pro", icon: "/icon-pro.svg", price: 150 },
  ];
  const [time, setTime] = useState("monthly");
  const [isChecked, setIsChecked] = useState("monthly");
  const handleChange = () => {
    if (isChecked === "monthly") {
      setIsChecked("yearly");
      setTime("yearly");
    } else {
      setIsChecked("monthly");
      setTime("monthly");
    }
  };
  const step = useContext(StepContext);
  const goBackHandler = () => {
    step.setStep(1);
    localStorage.setItem("step", "1");
  };
  const [data, setData] = useState({
    id: "",
    icon: "",
    price: "",
    title: "",
  });
  const activeHandler = (item) => {
    setActiveId(item.id);
  };
  const submitHandler = (item) => {
    step.setStep(3);
    localStorage.setItem("step", "3");

    localStorage.setItem("plan", JSON.stringify(data));
  };
  const [activeId, setActiveId] = useState(0);

  return (
    <div className={styles.container}>
      <div>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div>
        <div className={styles.cards}>
          {time === "monthly" ? (
            <>
              {planDataMonthly.map((item) => (
                <div
                  key={item.id}
                  className={`${
                    item.id === activeId ? styles.activeCard : ""
                  } ${styles.card}`}
                  onClick={activeHandler}
                >
                  <Image src={item.icon} width={50} height={50} alt="" />
                  <h3>{item.title}</h3>
                  <span>${item.price}/mo</span>
                </div>
              ))}
            </>
          ) : (
            <>
              {planDataYearly.map((item) => (
                <div
                  key={item.id}
                  className={`${
                    item.id === activeId ? styles.activeCard : ""
                  } ${styles.card}`}
                  onClick={activeHandler}
                >
                  <Image src={item.icon} width={50} height={50} alt="" />
                  <h3>{item.title}</h3>
                  <span>${item.price}/yr</span>
                  <p>2 month free</p>
                </div>
              ))}
            </>
          )}
        </div>
        <div className={styles.toggle}>
          <div
            className={
              isChecked === "monthly" ? styles.active : styles.toggleTitle
            }
          >
            Monthly
          </div>
          <label className={styles.switch}>
            <input type="checkbox" value={isChecked} onChange={handleChange} />
            <div className={styles.slider}></div>
          </label>
          <div
            className={
              isChecked === "yearly" ? styles.active : styles.toggleTitle
            }
          >
            Yearly
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={submitHandler}>
          Next Step
        </button>
        <button className={styles.backButton} onClick={goBackHandler}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default SelectPlan;
