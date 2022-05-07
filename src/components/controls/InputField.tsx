import { Input } from "@chakra-ui/react";
import React from "react";

interface InputFieldProps {
  placeHolder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  [other: string]: any;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  placeHolder,
  type,
  ...other
}) => {
  return (
    <Input
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
      type={type}
      {...other}
    />
  );
};

export default InputField;
