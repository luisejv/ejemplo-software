import React from "react";
import { useRouter } from "next/router";

const Dynamic = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  return (
    <div>
      <div>{router.asPath}</div>
      <button onClick={goToHome}>Ir al Home</button>
    </div>
  );
};

export default Dynamic;
