"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/app/utils/supabase/server";

export async function login(email: string, password: string) {
  const supabase = createClient();

  const data = {
    email: "user@example.com",
    password: "password123",
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error);
    redirect("/error");
  }
  console.log("login successful");
  redirect("/");
}

export async function signup(email: string, password: string, name: string) {
  const supabase = createClient();

  const data = {
    email: email,
    password: password,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.log(error);
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/auth/notification");
}
