//Interfaces

interface IAnimal {
    name: string;
    color: string
}

const dog: IAnimal = {
    name:"Snoopy",
    color:"white"
}

interface OnInit {
    ngOnInit():void;
}

class MyComponent implements OnInit {
    ngOnInit(): void {
        console.log();
    }

}