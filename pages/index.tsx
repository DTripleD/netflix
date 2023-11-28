import Billboard from "@/components/Billboard";
import Navbar from "@/components/Navbar";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  try {
    const session = await getSession(context);
    if (!session) {
      return {
        redirect: {
          destination: "/auth",
          permanent: false,
        },
      };
    }
    return { props: {} };
  } catch (error) {
    console.error("Error getting session:", error);
    return { props: {} };
  }
}
export default function Home() {
  return (
    <>
      <Navbar />
      <Billboard />
    </>
  );
}
