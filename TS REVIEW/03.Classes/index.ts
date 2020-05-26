class Pizza {
    public tomate: boolean = false;
    public chesse: string ="";
    public bacon: boolean = false;
    public otherIngredients: Array<string> = [""];

    setChesse(cheese: string): Pizza {
        this.chesse = cheese;
        return this;
    }

    setBacon(): Pizza {
        this.bacon = true;
        return this;
    }

    setOtherIngredients(ingredients: string[]): Pizza {
        this.otherIngredients = ingredients;
        return this;
    }

    build(){
        return this;
    }
}

const pepperoniPizza: Pizza = new Pizza();
pepperoniPizza
    .setBacon()
    .setChesse("Mozzarella")
    .setOtherIngredients(["Tomato"])
    .build();

console.log(pepperoniPizza);