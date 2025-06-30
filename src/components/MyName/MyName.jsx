import "./MyName.css"

function MyName() {
  const member = [
    "Охотник Селиван",
    "Дед Вовка",
    "Александр Петров",
    "Фёдор Пнёв",
  ]

  return (
    <div className="wrapper">
      <h2>Меня зовут Селиван </h2>
      <p>Состав:</p>
      <ul>
        {member.map((member, id) => <li key={id} >{member}</li>)}
      </ul>
    </div>

  )
}
export default MyName;