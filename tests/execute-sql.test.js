import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it("should be able to execute sql", async () => {
    const id = "1";
    const name = "Parjo Raharjo";

    const impacted =
      await prismaClient.$executeRaw`INSERT INTO sample(id, name) VALUES (${id}, ${name});`;
    expect(impacted).toBe(1);
  });
});

// Return value dari $executeRaw() adalah Promise<Number> yang berisi jumlah data yang terkena
// impact dari operasi SQL yang kita lakukan
