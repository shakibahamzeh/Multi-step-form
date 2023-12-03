import { IData } from "../types/types";
export const Validate = (data:any) => {
  const errors : IData ={
    email:"" , fullName :"", phone :""
  };

  if (!data.email) {
    errors.email = "this field required.";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "email address is invalid";
  } else {
    delete errors.email;
  }
  if (!data.fullName.trim()) {
    errors.fullName = "this field required";
  } else {
    delete errors.fullName;
  }
  if (!data.phone) {
    errors.phone = "this field required";
  } else if (
    !/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i.test(
      data.phone
    )
  ) {
    errors.phone = "phone number is invalid";
  } else {
    delete errors.phone;
  }
  return errors;
};
