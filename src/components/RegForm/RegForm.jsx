import React, { useState } from 'react';
import styles from './RegForm.module.scss';
import { checkRequiredFields, validatePassword, validatePasswordMatch } from "./validators.js";

const RegForm = () => {

  const [name, setName] = useState('');//состояние для поля ввода имени
  const [email, setEmail] = useState('');//состояние для поля ввода емэйла
  const [password, setPassword] = useState('');//состояние для поля ввода пароля
  const [confirmPassword, setConfirmPassword] = useState('');//состояние для поля ввода подтверждения пароля
  const [isPasswordsMatch, setIsPasswordsMatch] = useState(false)//состояние проверки, совпадают ли пароли
  const [isPasswordValid, setIsPasswordValid] = useState(true);//состояние для проверки валидности ввода пароля
  const [selectedYear, setSelectedYear] = useState('');
  const [requiredFieldsError, setRequiredFieldsError] = useState(false)//состояние для проверки, заполнены или не заполнены поля
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleNameChange = (e) => {//функция управления состоянием поля ввода имени
    const newName = e.target.value;
    setName(newName);
  }

  const handleEmailChange = (e) => {//функция управления состоянием поля ввода емэйла
    const newEmail = e.target.value;
    setEmail(newEmail);
  }

  const handlePasswordChange = (e) => {//функция управления состоянием поля ввода пароля
    const newPassword = e.target.value;
    setPassword(newPassword);

    setIsPasswordValid(validatePassword(newPassword));//функция проверки валидности пароля, возвращает true или false

    setIsPasswordsMatch(validatePasswordMatch(newPassword, confirmPassword));//проверка совпадения паролей
  }

  const handleConfirmPassword = (e) => {
    const newConfirmPassword = e.target.value;

    setConfirmPassword(newConfirmPassword);

    setIsPasswordsMatch(validatePasswordMatch(password, newConfirmPassword));//проверка совпадения паролей
  }

  const years = Array.from({ length: 40 }, (_, i) => new Date().getFullYear() - i);//массив с годами от текущего и на 40 лет назад
  // console.log(years);

  const handleYearChange = (e) => {//функция управления содержимым селекта
    setSelectedYear(e.target.value);
  }

  const handleSubmit = (e) => {
    console.log(showSuccessMessage)
    e.preventDefault();

    const allFieldsFilled = checkRequiredFields([name, email, password, confirmPassword, isPasswordsMatch, isPasswordValid, selectedYear]);//проверяем наличие всех значений в полях
    const isFormValid = allFieldsFilled && isPasswordValid && isPasswordsMatch;//проверяем, что все поля формы заполнены, что пароль валиден, что пароли совпадают

    if (!isFormValid) {//если что-то не заполнено, или пароли не совпадают
      setRequiredFieldsError(true);//то в переменную ошибки отправляем true
      setShowSuccessMessage(false);//а в переменную успеха false
      return;//и выходим из функции
    }

    //но если все заполнено правильно,
    setRequiredFieldsError(false);//то в переменную ошибки отправляем false
    setShowSuccessMessage(true);//а в переменную успеха true
    console.log(showSuccessMessage)

  }

  return (
    <div className={styles.regForm}>
      <h1 className={styles.title}>Форма регистрации</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Имя" onChange={handleNameChange} />
        {name}
        <input type="email" placeholder="email" onChange={handleEmailChange} />
        {email}
        <input type="text" placeholder="Пароль" onChange={handlePasswordChange} value={password} className={(isPasswordValid && password) ? styles.success : null} />
        {/* {password} */}

        {(!isPasswordValid && password) ? (<p className={styles.errorMessage}>
          Пароль должен состоять из латинских букв и цифр, а также быть не менее 8 символов
        </p>) : ''}
        <input type="text" placeholder="Подтвердите пароль" onChange={handleConfirmPassword} value={confirmPassword} className={(isPasswordsMatch && isPasswordValid && confirmPassword) ? styles.success : null} />
        {(!isPasswordsMatch && confirmPassword) ? (<p className={styles.errorMessage}>Пароли не совпадают</p>) : ''}
        {(isPasswordsMatch && isPasswordValid) ? (<p className={styles.successMessage}>Пароли совпадают</p>) : ''}
        {/* {confirmPassword} */}
        <select value={selectedYear} onChange={handleYearChange}>
          <option value="">Дата окончания учебного заведения:</option>
          {years.map((year) => {
            return <option value={year} key={year.toString()}>{year}</option>
          })}
        </select>
        <button type="submit" className={styles.button} onClick={handleSubmit}>Отправить</button>
        <button type="reset" className={styles.button}>Очистить форму</button>
        {requiredFieldsError && (<p className={styles.errorMessage}>Проверьте заполнение полей формы</p>)}
        {showSuccessMessage && (<p className={styles.successMessage}>Данные успешно отправлены</p>)}
      </form>
    </div>
  )
}

export default RegForm