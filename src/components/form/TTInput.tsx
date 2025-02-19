"use client";

import { TInput } from "@/src/types";
import { Input } from "@heroui/input";
import { useFormContext } from "react-hook-form";

interface TProps extends TInput {}

const TTInput = ({
  variant = "flat",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
  colors = "primary",
}: TProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Input
      {...register(name)}
      color={colors}
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
