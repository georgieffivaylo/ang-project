import { Injectable } from "@angular/core";
import { Recipe } from "../recepies/recipe.model";
import { Ingredient } from "../shared/igredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class RecipeService {

    // ingredientsSended = new EventEmitter<Ingredient[]>();

    private recepies: Recipe[] = [
        new Recipe('A test recipe', 
        'A desc', 
        'https://p0.pxfuel.com/preview/995/747/603/recipe-dish-lunch-nutrition.jpg',
        [
            new Ingredient('meat', 1),
            new Ingredient('french fries', 20)
        ]),
        new Recipe('Recipe 2', 
        'Desc 2', 
        'https://p1.pxfuel.com/preview/9/287/761/tomatoes-cooked-eat-breadcrumbs-herbs-italian-recipe.jpg',
        [
            new Ingredient('buns', 2),
            new Ingredient('meat', 1)
        ])
    ];

    constructor(private shoppingListService: ShoppingListService) {

    }

    getRecepies(): Recipe[] {
        return this.recepies.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipeById(id: number) {
        return this.recepies.slice()[id];
    }

}