class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement
    this.noGradesElement = noGradesElement
  }
  updateGrades(grades) {
    var studentTable = document.getElementById('student-table')
    $("#student-table").empty()
    for (var i = 0; i < grades.length; i++) {
      var row = this.renderGradeRow(grades[i], this.deleteGrade)
      studentTable.append(row)
    }
    if (grades.length <= 0) {
      var noGrades = document.querySelector('h4')
      noGrades.classList.remove('d-none')
    } else {
      var moreGrades = document.querySelector('h4')
      moreGrades.classList.add('d-none')
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade
  }
  renderGradeRow(data, deleteGrade) {
    var row = document.createElement('tr')
    var deleteButtonRow = document.createElement('td')
    var deleteButton = document.createElement('button')
    var name = document.createElement('td')
    name.textContent = data.name
    var course = document.createElement('td')
    course.textContent = data.course
    var courseGrade = document.createElement('td')
    courseGrade.textContent = data.grade
    deleteButton.textContent = "Delete"
    deleteButton.classList.add('btn', 'btn-danger')
    deleteButtonRow.append(deleteButton)
    row.append(name, course, courseGrade, deleteButtonRow)
    deleteButton.addEventListener('click', function () { deleteGrade(data.id) })
    return row
  }
}
