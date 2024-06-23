"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "../../_components/modetoggle";
import { Progress } from "@/components/ui/progress";

// Define schemas for each step
const emailSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
});

const passwordSchema = z.object({
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

const emailConfirmationSchema = z.object({
  emailConfirmation: z.string().email({ message: "Invalid email address." }),
});

const nameSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
});

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

export default function AuthForm() {
  const [formType, setFormType] = useState("signup");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(
      formType === "login"
        ? loginSchema
        : step === 1
        ? emailSchema
        : step === 2
        ? passwordSchema
        : step === 3
        ? emailConfirmationSchema
        : nameSchema
    ),
    defaultValues: {
      email: "",
      password: "",
      emailConfirmation: "",
      name: "",
    },
  });

  function onSubmit(values: any) {
    if (formType === "signup" && step < 4) {
      setStep(step + 1);
    } else {
      setLoading(true);
      // Simulate an async operation
      setTimeout(() => {
        console.log(values);
        setLoading(false);
      }, 2000);
    }
  }

  const progressValues = [33, 66, 100];
  const currentProgress = progressValues[step - 1];

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-900 dark:to-indigo-700">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="flex justify-center mb-8">
        <Button
          onClick={() => setFormType("signup")}
          className={`${
            formType === "signup"
              ? "bg-white text-indigo-600 hover:bg-white scale-110"
              : "bg-indigo-600 text-white"
          } px-4 py-2 rounded-l-md`}
        >
          Signup
        </Button>
        <Button
          onClick={() => setFormType("login")}
          className={`${
            formType === "login"
              ? "bg-white text-indigo-600"
              : "bg-indigo-600 text-white hover:bg-indigo-800"
          } px-4 py-2 rounded-r-md`}
        >
          Login
        </Button>
      </div>
      {formType === "signup" && (
        <div className="mb-8 w-1/3">
          <Progress value={currentProgress} className="mb-4 bg-indigo-600" />{" "}
          <span className="text-md">Step {step} of 3</span>
        </div>
      )}
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
          {formType === "signup" ? "Signup to continue" : "Login to continue"}
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {formType === "signup" && (
              <>
                {step === 1 && (
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your email"
                            {...field}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600 dark:bg-gray-700 dark:text-gray-200"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                {step === 2 && (
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">
                          Password
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Enter your password"
                            {...field}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600 dark:bg-gray-700 dark:text-gray-200"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                {step === 3 && (
                  <FormField
                    control={form.control}
                    name="emailConfirmation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">
                          Confirm Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Confirm your email"
                            {...field}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600 dark:bg-gray-700 dark:text-gray-200"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                {step === 4 && (
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your name"
                            {...field}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600 dark:bg-gray-700 dark:text-gray-200"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </>
            )}
            {formType === "login" && (
              <>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          {...field}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600 dark:bg-gray-700 dark:text-gray-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          {...field}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600 dark:bg-gray-700 dark:text-gray-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}
            {loading ? (
              <Button
                disabled
                className="w-full flex items-center justify-center px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                disabled={loading}
              >
                {formType === "signup" && step < 4 ? "Next" : "Submit"}
                {formType === "login" && "Login"}
              </Button>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
}
