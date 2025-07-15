import Button from "../Button";
import { UserList } from "../UserList";
import "./HomePage.css";
import moskvitch from "../../assets/moskvitch.jpg";

function HomePage() {
  return (
    <div className="homePage">
      <p className="homeText">
        Домашняя страница
      </p>
      <img src={moskvitch} alt="Москвич" />
      <img src="moskvitch.jpg" alt="Москвич" />
      <Button />
      {/* <UserList /> */}
    </div>
  )
}

export default HomePage;