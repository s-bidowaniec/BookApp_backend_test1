module.exports = (fullName) => {
  // Helpers
  const reIsAlpha = new RegExp("[a-zA-Z]|\\s", "g");
  const isAlpha = string => string.match(reIsAlpha).length === string.length;
  // Format check
  const fullNameIsString = typeof fullName === 'string';
  const fullNameIsAlpha = fullNameIsString && isAlpha(fullName);
  const fullNameProperFormat = fullNameIsAlpha && fullName.split(' ').length === 2;
  if(!fullNameProperFormat){
    return 'Error'
  }
  // Convert string
  const [ firstName, lastName ] = fullName.split(' ');
  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
};
