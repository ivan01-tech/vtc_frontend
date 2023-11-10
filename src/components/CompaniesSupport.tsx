
import image1 from "../../public/as 1.png"
import image2 from "../../public/lgo 1.png"
import image3 from "../../public/dse 1.png"
import image4 from "../../public/logo 1.png"
import image5 from "../../public/logod 1.png"
const companiesSource = [
  {
    name: image1,
    alt: "company ",
    id: 1,
  },
  {
    name:image2,
    alt: "company ",
    id: 2,
  },
  {
    name: image3,
    alt: "company ",
    id: 4,
  },
  {
    name:image4,
    alt: "company ",
    id: 5,
  }, {
    name:image5,
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
