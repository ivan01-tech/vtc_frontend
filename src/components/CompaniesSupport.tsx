

const companiesSource = [
  {
    name: "/public/as 1.png",
    alt: "company ",
    id: 1,
  },
  {
    name: "/public/dse 1.png",
    alt: "company ",
    id: 2,
  },
  {
    name: "/public/lgon 1.png",
    alt: "company ",
    id: 3,
  },
  {
    name: "/public/logo 1.png",
    alt: "company ",
    id: 4,
  },
  {
    name: "/public/logod 1.png",
    alt: "company ",
    id: 5,
  },
];

function CompaniesSupport() {
  return (
    <div className="companies_support">
      {companiesSource.map((item) => (
        <div className="" key={item.id}>
          <img src={item.name} alt={item.alt} />
        </div>
      ))}
    </div>
  );
}

export default CompaniesSupport;
