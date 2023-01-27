"use client";

import { Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard/activity");
  });

  return (
    <div className="w-full h-full flex  justify-center items-center">
      <Spin size="large" />
    </div>
  );
};

export default Home;
