import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { projectName, member1, number1, member2, number2, member3, number3, member4, number4, member5, number5, description } = body;

  const startup = await prisma.startup.create({
    data: {
    projectName,
    member1,
    number1,
    member2,
    number2,
    member3,
    number3,
    member4,
    number4,
    member5,
    number5,
    description,
    image : "https://picsum.photos/200/100",
    display: false,
    vote:0
    },
  });

  return NextResponse.json(startup);
}

export async function GET(request) {
  const startups = await prisma.startup.findMany(
    {where: { display: true}}
  );
  return NextResponse.json(startups);
}