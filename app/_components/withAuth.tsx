// src/components/withAuth.tsx (or wherever your HOC file is located)
"use client";

import { JSX, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../utils/supabase/client"; // Adjust the import path as necessary

const withAuth = (WrappedComponent: any) => {
  return (props: JSX.IntrinsicAttributes) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const supabase = createClient();

      const checkAuth = async () => {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          router.push("/auth");
        } else {
          setLoading(false);
        }
      };

      checkAuth();
    }, [router]);

    if (loading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
