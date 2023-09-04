import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import {
  getCustomerDetails,
  getCustomerInfo,
  getCustomerListItems,
} from "@/models/customerserver";
import invariant from "tiny-invariant";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: any) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { customerId } = context.params;
  invariant(
    typeof customerId === "string",
    "params.customerId is not available"
  );
  const customerInfo = await getCustomerInfo(customerId);
  if (!customerInfo) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }
  const customerDetails = await getCustomerDetails(customerId);
  const customers = await getCustomerListItems();

  const data = { customers, customerInfo, customerDetails };

  console.log("data", data);
  return NextResponse.json(data, { status: 200 });
}
