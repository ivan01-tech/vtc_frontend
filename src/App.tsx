import { Link } from "react-router-dom";
import "./styles/banner.css";
import CompaniesSupport from "./components/CompaniesSupport";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";

function App() {
  return (
    <>
      {/* banner */}
      <section className="banner_wrapper">
        <div>
          <h1 className="text_title">
            Plate-forme en ligne de Demande Internet au Bureaux ou Maison
          </h1>
          <p className="ligth_text">
            Simple , Rapide , Suivez sans stress et Plus !
          </p>
        </div>

        <div className="call_to_action_section">
          <Link to={"/"} className="btn_with_blue_bg special_link">
            Faites une demande
          </Link>
          <Link className="btn_with_blue_bg special_link ligth_bg" to={"/"}>
            Tarification
          </Link>
        </div>

        <figure className="w-full flex justify-center items-center aspect-video">
          <img
            className="!w-full object-contain"
            src="/pexels-rdne-stock-project-8123860 1.png"
            width={"100%"}
            alt="Trulli"
          />
        </figure>
      </section>

      <CompaniesSupport></CompaniesSupport>

      <section className="step_cleint_orange">
        <h2>
          <span>Vous n'êtes pas encore client Orange ?</span>
          Nous sommes là pour vous aider à faire une demande. Voici la procédure
          à suivre.
        </h2>

        <div className="step_wrapper">
          {/* step item */}
          <section className="step_item">
            <div>
              <img src="/form-svgrepo-com 1.png" alt="" />
            </div>
            <h3>Remplir un formulaire</h3>

            <p className="descriptio">
              Pour amorcer la procédure, il est d'une importance primordiale de
              remplir soigneusement le formulaire de demande d'installation. Ce
              formulaire ne réclame que 2 minutes de votre précieux temps, mais
              il constitue une étape cruciale pour assurer une installation
              réussie.
            </p>

            <div className="">
              <Link to="fill_form" className="link_sectiob">
                <span>Remplir le formulaire</span>
                <BsArrowRight></BsArrowRight>
              </Link>
            </div>
          </section>

          {/* step item */}
          <section className="step_item">
            <div>
              <img src="/form-svgrepo-com 1.png" alt="" />
            </div>
            <h3>Remplir un formulaire</h3>

            <p className="descriptio">
              Pour amorcer la procédure, il est d'une importance primordiale de
              remplir soigneusement le formulaire de demande d'installation. Ce
              formulaire ne réclame que 2 minutes de votre précieux temps, mais
              il constitue une étape cruciale pour assurer une installation
              réussie.
            </p>

            <div className="">
              <Link to="fill_form" className="link_sectiob">
                <span>Remplir le formulaire</span>
                <BsArrowRight></BsArrowRight>
              </Link>
            </div>
          </section>

          {/* step item */}
          <section className="step_item">
            <div>
              <img src="/form-svgrepo-com 1.png" alt="" />
            </div>
            <h3>Remplir un formulaire</h3>

            <p className="descriptio">
              Pour amorcer la procédure, il est d'une importance primordiale de
              remplir soigneusement le formulaire de demande d'installation. Ce
              formulaire ne réclame que 2 minutes de votre précieux temps, mais
              il constitue une étape cruciale pour assurer une installation
              réussie.
            </p>

            <div className="">
              <Link to="fill_form" className="link_sectiob">
                <span>Remplir le formulaire</span>
                <BsArrowRight></BsArrowRight>
              </Link>
            </div>
          </section>
        </div>
      </section>

      {/*  */}
      <div className="testimonials">
        <img
          src="/public/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-education-theme 1.png"
          alt=""
        />
        <div className="testimonials_description">
          <p>
            Installation facile de la fibre optique partout au Cameroun.
            Bénéficiez rapidement des avantages de cette technologie de pointe,
            sans tracas. Notre expertise assure une installation sans souci.
          </p>
        </div>
      </div>
      <section className="step_cleint_orange">
        <h2>
          <span>Une solution</span>
          qui répond à l'ensemble des besoins en matière de fibre optique.
        </h2>

        <div className="tag_wrapper">
          <button>Homes</button>
          <button>SMEs</button>
          <button className="active">Cooperation</button>
        </div>
      </section>

      {/* price section */}
      <div className="price_wrapper">
        <div className="testimonials">
          <img
            src="/dfdfs 1.png"
            alt=""
          />
          <div className="testimonials_description">
            <h2 className="title">
            Mboa
            </h2>
          </div>
        </div>

        <div className="bundle_pricing">
          <h4>La fibre pout toute la famille</h4>

          <p className="price">25 000 XAF</p>

          <div className="caracterisque">
            <div>
              <AiOutlineCheckCircle></AiOutlineCheckCircle>
              <span>Jusqu'à 2 Gbit/s de débit en téléchargement</span>
            </div>

            <div>
              <AiOutlineCheckCircle></AiOutlineCheckCircle>
              <span>
                Equipements premium inclus : Livebox 6, 1 répéteur Wifi 6, 2ème
                décodeur 4K ou clé TV, enregistreur TV
              </span>
            </div>

            <div>
              <AiOutlineCheckCircle></AiOutlineCheckCircle>
              <span>
                Appels illimités vers fixes de France et l'étranger et vers les
                mobiles
              </span>
            </div>
          </div>

          <div className="suscribe_btn">
            <button>Souscrire en ligne</button>
          </div>
        </div>
      </div>

      {/* message */}
      <section className="testinomial_section">
        <h3>
          Ne vous fiez pas seulement à nos paroles - découvrez ce que nos
          clients satisfaits ont à dire à propos de notre service.
        </h3>

        <div className="testimonial_wrapper">
          <div className="testimonial_item"></div>
          <div className="testimonial_item"></div>
        </div>
      </section>
    </>
  );
}

export default App;
