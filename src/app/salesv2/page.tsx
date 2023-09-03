import SalesNav from "@/components/sales-nav";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default function SalesPage({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
