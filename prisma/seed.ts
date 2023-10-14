import { PrismaClient } from "@prisma/client";
import * as dotenv from 'dotenv'
dotenv.config()

const prisma = new PrismaClient();

const userData = [
  {
    name: 'Alice',
    email: 'alice@prisma.io'
  },
  {
    name: 'Nilu',
    email: 'nilu@prisma.io'
  }
]

async function main() : Promise<void> {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }

  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

main()
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });
