import { Button } from "@chakra-ui/react";
import React from "react";

interface props {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: string;
  [others: string]: any;
}

const InputButton: React.FC<props> = ({
  text,
  onClick,
  variant,
  ...others
}) => {
  return (
    <Button onClick={onClick} variant={variant ? variant : "solid"} {...others}>
      {text}
    </Button>
  );
};

export default InputButton;
