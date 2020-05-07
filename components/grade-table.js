class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement
  }
  updateGrades(grades){
    this.grades = grades
    var studentTable = document.getElementById('student-table')
    for(var i = 0; i < grades.length; i++) {
      var row = document.createElement('tr')
      var studentName = document.createElement('td')
      studentName.textContent = grades[i].name
      var studentCourse = document.createElement('td')
      studentCourse.textContent = grades[i].course
      var studentGrade = document.createElement('td')
      studentGrade.textContent = grades[i].grade
      row.append(studentName, studentCourse, studentGrade)
      studentTable.append(row)
    }
  }
}
