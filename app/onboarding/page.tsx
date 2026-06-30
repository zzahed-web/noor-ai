"use client";

import { useState } from "react";

import WelcomeStep from "./components/WelcomeStep";
import NameStep from "./components/NameStep";
import GoalStep from "./components/GoalStep";

export default function OnboardingPage() {
  const [step, setStep] = useState(0);

  const [user, setUser] = useState({
    name: "",
    goal: "",
    dailyTime: "",
    level: "",
  });

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      {step === 0 && (
        <WelcomeStep onNext={() => setStep(1)} />
      )}

      {step === 1 && (
        <NameStep
          name={user.name}
          setName={(value) =>
            setUser((prev) => ({
              ...prev,
              name: value,
            }))
          }
          onNext={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <GoalStep
          goal={user.goal}
          setGoal={(value) =>
            setUser((prev) => ({
              ...prev,
              goal: value,
            }))
          }
          onNext={() => setStep(3)}
        />
      )}

    </main>
  );
}