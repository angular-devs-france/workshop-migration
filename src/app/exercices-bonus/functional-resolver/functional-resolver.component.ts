import {Component, Input} from '@angular/core';
import {Product} from "../../exercices/signals-state/internals/product.model";

@Component({
  selector: 'app-functional-resolver',
  standalone: true,
  imports: [],
  templateUrl: './functional-resolver.component.html'
})
export class FunctionalResolverComponent {
  @Input() products!: Product[];

}
