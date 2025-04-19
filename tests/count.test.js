import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it("should can count", async () => {
    const total = await prismaClient.customer.count({
      where: {
        name: {
          in: ["joko", "sulaiman"], // Tambahkan nama-nama yang ingin dicari di sini
        },
      },
    });

    expect(total).toBe(4);
  });
});

// describe("Prisma Client", () => {
//   it("should can count", async () => {
//     const total = await prismaClient.customer.count({
//       where: {
//         name: "joko",
//       },
//     });

//     expect(total).toBe(2);
//   });
// });
