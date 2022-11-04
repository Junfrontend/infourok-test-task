import CustomRubleIcon from "../../assets/icons/CustomRubleIcon";

const OrgCard = () => {
  return (
    <div className="org-card">
      <div className="org-card__main-content">
        <div className="main-content__text-info">
          <p>Низкий оргвзнос</p>
          <div className="main-content__animated-circle">
            <div className="animated-circle__circle-base animated-circle__circle-base--1"></div>
            <div className="animated-circle__circle-base animated-circle__circle-base--2"></div>
            <div className="animated-circle__circle-base animated-circle__circle-base--3"></div>
            <span className="animated-circle__main-content">30</span>
            <CustomRubleIcon className="animated-circle__secondary-content" />
          </div>
        </div>
        {/* Если это ссылка, то <button> нужно заменить на <a> */}
        <button className="org-card__action-button">
          <span>Подать заявку на участие</span>
        </button>
      </div>
      <div className="org-card__additional-content">
        <div className="additional-content__list additional-content__list--mb">
          <p>Ученикам</p>
          <ul>
            <li>Конкурс по 16 предметам</li>
            <li>Доступные задания для всех учеников</li>
            <li>Бесплатные дипломы и сертификаты</li>
          </ul>
        </div>
        <div className="additional-content__list">
          <p>Учителям</p>
          <ul>
            <li>Бесплатные свидетельства</li>
            <li>Бесплатные благодарности</li>
            <li>Простое участие</li>
          </ul>
        </div>
      </div>
    </div>
  );
};


// to do
// рефакторинг
// readme
// deploy
export default OrgCard;
