import React from "react";

import "./Home.scss";

const Home = () => {
  return (
    <div>
      <section className="description">
        <p>
          Votre kiné Johan HEGGEN vous accompagne durant des séances d'une heure
          pour vous offrir un suivi rigoureux et personnalisé.
        </p>
        <p>
          Grâce à ses connaissances et à l'utilisation de techniques récentes,
          il mettra en œuvre des méthodes avancées pour votre rééducation ou vos
          soins, garantissant ainsi leur efficacité.
        </p>
        <p>
          Johan HEGGEN s'engage à fournir des traitements de haute qualité,
          adaptés à vos besoins spécifiques, afin de vous aider à retrouver une
          meilleure santé et une qualité de vie optimale.
        </p>
      </section>
      <section className="services">
        <div className="card">
          <p className="heading">Soins proposés</p>
          <p className="para">
            Découvrez les soins proposés par votre praticien !
          </p>
          <div className="overlay"></div>
          <button className="card-btn">Voir</button>
        </div>

        <div className="card">
          <p className="heading">Chips de Sciences</p>
          <p className="para">Voyagez dans les confins du corps humain !</p>
          <div className="overlay"></div>
          <button className="card-btn">Voir</button>
        </div>
      </section>
      <section className="chips-de-sciences"></section>
    </div>
  );
};

export default Home;
