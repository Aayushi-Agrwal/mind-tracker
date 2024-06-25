import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation"; // Changed from next/navigation
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
import Cookies from "js-cookie"; // Import js-cookie for handling cookies
import { login } from "./actions";

// Define schema using zod
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const staticUsername = "admin"; // Static username
const staticPassword = "password123"; // Static password

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  // Initialize useForm with zod resolver
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Handle form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setError(""); // Clear any previous errors

    try {
      await login(values.username, values.password);

      // console.log("Login successful");
      // Cookies.set("auth-token", "authenticated", { expires: 1 }); // Set cookie for 1 day
      // setLoading(false);
      // router.push("/");
    } catch (error) {
      console.error("Login failed", error);
      setError("Invalid username or password");
      setLoading(false);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-gray-60">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your username"
                    {...field}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-yellow-600 dark:bg-gray-100 dark:text-gray-800"
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
                <FormLabel className="text-gray-700 dark:text-gray-600">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-yellow-600 dark:bg-gray-100 dark:text-gray-800"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {loading ? (
            <Button
              disabled
              className="w-full flex items-center justify-center px-4 py-2 text-white bg-yellow-600 rounded-md hover:bg-inyellowdigo-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full flex items-center justify-center px-4 py-2 text-white bg-yellow-600 rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              disabled={loading}
            >
              Login
            </Button>
          )}
          {error && <div className="text-red-600 mt-4">{error}</div>}
        </form>
      </Form>
    </div>
  );
}
