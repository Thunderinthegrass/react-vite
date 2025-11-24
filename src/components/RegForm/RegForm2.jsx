import React, { useState } from 'react';
import styles from './RegForm2.module.scss';
import { validatePassword, validatePasswordMatch, checkRequiredFields } from './validators';

const RegForm = () => {

  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setIsPasswordsMatch] = useState(false);
  const [selectedYear, setSelectedYear] = useState('');
  const [requiredFieldsError, setRequiredFieldsError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  } 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  } 

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordValid(validatePassword(e.target.value))
    setIsPasswordsMatch(validatePasswordMatch(e.target.value, confirmPassword));
  } 

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);

    setIsPasswordsMatch(validatePasswordMatch(password, e.target.value));
  }

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  }

  const years = Array.from(
    {length: 40},
    (_, i) => new Date().getFullYear() - i
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const allFieldsFilled = [
      name,
      email,
      password,
      isPasswordValid,
      confirmPassword,
      passwordMatch,
      selectedYear,
    ]

    const isFormValid = checkRequiredFields(allFieldsFilled);
    console.log(isFormValid);

    if (!isFormValid) {
      setRequiredFieldsError(true);
      setShowSuccessMessage(false);
      return;
    }
    setShowSuccessMessage(true);
    setRequiredFieldsError(false);

    const formData = {
      name,
      email,
      password,
      selectedYear,
    }
    
    alert(JSON.stringify(formData, null, 2));
  }

  const handleReset = () => {
    setName('')
    setEmail('')
    setPassword('')
    setIsPasswordValid(true)
    setConfirmPassword('')
    setIsPasswordsMatch(false)
    setSelectedYear('')
    setRequiredFieldsError(false)
    setShowSuccessMessage(false)
  }

  return (
    <div className={styles.regForm}>
      <h1 className={styles.title}>Форма регистрации</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Имя" onChange={handleNameChange} />
        {name}
        <input type="email" placeholder="email" onChange={handleEmailChange} />
        {email}
        <input type="text" placeholder="Пароль" value={password} onChange={handlePasswordChange} />
        {password}
        {isPasswordValid}
        <p className={styles.errorMessage}>
          {isPasswordValid ? '' : 'Пароль должен состоять из латинских букв и цифр, а также быть не менее 8 символов'}
        </p>
        <input type="text" placeholder="Подтвердите пароль" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        {confirmPassword}
        {passwordMatch ? (<p className={styles.successMessage}>Пароли совпадают</p>) : (<p className={styles.errorMessage}>Пароли не совпадают</p>) }
        <select value={selectedYear} onChange={handleYearChange}>
          <option value="">Дата окончания учебного заведения:</option>
          {years.map((year) => (
            <option key={year.toString()} value={year}>{year}</option>
          ))}
        </select>
        {selectedYear}
        <button type="submit" className={styles.button}>Отправить</button>
        <button type="reset" className={styles.button} onClick={handleReset}>Очистить форму</button>
        {requiredFieldsError && (<p className={styles.errorMessage}>Проверьте заполнение полей формы</p>)}
        {showSuccessMessage && (<p className={styles.successMessage}>Данные успешно отправлены</p>)}
      </form>
    </div>
  )
}

export default RegForm