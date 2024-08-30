"use server";

export const getAccounts = async () => {
  const data = await fetch(process.env.NEXT_PUBLIC_API_URL!).then((res) =>
    res.json()
  );
  return data;
};
