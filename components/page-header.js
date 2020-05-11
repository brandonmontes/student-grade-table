class PageHeader {
  constructor(headerElement){
    this.headerElement = headerElement
  }
  updateAverage(newAverage){
    var avgGrades = this.headerElement.querySelector('.badge')
    avgGrades.textContent = newAverage
    if(isNaN(newAverage)){
      avgGrades.textContent = 0
    }
  }
}
