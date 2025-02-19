"use client";

import TTForm from "@/src/components/form/TTForm";
import TTInput from "@/src/components/form/TTInput";
import { Button } from "@heroui/button";
import Link from "next/link";
import React from "react";
import { FieldValues } from "react-hook-form";

const SignIn = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
      <h3 className="my-2 text-2xl font-bold">Login with Travel Tips</h3>
      <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
      <div className="w-[35%]">
        <TTForm onSubmit={onSubmit}>
          <div className="py-3 text-blue">
            <TTInput label="Email" name="email" type="email" />
          </div>
          <div className="py-3">
            <TTInput label="Password" name="password" type="password" />
          </div>
          <Button
            className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
            size="lg"
            type="submit"
          >
            Sign In
          </Button>
        </TTForm>
        <div className="text-center">
          Don&lsquo;t have account ?{" "}
          <Link href={"/signUp"}>
            {" "}
            <span className="text-green-400">Sign Up</span>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
