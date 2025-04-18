import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  //creates multiple records and returns the resulting objects.
  it("should can create many records", async () => {
    const { count } = await prismaClient.customer.createMany({
      data: [
        {
          id: "sudarsono",
          email: "sudarsono@pzn.com",
          phone: "34534534534545",
          name: "Sudarsono",
        },
        {
          id: "budi",
          email: "budi@pzn.com",
          phone: "34534545",
          name: "Budi",
        },
      ],
    });

    expect(count).toBe(2);
  });

  it("should can update many records", async () => {
    const { count } = await prismaClient.customer.updateMany({
      data: {
        email: "budisedunia@pzn.com",
      },
      where: {
        name: "Budi",
      },
    });

    expect(count).toBe(1);
  });

  it("should can delete many records", async () => {
    const { count } = await prismaClient.customer.deleteMany({
      where: {
        name: "Tidak ada",
      },
    });

    expect(count).toBe(0);
  });

  it("should can read many records", async () => {
    const customers = await prismaClient.customer.findMany({});
    console.info(customers);
    expect(customers.length).toBe(7);
  });
});
