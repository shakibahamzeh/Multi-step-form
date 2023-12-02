import React, { useState } from "react";
import styles from "./pickAddOns.module.scss";
const PickAddOns = () => {
  const [allChecked, setAllChecked] = React.useState([]);
  const [checked, setChecked] = useState(false);
  function handleChange(e) {
    // if (e.target.checked) {
    //   setAllChecked([...allChecked, e.target.value]);
    //   console.log(e.target.checked);
    // } else {
    //   setAllChecked(allChecked.filter((item) => item !== e.target.value));
    // }
    // setChecked(true);
    // if (checked) {
    //   setAllChecked([...allChecked, e.target.value]);
    //   console.log(e.target.checked);
    // } else {
    //   setAllChecked(allChecked.filter((item) => item !== e.target.value));
    // }
    console.log(e.target.key);
  }

  const data = [
    { id: 0, value: "Online service", content: "Access to multiplayer games" },
    { id: 1, value: "Larger storage", content: "Extra 1TB of cloud save" },
    {
      id: 2,
      value: "Customizable profile",
      content: "Custom theme on your profile",
    },
  ];
  return (
    <div className={styles.container}>
      <div>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className={styles.pickAddOnsContainer}>
        {data.map((item) => (
          <div
            className={styles.addOnsContainer}
            onClick={handleChange}
            key={item.id}
          >
            <div>
              <input
                value={item.value}
                type="checkbox"
                // checked={checked}
                // onChange={handleChange}
              />
            </div>
            <div className={styles.content}>
              <div>
                <h4>{item.value}</h4>
                <span>{item.content}</span>
              </div>
              <div className={styles.period}>+$1/mo</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PickAddOns;
