import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AdminDashboardClient from "./AdminDashboardClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | DocterLogy",
  description: "Admin",
};

export default async function AdminPage() {
  const user = await currentUser();

  // if user is not logged in
  if (!user) {
    redirect("/");
  }

  const userEmail = user.emailAddresses[0]?.emailAddress;
  const adminEmails = process.env.ADMIN_EMAIL;

  if (!adminEmails || userEmail !== adminEmails) redirect("/dashboard");

  return <AdminDashboardClient />;
}
