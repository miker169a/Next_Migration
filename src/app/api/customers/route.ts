import { getCustomerListItems } from "@/models/customerserver";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";
import { createCustomer } from "@/models/customerserver";
import { getUserByEmail } from "@/models/userserver";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const customers = await getCustomerListItems();
  return NextResponse.json({ customers }, { status: 200 });
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!session?.user?.email) {
    return NextResponse.json(
      {
        message:
          "please add an email to your github profile & logout out and signin again",
      },
      { status: 401 }
    );
  }

  const user = await getUserByEmail(session?.user?.email as string);

  if (!user) {
    return NextResponse.json(
      {
        message:
          "There is a server error and you shouldnt be getting this error",
      },
      { status: 401 }
    );
  }

  const { name, email } = await req.json();
  const customer = await createCustomer({
    name,
    email,
    user_email: user?.email as string,
  });
  console.log("customer", customer);
  return NextResponse.json(customer, { status: 200 });
}
