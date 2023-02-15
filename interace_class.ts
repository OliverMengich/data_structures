interface StudentData{
    name: string;
    readonly regno:  string;
    school: string;
}
class StudentController{
    getStudents(): StudentData[]{
        return [
            {name: 'Oliver',regno:'E022-01-0278/2018',school: 'Engineering'},
            {name: 'Oliver',regno:'E022-01-1278/2018',school: 'Engineering'}
        ]
    }
}
interface Admin{
    name: string
    department: string;
    occupation: string
}
interface Student{
    name: string
    department: string
    class: classes
}
type classes= "Engineering"|"IT"|"Medicine"
let admins: Admin[]=[
    {
        department: "MECHATRONICS",
        name: "CARUSO",
        occupation:"LECTURER"
    },
    {
        department: "IT",
        name:"Kim ",
        occupation: "Staff"
    }
]
let students: Student[]=[
    {
        class: "IT",
        department:"Engineering",
        name:"Mathew"
    },
    {
        class: "Medicine",
        department:"Medicine",
        name:"Hakeem"
    },
];
type Person = Admin & Student;
function isAdmin(person: Person) {
    console.log(person);
    return person
}
let newAds =[...students,...admins]
console.log(newAds);


