class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
    this.createGrade = this.createGrade.bind(this)
    this.handleCreateGradesError = this.handleCreateGradesError.bind(this)
    this.handleCreateGradesSuccess = this.handleCreateGradesSuccess.bind(this)
    this.handleDeleteGradesError = this.handleDeleteGradesError.bind(this)
    this.handleDeleteGradesSuccess = this.handleDeleteGradesSuccess.bind(this)
    this.deleteGrade = this.deleteGrade.bind(this)
    this.gradeTable = gradeTable
    this.pageHeader = pageHeader
    this.gradeForm = gradeForm
  }

  handleGetGradesError(err) {
    console.error(err)
  }

  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades)
    var total = 0
    for (var i = 0; i < grades.length; i++) {
      total += grades[i].grade
    }
    var avgGrades = Math.trunc(total / grades.length)
    this.pageHeader.updateAverage(avgGrades)
  }

  getGrades() {
    $.ajax({
      method: 'GET',
      url: 'https://sgt.lfzprototypes.com/api/grades',
      headers: { "X-Access-Token": "IrpHRQu1" },
      success: this.handleGetGradesSuccess,
      fail: this.handleGetGradesError,
    })
  }

  start() {
    this.getGrades()
    this.gradeForm.onSubmit(this.createGrade)
    this.gradeTable.onDeleteClick(this.deleteGrade)
  }

  createGrade(name, course, grade) {
    $.ajax({
      method: 'POST',
      url: 'https://sgt.lfzprototypes.com/api/grades',
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      headers: { "X-Access-Token": "IrpHRQu1" },
      success: this.handleCreateGradesSuccess,
      fail: this.handleCreateGradesError,
    })
  }

  handleCreateGradesError(error) {
    console.error(error)
  }

  handleCreateGradesSuccess() {
    this.getGrades()
  }

  deleteGrade(grade_id) {
    $.ajax({
      method: 'DELETE',
      url: 'https://sgt.lfzprototypes.com/api/grades/'+grade_id,
      headers: { "X-Access-Token": "IrpHRQu1" },
      success: this.handleDeleteGradesSuccess,
      fail: this.handleDeleteGradesError,
    })
  }

  handleDeleteGradesError(error) {
    console.error(error)
  }

  handleDeleteGradesSuccess() {
    this.getGrades()
  }
}
