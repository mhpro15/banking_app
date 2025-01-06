import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { usePlaidLink } from "react-plaid-link";

import Image from "next/image";
import { usePrePaidLink } from "@/lib/prePlaidLink";

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const config = usePrePaidLink({ user });
  const { open, ready } = usePlaidLink(config);

  return (
    <>
      {variant === "primary" ? (
        <Button
          onClick={() => open()}
          disabled={!ready}
          className="plaidlink-primary"
        >
          Connect bank
        </Button>
      ) : variant === "ghost" ? (
        <Button
          onClick={() => open()}
          variant="ghost"
          className="plaidlink-ghost"
        >
          <Image
            src="/icons/connect-bank.svg"
            alt="connect bank"
            width={24}
            height={24}
          />
          <p className="hiddenl text-[16px] font-semibold text-black-2 xl:block">
            Connect bank
          </p>
        </Button>
      ) : (
        <Button onClick={() => open()} className="plaidlink-default">
          <Image
            src="/icons/connect-bank.svg"
            alt="connect bank"
            width={24}
            height={24}
          />
          <p className="text-[16px] font-semibold text-black-2 max-xl:hidden">
            Connect bank
          </p>
        </Button>
      )}
    </>
  );
};

export default PlaidLink;
