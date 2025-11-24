import Button from "../Button";
import { UserList } from "../UserList";
import "./HomePage.scss";
import moskvitch from "../../assets/moskvitch.jpg";
import UserProfile from "../UserProfile/UserProfile";
import { useState } from "react";

function HomePage({ isDark, setIsDark }) {
  
  const handleToggleTheme = () => {
    setIsDark((isDark = !isDark));
  };

  const user = {
    name: "Александр Петров",
    age: 38,
  };


  const [value, setValue] = useState('');

  const valueHandle = (e) => {
    setValue(e.target.value);
  }

  const todoElems = [
    {id: 1, text: 'Сделать то', completed: true},
    {id: 1, text: 'Сделать cё', completed: false},
  ]

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
      {/* <UserList /> */}
      <UserProfile user={user} />

      <input onChange={valueHandle} type="text" placeholder="Введите текст" />
      <p>{value}</p>

      {todoElems.map((elem) => (
        <li key={elem.id}>
          {elem.completed ? <s>{elem.text}</s> : elem.text}
        </li>
      ))}
    </div>
  );
}

export default HomePage;
