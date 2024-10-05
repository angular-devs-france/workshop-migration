import {Component, Input} from '@angular/core';
import {Product} from "../../exercices/signals-state/models/product.model";

@Component({
  selector: 'app-functional-resolver',
  standalone: true,
  imports: [],
  templateUrl: './functional-resolver.component.html'
})
export class FunctionalResolverComponent {
  @Input() products!: Product[];

}
