export function Email() {
  const email = "Selivan@yandex.ru";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const check = regex.test(email);

  return check === true ? email : "";
  
}