import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it("should can execute sequential transaction", async () => {
    const [joko, sulaiman] = await prismaClient.$transaction(
      [
        prismaClient.customer.create({
          data: {
            id: "joko",
            email: "joko@pzn.com",
            name: "joko",
            phone: "25334534534543",
          },
        }),
        prismaClient.customer.create({
          data: {
            id: "sulaiman",
            email: "sulaiman@pzn.com",
            name: "sulaiman",
            phone: "3453453543",
          },
        }),
      ],
      {
        timeout: 5000,
      }
    );

    expect(joko.name).toBe("joko");
    expect(sulaiman.name).toBe("sulaiman");
  });

  it("should can execute interactive transaction", async () => {
    const [joko, sulaiman] = await prismaClient.$transaction(
      async (prisma) => {
        const joko = await prisma.customer.create({
          data: {
            id: "joko2",
            email: "joko2@pzn.com",
            name: "joko",
            phone: "56456464565",
          },
        });
        const sulaiman = await prisma.customer.create({
          data: {
            id: "sulaiman2",
            email: "sulaiman2@pzn.com",
            name: "sulaiman",
            phone: "4356345345",
          },
        });

        return [joko, sulaiman];
      },
      {
        timeout: 5000,
      }
    );

    expect(joko.name).toBe("joko");
    expect(sulaiman.name).toBe("sulaiman");
  });
});
