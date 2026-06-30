"use client";

import { Button } from "@/components/ui/button";

type Props = {
  onNext: () => void;
};

export default function WelcomeStep({
  onNext,
}: Props) {
  return (
    <div className="text-center">

      <div className="text-6xl">
        🌿
      </div>

      <h1 className="mt-8 text-5xl font-bold">
        السلام عليكم
      </h1>

      <p className="mt-8 text-xl leading-10 text-slate-300">

        أنا نور.

        <br />

        يسعدني أن أرافقك في رحلتك إلى الله.

      </p>

      <Button
        className="mt-12"
        onClick={onNext}
      >
        ابدأ
      </Button>

    </div>
  );
}