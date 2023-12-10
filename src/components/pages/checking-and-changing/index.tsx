import React, { useContext,useState,useEffect } from "react";
import styles from "./checkingBeforeFinish.module.scss";
import { StepContext } from "@/lib/context/step/stepContext";

const CheckingAndChange: React.FC= () => {
  interface Plan {
    title: string;
    price: number;
  }
  
  interface OnsItem {
    id: number;
    value: string;
    price: number;
  }

  const planJSON: string | null = localStorage.getItem("plan");
  const period: string | null = localStorage.getItem("period");
  const onsJSON: string | null = localStorage.getItem("ons");
  const step = useContext(StepContext);
  const [total, setTotal] = useState<number | null>(null);


  const [plan, setPlan] = useState<Plan | null>(null);
  const [ons, setOns] = useState<OnsItem[] | null>(null);


  const goBackHandler = () => {
    step.setStep(3);
    localStorage.setItem("step", "3");
  };
  const submitHandler = () => {
    step.setStep(5);
    localStorage.setItem("step", "5");
  };
  
  

   useEffect(() => {
    const parsedPlan = planJSON ? (JSON.parse(planJSON) as Plan) : null;
    const parsedOns = onsJSON ? (JSON.parse(onsJSON) as OnsItem[]) : null;

    setPlan(parsedPlan);
    setOns(parsedOns);

    const sumPrice = () => {
      let sumOnsPrice = 0;
      if (parsedOns) {
        for (let i = 0; i < parsedOns.length; i++) {
          sumOnsPrice += parsedOns[i].price;
        }
      }

      if (parsedPlan) {
        const totalPrice = sumOnsPrice + parsedPlan.price;
        setTotal(totalPrice);
      }
    };

    sumPrice();
  }, [planJSON, onsJSON]);

  const editData = () => {
    step.setStep(2);
    localStorage.setItem("step", "3");
  };
  return (
    <div className={styles.container}>
      <div>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.planContainer}>
          <div className={styles.planTitle}>
            {
              plan ? <>{plan.title} ({period})</> : ""
            }
          </div>
          <div className={styles.planPrice}>
            {period === "monthly" ? (
              <div>
                {
                  plan ? <>${plan.price}/mo</> : ""
                }
              </div>
            ) : (
              <div>
                {
                  plan ? <>${plan.price}/yr</> : ""
                }
              </div>
            )}
          </div>
        </div>
        <div onClick={editData} className={styles.change}>
          Change
        </div>
        <div>
        { ons ? (
            ons.map((item) => (
              <div key={item.id} className={styles.oncContainer}>
                <div className={styles.onsValue}>{item.value}</div>
                {period === "monthly" ? (
                  <div className={styles.onsPrice}>${item.price}/mo</div>
                ) : (
                  <div className={styles.onsPrice}>${item.price}/yr</div>
                )}
              </div>
            ))
        ) :
        ""
        
       }
        </div>
      </div>
      <div className={styles.totalContainer}>
        <div className={styles.totalTitle}>Total ({period})</div>
        <div className={styles.totalPrice}>
          ${total} / {period}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={submitHandler}>
          Confirm
        </button>
        <button className={styles.backButton} onClick={goBackHandler}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default CheckingAndChange;
