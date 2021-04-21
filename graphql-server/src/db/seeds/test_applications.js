
export function seed(knex) {
  // Deletes ALL existing entries
  return knex('applications').del()
    .then(function () {
      // Inserts seed entries
      return knex('applications').insert([
        {
          jobId: 1,
          userId: 2,
          interest: "I love awesome jobs, who doesn't",
          preferredLang: "en",
        }
      ]);
    });
};
