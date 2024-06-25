import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";

export default function Logout() {
  const logout = async () => {
    "use server";
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/auth");
  };

  return (
    <form className="fixed bottom-4 w-64 flex justify-center">
      <button
        formAction={logout}
        className="text-white bg-yellow-500 hover:bg-yellow-600 p-3 rounded-md transition duration-100 ease-in-out"
      >
        Logout
      </button>
    </form>
  );
}
