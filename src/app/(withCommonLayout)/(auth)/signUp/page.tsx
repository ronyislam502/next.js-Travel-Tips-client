"use client";

import TTForm from "@/src/components/form/TTForm";
import TTInput from "@/src/components/form/TTInput";
import { Button } from "@heroui/button";
import Link from "next/link";
import { FieldValues } from "react-hook-form";

const SignUp = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
      <h3 className="my-2 text-2xl font-bold">SignUp with Travel Tips</h3>
      <p className="mb-4">Let&lsquo;s Get Started</p>
      <div className="w-[35%]">
        <TTForm onSubmit={onSubmit}>
          <div className="py-3 text-blue">
            <TTInput label="Name" name="name" type="text" />
          </div>
          <div className="py-3 text-blue">
            <TTInput label="Email" name="email" type="email" />
          </div>
          <div className="py-3">
            <TTInput label="Password" name="password" type="password" />
          </div>
          <div className="py-3">
            <TTInput label="Phone" name="phone" type="text" />
          </div>
          <div className="py-3">
            <TTInput label="Address" name="address" type="text" />
          </div>
          <div className="min-w-fit flex-1">
            <label
              className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400"
              htmlFor="image"
            >
              Upload image
            </label>
            <input multiple className="hidden" id="image" type="file" />
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
          Already have an account ?{" "}
          <Link href={"/signIn"}>
            {" "}
            <span className="text-green-400">Sign In</span>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
