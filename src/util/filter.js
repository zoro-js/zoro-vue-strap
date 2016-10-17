import dateFns from 'date-fns'

Vue.filter('datetime', date => {
  return dateFns.format(new Date(date), 'YYYY-MM-DD HH:mm:SS')
})
