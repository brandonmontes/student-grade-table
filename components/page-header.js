class PageHeader {
  constructor(headerElement){
    this.headerElement = headerElement
  }
  updateAverage(newAverage){
    var avgGrades = this.headerElement.querySelector('.badge')
    avgGrades.textContent = newAverage
  }
}
