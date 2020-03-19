class parent{
    constructor( ){
        this.fathersName = "Eng.Rashedur Rahman";
        this.mothersName = "Mouly Rahman";
        this.village = "Birazpur";
         
    }
}


class child extends parent{
    constructor(name, sId, sBatch){
        super();
        this.name = name;
        this.Id = sId;
        this.batch = sBatch;
    }
}
const baby = new child("sayem",01, 77);
const baby2 = new child("nittaya",02, 77);
console.log(baby);
console.log(baby2);