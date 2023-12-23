"use client";

import React, { useState } from "react";
import { CustomButton } from "@/components/buttons";
import { ComboSelect } from "@/components/combo";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CountryList } from "@/constants/common/countries";
import { uppercaseFirstLetter } from "@/utils/utils";
import { useForm } from "react-hook-form";
import { AccountTypesEnum, GenderEnum } from "../constants";
import useSignup from "../components/hooks/useSignup";
import DatePicker from "@/components/datePicker";
import CustomSelect from "@/components/select";
import { Eye, EyeOff } from "lucide-react";
import Error_Api from "@/components/errorDisplay/ApiError";
import { IRegistrationForm } from "../types";

const SignupForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(true);
  const form = useForm<IRegistrationForm>();
  const { isLoading, submit, response: isSubmitError } = useSignup();

  const onSubmit = (values: IRegistrationForm) => {
    values["dateOfBirth"] = values.dateOfBirth
      ? new Date(values.dateOfBirth).toISOString()
      : "";
    values["registrationDevice"] = window.navigator.userAgent;
    values["registrationIpAddress"] = "72.35.23.163";
    submit(values);
  };

  const gender = Object.values(GenderEnum).map((value) => ({
    label: value,
    value,
  }));

  return (
    <div className="p-2">
      <Error_Api showError={!!isSubmitError} error={isSubmitError} />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          method={"post"}
          name={"signup-form"}
        >
          <FormField
            control={form.control}
            name="firstName"
            rules={{
              required: true,
              minLength: 2,
              maxLength: 32,
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input placeholder="First name" {...field} name="firstName" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            rules={{
              required: true,
              minLength: 2,
              maxLength: 32,
            }}
            render={({ field }) => (
              <FormItem className="mt-2">
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="Last name" {...field} name="lastName" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            rules={{
              required: true,
              minLength: 2,
              maxLength: 32,
            }}
            render={({ field }) => (
              <FormItem className="mt-2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email address" {...field} name="email" />
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

          <FormField
            control={form.control}
            name="gender"
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <FormItem className="mt-2">
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} name="gender">
                    <SelectTrigger className="w-full bg-white">
                      <SelectValue placeholder="Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {gender.map((option, index) => (
                          <SelectItem
                            value={option.value}
                            key={`${option.value}-${index}`}
                          >
                            {uppercaseFirstLetter(option.label)}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dateOfBirth"
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <FormItem className="mt-2">
                <FormLabel>Date of birth</FormLabel>
                <br />
                <FormControl>
                  <DatePicker
                    onSelect={field.onChange}
                    date={field.value as any as Date}
                    label="Choose date"
                    btnClassName="w-full"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <FormItem className="mt-2">
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <ComboSelect
                    name="country"
                    placeholder="country"
                    buttonProps={{
                      className: "w-full justify-between mt-2",
                    }}
                    options={CountryList.map((country) => ({
                      value: country.name,
                      label: country.name,
                    }))}
                    contentProps={{
                      className: "w-full mx-auto",
                    }}
                    value={uppercaseFirstLetter(field.value)}
                    onSelect={(value) => form.setValue("country", value as any)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="accountType"
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <FormItem className="mt-2">
                <FormLabel>Account type</FormLabel>
                <br />
                <FormControl>
                  <CustomSelect
                    name="country"
                    onSelect={field.onChange}
                    options={Object.values(AccountTypesEnum).map((type) => ({
                      value: type,
                      label: uppercaseFirstLetter(type)!,
                    }))}
                    placeholder="Choose account type"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <CustomButton
            type={"submit"}
            className="w-full mt-4"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Signup"}
          </CustomButton>
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;
