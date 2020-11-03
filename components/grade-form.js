class GradeForm {
  constructor(formElement){
  this.formElement = formElement
  this.handleSubmit = this.handleSubmit.bind(this)
  }

  onSubmit(createGrade){
    this.createGrade = createGrade
    this.formElement.addEventListener("submit", this.handleSubmit)
  }

  handleSubmit(event){
    event.preventDefault()
    var formData = new FormData(event.target)
    var name = formData.get('name')
    var course = formData.get('course')
    var grade = formData.get('grade')
    this.createGrade(name, course, grade)
    this.formElement.reset(event.target)
  }
}
