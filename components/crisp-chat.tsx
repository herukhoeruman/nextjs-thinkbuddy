"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("90f97323-4b93-4a6d-ba4c-a9f46012ac0b");
  }, []);

  return null;
};
