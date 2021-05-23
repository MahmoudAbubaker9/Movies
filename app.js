let vipAsk = prompt('hello, did you have account')

if (vipAsk == 'yes'){
    userName = prompt('Please enter your username ')
  } else {
    userName = prompt('Please enter your name ')
  }

  alert ("Nice to meet you "+ userName )  

  let askMovie1 = prompt('what type of movie did you like ?')
  let askMovie2 = prompt('please enter name of you fav movie')

  alert( userName + ' you like ' + askMovie1 + ' movies and your fav movie is ' + askMovie2 )
