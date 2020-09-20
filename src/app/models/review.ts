export class Review {
    id:string;
    name:string;
    email:string;
    description:string;
    date:Date;
    




    constructor(id:string,name:string,email:string,description:string,date:Date)
        {

            this.id=id;
            this.name=name;
            this.email=email;
            this.description=description;
            this.date=new Date();
        }
}
