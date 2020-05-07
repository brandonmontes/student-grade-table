class App {
  handleGetGradesError(err) {
    console.error(err)
  }
  handleGetGradesSuccess(grades) {
    console.log(grades)
  }
  constructor() {
    this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess.bind(this)
    }
  getGrades() {
    $.ajax({
      method: 'GET',
      url: 'https://sgt.lfzprototypes.com/api/grades',
      headers: {
        "X-Access-Token": "IrpHRQu1"
      },
      success: this.handleGetGradesSuccess,
      fail: this.handleGetGradesError,
    })
  }

    start() {
      this.getGrades()
    }
  }
