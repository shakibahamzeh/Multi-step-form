import Head from "next/head";
import styles from "./home.module.scss";
// <import fonts
import font from "@/lib/configs/font";
import { useContext, useState } from "react";
import PersonalInfo from "@/components/pages/personal-info";
import SelectPlan from "@/components/pages/select-plan";
import PickAddOns from "@/components/pages/pick-add-ons";
import CheckingAndChange from "@/components/pages/checking-and-changing";
import { StepContext } from "@/lib/context/step/stepContext";
import Confirming from "@/components/pages/confirmingStep";
// import fonts>

export default function Home() {
  const stepData = [
    { id: 0, step: 1, title: "YOUR INFO" },
    { id: 1, step: 2, title: "SELECT PLAN" },
    { id: 2, step: 3, title: "ADD-ONS" },
    { id: 3, step: 4, title: "SUMMARY" },
  ];

  const step = useContext(StepContext);
  return (
    <>
      <Head>
        <title>Multi Step Form</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main className={`${font.className} ${styles.main}`}>
        <section className={styles.sidebar}>
          <div className={styles.sidebarWrapper}>
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
            <Confirming />
          )}
        </section>
      </main>
    </>
  );
}
