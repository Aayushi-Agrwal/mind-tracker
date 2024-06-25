// logout.ts
import { createClient } from "../../utils/supabase/server";

const supabase = createClient();

export async function handleLogout() {
  await supabase.auth.signOut();
}
