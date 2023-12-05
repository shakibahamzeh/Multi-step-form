import React, { useContext, useState } from "react";
import styles from "./pickAddOns.module.scss";
import { StepContext } from "@/lib/context/step/stepContext";
const PickAddOns:React.FC = () => {

  interface ISelected {
  id?: number;
  value?: string;
  content?: string;
  price?: number;
  }

  interface IAddOn {
  id: number;
  value: string;
  content: string;
  price: number;
  }

  const [selected, setSelected] = useState<Boolean[]>([false, false, false]);
  const [newSelected, setNewSelected] = useState<ISelected[]>([]);
  const step = useContext(StepContext);

  const yearlyData: IAddOn[]  = [
    {
      id: 0,
      value: "Online service",
      content: "Access to multiplayer games",
      price: 10,
    },
    {
      id: 1,
      value: "Larger storage",
      content: "Extra 1TB of cloud save",
      price: 20,
    },
    {
      id: 2,
      value: "Customizable profile",
      content: "Custom theme on your profile",
      price: 20,
    },
  ];

  const monthlyData: IAddOn[]  = [
    {
      id: 0,
      value: "Online service",
      content: "Access to multiplayer games",
      price: 1,
    },
    {
      id: 1,
      value: "Larger storage",
      content: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      id: 2,
      value: "Customizable profile",
      content: "Custom theme on your profile",
      price: 2,
    },
  ];

  const handleSelect = (index:number): void => {
    let newSelect = [...selected];
    newSelect[index] = !newSelect[index];
    console.log(newSelect);
    let myList: ISelected[] = [];
    if (localStorage.getItem("period") === "monthly") {
      newSelect.map((b, i) => {
        if (b) myList.push(monthlyData[index]);
      });
    } else {
      newSelect.map((b, i) => {
        if (b) myList.push(yearlyData[index]);
      });
    }
    setSelected(newSelect);
    setNewSelected(myList);
  };

  const goBackHandler = ():void => {
    step.setStep(2);
    localStorage.setItem("step", "2");
  };
  const submitHandler = ():void => {
    step.setStep(4);
    localStorage.setItem("step", "4");
    localStorage.setItem("ons", JSON.stringify(newSelected));
  };

  return (
    <div className={styles.container}>
      <div>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className={styles.pickAddOnsContainer}>
        {localStorage.getItem("period") === "monthly" ? (
          <>
            {" "}
            {monthlyData.map((item, index) => (
              <div
                className={`${
                  selected[index] ? styles.activeAddOnsContainer : ""
                } ${styles.addOnsContainer}`}
                key={item.id}
                onClick={() => handleSelect(index)}
              >
                <div>
                  <input
                    value={item.value}
                    type="checkbox"
                    checked={selected[index]}
                  />
                </div>
                <div className={styles.content}>
                  <div>
                    <h4>{item.value}</h4>
                    <span>{item.content}</span>
                  </div>
                  <div className={styles.period}>+${item.price}/mo</div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {yearlyData.map((item, index) => (
              <div
                className={`${
                  selected[index] ? styles.activeAddOnsContainer : ""
                } ${styles.addOnsContainer}`}
                onClick={() => handleSelect(index)}
                key={item.id}
              >
                <div>
                  <input
                    value={item.value}
                    type="checkbox"
                    checked={selected[index]}
                    // checked={checked}
                    // onChange={handleChange}
                  />
                </div>
                <div className={styles.content}>
                  <div>
                    <h4>{item.value}</h4>
                    <span>{item.content}</span>
                  </div>
                  <div className={styles.period}>+${item.price}/yr</div>
                </div>
              </div>
            ))}
          </>
        )}
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

export default PickAddOns;
