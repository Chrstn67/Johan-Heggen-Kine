import React from "react";
import "./Contacts.scss";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts__left">
        <h2 className="contacts__title">Contactez Johan</h2>
        <div className="contacts__info">
          <p className="contacts__name">Johan HEGGEN</p>
          <p className="contacts__address">
            13, Rue du Maréchal Foch
            <br />
            67880 Krautergersheim
            <br />
            France
          </p>
          <p className="contacts__phone">06 xx xx xx xx</p>
          <p className="handicap__access">
            2ème étage: Rampe d'accès, ascenseur.
          </p>
          <button>
            <a
              href="https://www.google.fr/maps/place/13+Rue+Mar%C3%A9chal+Foch,+67880+Krautergersheim/@48.4750548,7.5635619,17z/data=!3m1!4b1!4m6!3m5!1s0x4796b34c2d6d8d71:0x632e21a98c4860db!8m2!3d48.4750548!4d7.5661368!16s%2Fg%2F11c5gn2kp1?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le plan sur Google Maps
            </a>
          </button>
        </div>
      </div>
      <div className="contacts__right">
        <h2 className="contacts__opening-hours-title">Horaires d'ouverture</h2>
        <ul className="contacts__opening-hours-list">
          <p>Lundi : 8h - 12h / 14h - 18h</p>
          <p>Mardi : 8h - 12h / 14h - 18h</p>
          <p>Mercredi : Fermé</p>
          <p>Jeudi : 8h - 12h / 14h - 18h</p>
          <p>Vendredi : 8h - 12h / 14h - 18h</p>
          <p>Samedi : 8h - 12h</p>
          <p>Dimanche : Fermé</p>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
