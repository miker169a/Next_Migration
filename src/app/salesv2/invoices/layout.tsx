"use client";
import InvoicesPage from "@/components/invoice-page";

function Invoices({ children }: { children: React.ReactNode }) {
  console.log("Invoices");
  return <InvoicesPage>{children}</InvoicesPage>;
}

export default Invoices;
