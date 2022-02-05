// give me a example of inharitance

class Car {
    constructor(brand){
        this.brand=brand;
    }
    showBrand(){
        return 'This is '+ this.brand +'. '
    }
}

const car = new Car('Tesla');
class Model extends Car {
    constructor(brand,model){
        super(brand)
        this.model = model
    }
    showModel(){
        return this.model
    }
    showCar(){
        return this.showBrand() + this.showModel();
    }
}
const model = new Model('M1','Tesla');
console.log(model.showCar())

//getter and setter methods

class Company {
    constructor(name){
        this._name=name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value
    }
}

const company = new Company('Walmart');
company.name = 'Google';
console.log(company.name);

//counter program using getter and setter

class Counter{
    constructor(){
        this._count=0;
    }
    set increment(value){
        this._count+=value;
    }
    set decrement(value){
        this._count-=value
    }
    get count(){
        return this._count;
    }
}

const counter = new Counter();
counter.increment = 5;
counter.decrement =2;
console.log(counter.count)


//inharitance using function

function Person(qualification,job){
    this.qualification = qualification;
    this.job = job;


}

function Appicant(qualification,job,name,designation){
    Person.call(this,qualification,job);
    this.name = name;
    this.designation = designation;
}
const applicant = new Appicant('BTech','Engineer','Suprit','Software Engineer')
console.log(applicant)