export const jobs = [
  {
    id: 1,
    title: { en: "Junior Dev", fr: "Dev petit" },
    description: {
      en: "You'll enjoy working on this awesome project!",
      fr: "Vous aimerez travailler sur ce projet genial!",
    },
    min_salary: 60000,
    max_salary: 70000,
    close_date: "2021-04-30",
    start_date: "2021-06-01",
    status: "draft",
  },
  {
    id: 2,
    title: { en: "Exec", fr: "Executif" },
    description: { en: "Boss people around!", fr: "Commondez les autres!" },
    min_salary: 90000,
    max_salary: 100000,
    close_date: "2021-04-30",
    start_date: "2021-06-01",
    status: "published",
  },
];

export default jobs;
