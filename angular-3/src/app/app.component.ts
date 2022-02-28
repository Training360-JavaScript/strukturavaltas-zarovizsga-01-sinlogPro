import { ConstructionService } from './service/construction.service';
import { DrugService } from './service/drug.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Drug } from './model/drug';
import { Construction } from './model/construction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-3';

  constructor(
    private drugService: DrugService,
    private constructionService:  ConstructionService,
  ) { }

  allDrug$: Observable<Drug[]> = this.drugService.getAll();

  allConstruction$: Observable<Construction[]> = this.constructionService.getAll();

  onDelete(construction: Construction) {
    console.log(construction);
    this.constructionService.delete(construction).subscribe(
      x => this.allConstruction$ = this.constructionService.getAll()

    );
  }



}
