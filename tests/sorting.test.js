import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it("should can do sorting", async () => {
    const customers = await prismaClient.customer.findMany({
      skip: 0,
      take: 10,
      orderBy: [
        {
          name: "desc",
        },
        {
          email: "asc",
        },
      ],
    });

    console.info(customers);
  });
  // apabila sort by name ada yg sama, maka akan diganti dengan sort by email
});
