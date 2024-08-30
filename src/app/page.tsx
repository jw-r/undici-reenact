"use client";

import { useEffect } from "react";
import { getAccounts } from "./apis/fetchers/accounts/get-accounts";

export default function Home() {
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL!)
      .then((res) => res.json())
      .then((data) => console.log("use client", data));
  }, []);

  useEffect(() => {
    getAccounts().then((data) => console.log("use server", data));
  }, []);

  return <main></main>;
}
