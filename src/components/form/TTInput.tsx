"use client";

import { TInput } from "@/src/types";
import { Input } from "@heroui/input";
import { useFormContext } from "react-hook-form";

interface TProps extends TInput {}

const TTInput = ({
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
}: TProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Input
      {...register(name)}
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
      isInvalid={!errors[name]}
      label={label}
      required={required}
      size={size}
      type={type}
      variant={variant}
    />
  );
};

export default TTInput;
