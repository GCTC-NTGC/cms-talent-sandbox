
export function seed(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          email: "test@applicant.com",
          firstName: "Tristan",
          lastName: "Applicant",
        },
        {
          email: "bob@applicant.com",
          firstName: "Bob",
          lastName: "ApplicantTwo",
        },
      ]);
    });
};
