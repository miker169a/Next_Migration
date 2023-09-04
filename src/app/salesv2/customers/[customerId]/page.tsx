import CustomerIdPage from "@/components/customer-id-page";
import {
  getCustomerDetails,
  getCustomerInfo,
  getCustomerListItems,
} from "@/models/customerserver";
import { NextResponse } from "next/server";

async function CustomerIdRoute({ params }: { params: { customerId: string } }) {
  const { customerId } = params;

  return <CustomerIdPage customerId={customerId} />;
}

// CustomerIdRoute.getLayout = function getLayout(page: React.ReactNode) {
//   return (
//     <Layout>
//       <SalesNav>
//         <CustomerLayout>{page}</CustomerLayout>
//       </SalesNav>
//     </Layout>
//   );
// };

export default CustomerIdRoute;

// export async function getServerSideProps(
//   context: GetServerSidePropsContext & { params: { customerId: string } }
// ) {
//   const user = await getServerSession(context.req, context.res, authOptions)
//   if (!user) {
//     redirect('/login')
//   }
//   const customers = await getCustomerListItems()

//   const data = { customers }
//   return {
//     props: {
//       data,
//     },
//   }
// }
