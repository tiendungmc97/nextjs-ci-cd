"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ComponentType } from "react";

const withAuth = (WrappedComponent: ComponentType) => {
  const WithAuthComponent = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const isAuthenticated = !!localStorage.getItem("token");
      if (!isAuthenticated) {
        router.push("/login");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  WithAuthComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return WithAuthComponent;
};

export default withAuth;
