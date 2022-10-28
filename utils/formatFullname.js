module.exports = (fullName) => {
  // Format check
  const fullNameIsString = typeof fullName === 'string';
  const fullNameProperFormat = fullNameIsString && fullName.split(' ').length === 2;
  if(!fullNameProperFormat){
    return 'Error'
  }
  // Convert string
  const [ firstName, lastName ] = fullName.split(' ');
  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
};
