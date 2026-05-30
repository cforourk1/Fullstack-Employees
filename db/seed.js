import db from "#db/client";
import { faker } from "@faker-js/faker";
import { createEmployee } from "#db/queries/employeesQuery";



await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

// callin in faker to create the data for me!
async function seedEmployees() {
  for (let i = 0; i < 10; i++) {
    await createEmployee({
      name: faker.person.fullName(),
      birthday: faker.date.birthdate(),
      salary: faker.number.int({ min: 30000, max: 150000 }),
    });
  }
}