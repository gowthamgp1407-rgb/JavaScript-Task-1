console.log("------> task 1");

console.log("Employee Salary Problem");

function salary(sal){

 
     return 12*sal;
}
 console.log("Yearly Salary : "+salary(45000));



console.log("------> task 2");

console.log("Student Pass or Fail :");

function Result(mark) {
    return mark > 35 ? "Pass" : "Fail";
}

console.log(Result(72));



console.log("------> task 3");

console.log(" Food Bill :");

function FoodBill(burger_price, quantity) {
    return burger_price * quantity
}

console.log("Total Bill :" + FoodBill(180, 3));




console.log("------> task 4");

console.log(" Welcome Employee :");

function EmployeePortal(EMP_name, department) {
    console.log("Welcome " + EMP_name);
    console.log("Department : " + department);

}
EmployeePortal("Naveen", "Development")


console.log("------> task 5");

console.log(" Shopping Discount :");

function Discount(online_price) {
    let disc = 500;

    return online_price - disc

}

console.log("Final Price :" + Discount(5000));



console.log("------> task 6");

console.log(" Company Login :");

function Login_Success() {
    console.log("Login Successfull");

}

function Dashboard_Loading() {
    console.log("Loading Dashboard...");

}
Dashboard_Loading(Login_Success());



console.log("------> task 7");

console.log(" Food Delivery :");

function step_1() {
    console.log("Order Received");

}


function step_2() {
    console.log("Preparing Food");

}

function step_3() {
    console.log("Out for Delivery");

}

function step_4() {
    console.log("Delivered");

}

step_4(step_3(step_2(step_1())))




console.log("------> task 8");

console.log("  Lucky Draw :");

function* LuckyDraw() {
    yield "10%";
    yield "20%";
    yield "50%";
    yield "Better Luck Next Time";
}

let coupon = LuckyDraw();
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);



console.log("------> task 9");

console.log("  Lucky Draw :");

function Bonus(salary, bon) {
    console.log("Total Salary " + (salary + bon));
}
Bonus(50000, 5000);




console.log("------> task 10");

console.log("Merge Employee Details :");

let EmployeePersonal = {
    name: "Sivanantham",
    email: "sivak@gmail.com",
    phone: "6382779141"
}

let EmployeeOffice = {
    name: "sivanantham",
    email: "siva@theStackly.com",
    phone: "63121221221",
    company: "stackly"
}

let EmployeeDetails = { ...EmployeePersonal, ...EmployeeOffice }

console.log(EmployeeDetails);




console.log("------> task 11");

console.log("Shopping Cart :");

let cart1 = ["apple", "orange", "guava", "graphes", "banana"];
let cart2 = ["carrot", "chilli", "tomotto", "potatto", "califlower"];

let carts = [...cart1, ...cart2];
console.log(carts);




console.log("------> task 12");

console.log(" Student Marks :");

function students(name, ...marks) {

    marks_arr = [...marks];
    console.log(marks.length);

    let total = 0;
    let average = 0;
    for (let mark of marks_arr) {
        total += mark;
        average = total / (marks_arr.length)
    }

    console.log("Student : " + name);
    console.log("Total marks : " + total);
    console.log("Average : " + average);

}
students("siva", 90, 85, 88, 95);




console.log("------> task 13");

console.log("Product Details :");

let product = {
    name: "Laptop",
    price: 65000,
    brand: "Dell",
    stock: 20
};

let { name, price, ...remaining } = product;
console.log("Name : " + product.name);
console.log("Price : " + product.price);





console.log("------> task 14");

console.log(" Customer Details :");

let details_arr = [101, "Naveen", "Chennai", 9876543210];
let [id1, name1, city1, ...remaining1] = details_arr;

console.log("ID : " + id1);
console.log("Name : " + name1);
console.log("City : " + city1);




console.log("------> task 15");

console.log("  Add Product :");

let products2 = ["Mobile", "Laptop"];
products2.push("HeadPhone");
console.log(products2);



console.log("------> task 16");
console.log("Remove Last Product :");

products2.pop();
console.log(products2);



console.log("------> task 17");
console.log("Replace Employee :");

let employee2 = ["Rahul", "Arun", "John", "David"];
employee2.splice(2, 1, "Naveen");
console.log(employee2);



console.log("------> task 18");
console.log("Search Product :");

let products3 = ["Mouse", "Keyboard", "Monitor", "Laptop"];
let check_index = products3.includes("Laptop")
console.log("Laptop is available in this list : ", check_index);




console.log("------> task 19");
console.log(" Employee Ranking :");

let salaries2 = [25000, 45000, 30000, 70000];
salaries2.sort();
console.log(salaries2);



console.log("------> task 20");
console.log(" Reverse Chat Messages :");

let messages = ["Hi", "Hello", "How are you?", "Good Morning"];
messages.reverse();
console.log(messages);





console.log("-------->  Bonus task :");

let employeeDetails = [
    {
        name: "siva",
        Id: "101",
        age: 24,
        salary: 35000,
        department: "full stack developer"
    },
    {
        name: "raamu",
        Id: "102",
        age: 29,
        salary: 40000,
        department: "AWS devops developer"
    },
    {
        name: "vijay",
        Id: "103",
        age: 23,
        salary: 37000,
        department: "frontend developer"
    },
    {
        name: "seenu",
        Id: "104",
        age: 24,
        salary: 45000,
        department: "cloud management"
    }
];


function AddEmployee(name, id, age, salary, department) {
    employeeDetails.push({ name, id, age, salary, department });
    console.log("employee added successfully...!");


}

function ViewEmployee() {
    console.log("Employee views : ");
    console.log(employeeDetails);

}


function ViewEmployee() {
    console.log("Employee views : ");
    console.log(employeeDetails);

}

function searchID(id) {
    for (let details4 of employeeDetails) {
        if (details4.Id == id) {
            console.log(`Employee id : ${details4.Id} Employee's Details : `);
            console.log(details4);
            break;
        }
        else {
            console.log("your id is not in this list");

        }
    }
}

function Employee_Bonus(salary, bonus) {
    console.log("Final Salary : ")
    console.log(salary + bonus)
}

function RemoveEmployee(id) {
    for (let i = 0; i < employeeDetails.length; i++) {
        if (employeeDetails[i].Id == id) {
            employeeDetails.splice(i, 1);
            console.log(`We removed employee id ${id} details`);
            console.log("balance employee details :");

            console.log(employeeDetails);
            return;

        }
        else {
            console.log("invalid employee id");

        }
    }
}

function SortingEmployees() {
    employeeDetails.sort((a, b) =>
        b.salary - a.salary

    );
    console.log("Sort Employees by Salary");
    
    console.log(employeeDetails);
}

function FindEmployee(name){
    let emp=employeeDetails.find((e)=> e.name == name );

    if(emp){
        console.log("Find employee by name :");
        console.log(emp);
        
    }
    else{
        console.log("invalid employee name");
        
    }

}

function displayEmployee(Id){
    let emp=employeeDetails.find((index) => index.Id == Id);
    console.log("Display Employee Details using Destructuring");
    

    if(emp){
        const {name,Id,age,salary,department}=emp;
        console.log("employee name : "+name);
        console.log("employee Id : "+Id);
        console.log("employee age : "+age);
        console.log("employee salary : "+salary);
        console.log("employee department : "+department);
                
    }

    
}

AddEmployee("somu", 105, 22, 40000, "UI UX developer");
ViewEmployee()
searchID("101")
Employee_Bonus(40000, 4000)
RemoveEmployee("101")
SortingEmployees()
FindEmployee("vijay")
displayEmployee("104")