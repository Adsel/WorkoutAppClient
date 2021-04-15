import {Component, Inject, OnInit} from '@angular/core';
import {PlanerService} from '../../core/planer.service';
import {Config, CONFIG, Plan} from '../../model';

@Component({
  selector: 'app-planner-list',
  templateUrl: './planer-list.component.html',
  styleUrls: ['./planer-list.component.scss']
})
export class PlanerListComponent implements OnInit {
  viewNameBold = 'Planer';
  viewNameRegular = 'List';
  plans: Plan[];

  constructor(
    private planerService: PlanerService,
    @Inject(CONFIG) private config: Config
  ) { }

  ngOnInit(): void {
    this.plans = [];
    this.planerService.getPlanCategories().subscribe(response => {
      if (!!response && !!response.plans) {
        response.plans.forEach(plan => {
          this.planerService.getPlanCategory(plan.training_plan_category_id).subscribe(category => {
            this.plans.push({
              id: plan.id,
              name: plan.name,
              description: plan.description,
              image: plan.image,
              categoryId: category.id,
              categoryName: category.name
            });
          });
        });
      }
    });
  }

}
