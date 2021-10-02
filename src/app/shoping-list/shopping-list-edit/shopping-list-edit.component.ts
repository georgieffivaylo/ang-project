import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/igredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  @ViewChild("f", { static: false }) form: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngredient(this.editedItemIndex);
      this.form.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  onAddEditItem(form: NgForm) {
    if (!this.editMode) {
      const value = form.value;
      const ingredient = new Ingredient(value.name, value.amount);
      this.shoppingListService.addIngredient(ingredient);
    } else {
      this.shoppingListService.getIngredient(this.editedItemIndex).amount = form.value.amount;
    }
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.form.reset();
  }

  onDelete() {
    if (this.editMode) {
      this.onClear();
      this.shoppingListService.deleteIngredient(this.editedItemIndex);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
