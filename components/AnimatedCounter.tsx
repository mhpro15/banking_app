"use client";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <span>
      <CountUp end={amount} decimal="," decimals={2} prefix="$" />
    </span>
  );
};

export default AnimatedCounter;
