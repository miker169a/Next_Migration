import SalesNav from "@/components/sales-nav";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default function SalesPage({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
