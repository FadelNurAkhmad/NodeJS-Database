import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", function () {
  it("should can create one to one relation", async () => {
    const wallet = await prismaClient.wallet.create({
      data: {
        id: "parjo",
        customer_id: "parjo",
        balance: 1000000,
      },
      include: {
        customer: true,
      }, // include akan select tabel customers di DB
    });

    console.info(wallet);
  });

  it("should can create one to one with relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "parjo2",
        name: "Parjo 2",
        email: "parjo2@pzn.com",
        phone: "546565656",
        wallet: {
          create: {
            id: "parjo2",
            balance: 500000,
          },
        },
      },
      include: {
        wallet: true,
      }, // include akan select tabel wallet di DB
    });

    console.info(customer);
  });

  it("should can find one to one with relation", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "parjo",
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
  });

  it("should can find one to one with relation filter", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        wallet: {
          isNot: null,
        },
      },
      include: {
        wallet: true,
      },
    });

    console.info(customers);
  });
});
