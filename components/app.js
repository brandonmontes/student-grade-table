class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
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
    for(var i = 0; i < grades.length; i++){
      total += grades[i].grade
    }
    var avgGrades = total/grades.length
    this.pageHeader.updateAverage(avgGrades)
  }

  getGrades() {
    $.ajax({
      method: 'GET',
      url: 'https://sgt.lfzprototypes.com/api/grades',
      headers: {"X-Access-Token": "IrpHRQu1"},
      success: this.handleGetGradesSuccess,
      fail: this.handleGetGradesError,
    })
  }

    start() {
      this.getGrades()
    }
  }










// headers: {
//   "X-Access-Token": "IrpHRQu1"
// },
