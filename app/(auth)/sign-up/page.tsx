import AuthForm from "@/components/AuthForm";
import { getLoggedInUser } from "@/lib/appwrite";
import React from "react";

const Signup = async () => {
  const loggedInUser = await getLoggedInUser();
  console.log(loggedInUser);
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
};

export default Signup;
