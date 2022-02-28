import { CarService } from 'src/app/service/car.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Car } from 'src/app/model/car';

@Component({
  selector: 'app-car-editor',
  templateUrl: './car-editor.component.html',
  styleUrls: ['./car-editor.component.scss']
})
export class CarEditorComponent implements OnInit {

  car$: Observable<Car> = this.ar.params.pipe(
    switchMap(params => this.carService.get(params['id']))
  );

  constructor(
    private carService: CarService,
    private router: Router,
    private ar: ActivatedRoute

  ) { }

  ngOnInit(): void {
  }

  onUpdate(car: Car) {
    console.log(car);
	return this.carService.update(car).subscribe(
      car => this.router.navigate(['', 'car']),
    )
  }

}
