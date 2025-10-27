import { Button } from "@/components/ui/button";
import React from "react";
import { PersonStandingIcon } from "lucide-react";

export default function LandingPage() {
  return (
    <>
      <h1>
        <PersonStandingIcon />
        Support Me
      </h1>
      <Button>Log in</Button>
      <Button>Sign up</Button>
    </>
  );
}
