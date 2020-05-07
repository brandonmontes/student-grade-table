class App {
  constructor(gradeTable) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
    this.gradeTable = gradeTable
  }
  handleGetGradesError(err) {
    console.error(err)
  }
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades)
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
