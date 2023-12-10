import React, { useContext, useState , useEffect} from "react";
import styles from "./selectPlan.module.scss";
import Image from "next/image";
import { StepContext } from "@/lib/context/step/stepContext";



const SelectPlan: React.FC = () => {
  interface  IPlan {
    id:number | undefined, 
    icon: string | undefined,
    price: string | number | undefined,
    title: string | undefined
  }

  const [time, setTime] = useState("monthly");
  const [isChecked, setIsChecked] = useState("monthly");
  const step = useContext(StepContext);
  const [selectedPlan, setSelectedPlan] = useState<IPlan>({
    id: 0,
    icon: "",
    price: "",
    title: "",
  });

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
 
  const handleChange = () => {
    const newTime = time === "monthly" ? "yearly" : "monthly";
    setIsChecked(newTime);
    setTime(newTime);
  };

  const goBackHandler = () => {
    step.setStep(1);
    localStorage.setItem("step", "1");
 
  };

  const activeHandler = (item: any) => {
    setSelectedPlan(item)
  };

  const submitHandler = () => {
    step.setStep(3);
    localStorage.setItem("step", "3");
    localStorage.setItem('selectedPlan', JSON.stringify(selectedPlan));
    localStorage.setItem('period', time)
  };

  useEffect(() => {
    const storedPlan = localStorage.getItem('selectedPlan');
    const storedPeriod = localStorage.getItem('period');
    if (storedPlan) {
      setSelectedPlan(JSON.parse(storedPlan));
    }
    if (storedPeriod){
      setTime(storedPeriod)
      setIsChecked(storedPeriod === "monthly" ? 'monthly' : 'yearly');
    }
  }, []);


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
                    item.id === selectedPlan.id ? styles.activeCard : ""
                  } ${styles.card}`}
                  onClick={() => activeHandler(item)}
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
                    item.id === selectedPlan.id ? styles.activeCard : ""
                  } ${styles.card}`}
                  onClick={() => activeHandler(item)}
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
            <div className={isChecked === "monthly" ? styles.active : styles.toggleTitle}>
              Monthly
            </div>
            <label className={styles.switch}>
              <input type="checkbox" checked={isChecked === "yearly"} onChange={handleChange} />
              <div className={styles.slider}></div>
            </label>
            <div className={isChecked === "yearly" ? styles.active : styles.toggleTitle}>
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
