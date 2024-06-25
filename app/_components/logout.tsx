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
    <form>
      <button
        formAction={logout}
        className="text-black transition duration-100 ease-in-out"
      >
        Logout
      </button>
    </form>
  );
}
