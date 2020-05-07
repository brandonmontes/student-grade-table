var mainTable = document.querySelector('table')

var mainHeader = document.querySelector('header')



var studentHeader = new PageHeader(mainHeader)



var studentTable = new GradeTable(mainTable)



var studentStart = new App(studentTable, studentHeader)



studentStart.start()
