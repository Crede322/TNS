import Header from "../../components/global/header/Header";
import classes from "./MockupPage.module.css";

const MockupPage = () => {
  return (
    <div className={classes.mockupPage__wrapper}>
      <Header />
      <div className={classes.mockup__container}>
        <div className={classes.mockup__content}>
          <h1>Мокап-страница</h1>
          <h2>
            Это страница для ссылок, направляющих туда - где контент не имеет
            много общего с программированием, я же показываю в данной работе
            свои навыки программирования, нежели копирайтинга постов и блогов.
            Сюда ведут следующие кнопки :
          </h2>
          <div className={classes.mockup__buttons}>
            <h3>"Подобрать CPU"</h3>
            <h3>"Сервис(гарантия и возврат)"</h3>
            <h3>"Тесты"</h3>
            <h3>"Помощь"</h3>
            <h3>"Новинки"</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockupPage;
