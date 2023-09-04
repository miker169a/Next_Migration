import CustomerLayout from "@/components/customer-layout";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getCustomerListItems } from "@/models/customerserver";

async function CustomersLayout({ children }: { children: React.ReactNode }) {
  const session = getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  const customers = await getCustomerListItems();
  return <CustomerLayout customers={customers}>{children}</CustomerLayout>;
}

export default CustomersLayout;

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const session = await getServerSession(context.req, context.res, authOptions)
//   if (!session) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     }
//   }
//   const [firstInvoice, firstCustomer] = await Promise.all([
//     getFirstInvoice(),
//     getFirstCustomer(),
//   ])
//   const data = {
//     firstInvoiceId: firstInvoice?.id,
//     firstCustomerId: firstCustomer?.id,
//   }
//   return {
//     props: {
//       data,
//     },
//   }
// }
