"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
import { Progress } from "@/components/ui/progress";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

// Define schemas for each step
const emailSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
});

const passwordSchema = z.object({
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

const otpSchema = z.object({
  otp: z.string().length(6, { message: "OTP must be 6 digits." }),
});

const nameSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
});

export default function Signup() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [otpError, setOtpError] = useState("");
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(
      step === 1
        ? emailSchema
        : step === 2
        ? passwordSchema
        : step === 3
        ? otpSchema
        : nameSchema
    ),
    defaultValues: {
      email: "",
      password: "",
      otp: "",
      name: "",
    },
  });

  function onSubmit(values: any) {
    if (step === 3) {
      if (values.otp !== "000000") {
        setOtpError("Incorrect OTP. Please try again.");
        return;
      } else {
        setOtpError("");
      }
    }

    if (step < 4) {
      setStep(step + 1);
    } else {
      setLoading(true);
      // Simulate an async operation and redirect after 4 seconds
      setTimeout(() => {
        console.log(values);
        setLoading(false);
        router.push("/"); // Redirect to home page or any other page
      }, 4000);
    }
  }

  const progressValues = [25, 50, 75, 100];
  const currentProgress = progressValues[step - 1];

  return (
    <div>
      <div className="mb-8">
        <Progress
          value={currentProgress}
          className="mb-2 text-md [&>*]:bg-indigo-600 bg-slate-200"
        />
        <span className="text-sm">Step {step} of 4</span>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 dark:text-gray-300">
                    Enter OTP sent to your email
                  </FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup className="flex w-full justify-around">
                        <InputOTPSlot
                          index={0}
                          className="border border-slate-200"
                        />
                        <InputOTPSlot
                          index={1}
                          className="border border-slate-200"
                        />
                        <InputOTPSlot
                          index={2}
                          className="border border-slate-200"
                        />
                        <InputOTPSlot
                          index={3}
                          className="border border-slate-200"
                        />
                        <InputOTPSlot
                          index={4}
                          className="border border-slate-200"
                        />
                        <InputOTPSlot
                          index={5}
                          className="border border-slate-200"
                        />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  {otpError && (
                    <p className="text-red-600 text-sm mt-1">{otpError}</p>
                  )}
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
              {step < 4 ? "Next" : "Signup"}
            </Button>
          )}
        </form>
      </Form>
    </div>
  );
}
