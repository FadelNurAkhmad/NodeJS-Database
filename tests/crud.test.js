import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it("should be able to create customer", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "parjo",
        email: "parjo@pzn.com",
        name: "Parjo Raharjo",
        phone: "0821241243124",
      },
    });

    expect(customer.id).toBe("parjo");
    expect(customer.email).toBe("parjo@pzn.com");
    expect(customer.name).toBe("Parjo Raharjo");
    expect(customer.phone).toBe("0821241243124");
  });

  it("should be able to update customer", async () => {
    const customer = await prismaClient.customer.update({
      data: {
        name: "Joko Sulaiman",
      },
      where: {
        id: "parjo",
      },
    });

    expect(customer.id).toBe("parjo");
    expect(customer.email).toBe("parjo@pzn.com");
    expect(customer.name).toBe("Joko Sulaiman");
    expect(customer.phone).toBe("0821241243124");
  });

  it("should be able to read customer", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "parjo",
      },
    });

    expect(customer.id).toBe("parjo");
    expect(customer.email).toBe("parjo@pzn.com");
    expect(customer.name).toBe("Joko Sulaiman");
    expect(customer.phone).toBe("0821241243124");
  });

  it("should be able to delete customer", async () => {
    const customer = await prismaClient.customer.delete({
      where: {
        id: "parjo",
      },
    });

    expect(customer.id).toBe("parjo");
    expect(customer.email).toBe("parjo@pzn.com");
    expect(customer.name).toBe("Joko Sulaiman");
    expect(customer.phone).toBe("0821241243124");
  });
});
