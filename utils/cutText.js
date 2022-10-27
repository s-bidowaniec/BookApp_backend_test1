module.exports = (content, maxLength) => {
  const contentIsStr = typeof content === 'string';
  const maxLengthIsNumber = typeof maxLength === 'number';
  const maxLengthIsPositive = maxLength > 0;
  if(!contentIsStr || content.length < 1 || !maxLengthIsNumber || !maxLengthIsPositive) return 'Error';
  if(content.length <= maxLength) return content;
  return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
};
