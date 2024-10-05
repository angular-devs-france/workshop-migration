import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {Product} from "../../exercices/signals-state/internals/product.model";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<Product[]> {
  constructor(private apiService: ApiService) {}
  resolve(): Observable<Product[]> {
    return this.apiService.getProducts();
  }
}
