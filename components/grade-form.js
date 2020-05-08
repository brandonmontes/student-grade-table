class GradeForm {
  constructor(formElement){
  this.formElement = formElement
  this.handleSubmit = this.handleSubmit.bind(this)
  }
  onSubmit(createGrade){
    this.createGrade = createGrade
    this.formElement.addEventListener("submit")
  }
  handleSubmit(event){
    event.preventDefault()
    console.log('hi')
  }
}
