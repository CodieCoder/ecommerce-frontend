"use client";

import { CustomButton } from "@/components/buttons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useSignIn from "../components/hooks/useSignin";
import Error_Api from "@/components/errorDisplay/ApiError";

interface ISigninForm {
  email: string;
  password: string;
  registrationDevice?: string;
}

const SigninForm: React.FC = () => {
  const form = useForm<ISigninForm>();
  const [showPassword, setShowPassword] = useState(true);
  const { submit, isLoading, response } = useSignIn();

  const onSubmit = (values: ISigninForm) => {
    values["registrationDevice"] = window.navigator.userAgent;
    console.log("Testee form values: ", values);
    submit(values);
  };

  return (
    <div className="p-2">
      <Error_Api showError={!!response} error={response} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            rules={{
              required: true,
              minLength: 7,
              maxLength: 55,
            }}
            render={({ field }) => (
              <FormItem className="mt-6">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            rules={{
              required: true,
              minLength: 8,
              maxLength: 20,
            }}
            render={({ field }) => (
              <FormItem className="mt-2">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Password"
                    {...field}
                    type={showPassword ? "password" : "text"}
                    prefixnode={
                      <span onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? <Eye /> : <EyeOff />}
                      </span>
                    }
                    name="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <CustomButton
            label={isLoading ? "Loading..." : "Sign in"}
            type={"submit"}
            className="w-full mt-6"
            disabled={isLoading}
          />
        </form>
      </Form>
    </div>
  );
};

export default SigninForm;
