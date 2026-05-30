import db from "#db/client";



/** @returns the employee created according to the provided details
 * I had claude explain this to me because I just was not understanding and I think its because I just was looking at it the wrong way. I did so many years of retail that I see $ and I think money haha. the value placeholders are for the values incoming from the async function. SQL wont take in those values straight so we use a placeholder instead $1 value one $ value two and so forth. We are using the values coming in to insert a new record into the table. the return creates the row and the id. the await db querty line is how the array maps to the $1 $2 $3 values. the const row line returns that object. we are destructuring it to get the new employee.
 */
export async function createEmployee({ name, birthday, salary }) {
  const sql = `
  INSERT INTO employees (name, birthday, salary)
  VALUES ($1, $2, $3)
  RETURNING *
`;
const { rows: [employee] } = await db.query(sql, [name, birthday, salary]);
return employee;
}
// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  // TODO
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  // TODO
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  // TODO
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  // TODO
}
