var mainTable = document.querySelector('table')

var mainHeader = document.querySelector('header')

var mainForm = document.querySelector('form')

var mainDelete = document.querySelector('p')


var studentForm = new GradeForm(mainForm)


var studentHeader = new PageHeader(mainHeader)



var studentTable = new GradeTable(mainTable, mainDelete)



var studentStart = new App(studentTable, studentHeader, studentForm)



studentStart.start()
