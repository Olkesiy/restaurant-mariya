export class Contact {

    _id: string
    id:string;
    name:string;
    email:string;
    phone:string;
    date:string;
    time:string;
    howmany:string;
    comment:string;
    
    




    constructor(id:string,name:string,email:string,phone:string,date:string,time:string,howmany:string,comment:string)
        {

            this.id=id;
            this.name=name;
            this.email=email;
            this.phone=phone;
            this.date=date;
            this.time=time;
            this.howmany=howmany;
            this.comment=comment;

        }
}
