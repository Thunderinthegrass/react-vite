import Button from "../Button";
import { UserList } from "../UserList";
import "./HomePage.scss";
import moskvitch from "../../assets/moskvitch.jpg";
import UserProfile from "../UserProfile/UserProfile";
// import style from './HomePage.scss';

function HomePage({ isDark, setIsDark }) {
  const handleToggleTheme = () => {
    setIsDark((isDark = !isDark));
  };

  // const handleClick = () => {
  //   alert("Оп-оп");
  // };

  // const handleClick2 = (text = "Раз-раз") => {
  //   alert(text);
  // };

  const user = {
    name: "Александр Петров",
    age: 38,
  };

  return (
    <div className={isDark ? "homePage dark" : "homePage"}>
      <p className="homeText">Домашняя страница</p>
      <div className="img-wrapper">
        <div className="img-item">
          <img src={moskvitch} className="image" alt="Москвич" />
        </div>
        <div className="img-item">
          <img src="moskvitch.jpg" className="image" alt="Москвич" />
        </div>
      </div>
      <Button label={"Сменить тему"} handleClick={handleToggleTheme} isDark={isDark} />
      {/* <Button
        label={"кнопка 1"}
        handleClick={handleClick}
        btnStyles={{
          backgroundColor: "#293d46",
          color: "#ffffff",
          padding: "7px 21px",
          border: "none",
          borderRadius: "3px",
        }}
      /> */}
      {/* <Button
        label={"кнопка 2"}
        handleClick={() => {
          handleClick2("раз-раз");
        }}
        btnStyles={{
          backgroundColor: "#442946ff",
          color: "#ffffff",
          padding: "7px 21px",
          border: "none",
          borderRadius: "3px",
        }}
      /> */}
      <UserList />
      <UserProfile user={user} />
    </div>
  );
}

export default HomePage;
