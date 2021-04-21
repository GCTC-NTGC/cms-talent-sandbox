
export function seed(knex) {
  // Deletes ALL existing entries
  return knex('jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        {
          title: { en: "Junior Dev", fr: "Dev petit" }, 
          description: { en: "You'll enjoy working on this awesome project!", fr: "Vous aimerez travaller sur ce projet genial!" },
          minSalary: 60000, maxSalary: 70000,
          closeDate: "2021-04-30",
          startDate: "2021-06-01",
        }
      ]);
    });
};
