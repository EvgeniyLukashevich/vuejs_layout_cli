function parseDate (dateString) {
  /* eslint-disable quote-props */
  const months = {
    'января': 0,
    'февраля': 1,
    'марта': 2,
    'апреля': 3,
    'мая': 4,
    'июня': 5,
    'июля': 6,
    'августа': 7,
    'сентября': 8,
    'октября': 9,
    'ноября': 10,
    'декабря': 11
  }
  /* eslint-enable quote-props */

  // Разделяем строку на компоненты
  const [day, month, year] = dateString.replace(',', '').split(' ')

  // Создаем и возвращаем объект Date
  return new Date(year, months[month], parseInt(day))
}

function savePostId (postId) {
  if (postId) {
    localStorage.setItem('chosenPostId', postId)
  } else {
    localStorage.setItem('chosenPostId', '1')
  }
}

function saveProjectId (projectId) {
  if (projectId) {
    localStorage.setItem('chosenProjectId', projectId)
  } else {
    localStorage.setItem('chosenProjectId', '1')
  }
}

function getChosenProjectId () {
  return localStorage.getItem('chosenProjectId') || 1
}

function getChosenPostId () {
  return localStorage.getItem('chosenPostId') || 1
}

export { parseDate, savePostId, getChosenPostId, saveProjectId, getChosenProjectId }
