export const formatTime = arg => {
  if (typeof arg !== 'number') {
    return null;
  }

  if (arg < 0) {
    return null;
  }

  const seconds = Math.floor(arg % 60).toString().padStart(2, '0');
  const minutes = Math.floor((arg / 60) % 60).toString().padStart(2, '0');
  const hours = Math.floor(arg / 3600).toString().padStart(2, '0');

  const formattedTime = hours + ':' + minutes + ':' + seconds;

  return formattedTime;

};
