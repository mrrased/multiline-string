class student{
    constructor(sId, sName){
        this.Id = sId;
        this.name = sName;
        this.school ="Rupsha wahed ali high school"
    }
}
const student1 = new student(1, "rashedur rahman\n");
const student2 = new student(12, "mouly rahman\n");
const student3 = new student(34, "lipu hasan\n");
console.log(student3.name, student2.name, student1.name);