import Head from "next/head";
import styles from "./home.module.scss";
// <import fonts
import font from "@/lib/configs/font";
import { useContext, useState } from "react";
import PersonalInfo from "@/components/personal-info";
import SelectPlan from "@/components/select-plan";
import PickAddOns from "@/components/pick-add-ons";
import CheckingAndChange from "@/components/checking-and-changing";
import { StepContext } from "@/lib/context/step/stepContext";
// import fonts>

export default function Home() {
  const stepData = [
    { id: 0, step: 1, title: "YOUR INFO" },
    { id: 1, step: 2, title: "SELECT PLAN" },
    { id: 2, step: 3, title: "ADD-ONS" },
    { id: 3, step: 4, title: "SUMMARY" },
  ];

  const step = useContext(StepContext);
  console.log(step);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${font.className} ${styles.main}`}>
        <section className={styles.sidebar}>
          <div>
            {stepData.map((item) => (
              <div key={item.id} className={styles.stepContainer}>
                <div
                  className={`${
                    step.step === item.step ? styles.stepActive : ""
                  } ${styles.stepCircle} `}
                >
                  {item.step}
                </div>
                <div className={styles.stepInfo}>
                  <span className={styles.step}>step {item.step}</span>
                  <span className={styles.stepTitle}>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.container}>
          {step.step === 1 ? (
            <PersonalInfo />
          ) : step.step === 2 ? (
            <SelectPlan />
          ) : step.step === 3 ? (
            <PickAddOns />
          ) : step.step === 4 ? (
            <CheckingAndChange />
          ) : (
            <div>5</div>
          )}
        </section>
      </main>
    </>
  );
}