var student = {
    name:"apple",
    id:"b1234",
    contact:{
        email:"apple@gmail.com",
        phone:"09213254612"
    }
};


function Student( name,id ){

        this.name = name;
        this.id = id;  
        console.log("Hello, I'm:", this.name,"!", "My ID number is" , this.id,".")
};


var student1 = new Student( "ken", "b1235");

Student.prototype.sayHi = function(){
    document.write("Hello, I'm:", this.name,"!", "My ID number is" , this.id,".");
};


//這段在終端機執行會掛掉!!!
// var student2 = new Student("Kelly","退學");
// student2.sayHi();   