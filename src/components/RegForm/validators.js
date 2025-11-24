export const validatePassword = (password) => {
  const passwordIsTrue = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
  return passwordIsTrue;
}

export const validatePasswordMatch = (password, newPassword) => {
  return password === newPassword;
}

export const checkRequiredFields = (fields) =>  {
  return fields.every((field) => field);
}