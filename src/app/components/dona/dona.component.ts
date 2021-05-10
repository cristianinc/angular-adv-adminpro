import { Component, Input, Output } from '@angular/core';
import { Label, Color, MultiDataSet } from 'ng2-charts';



@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: []
})
export class DonaComponent {


  @Input() title: string = '';
  
  @Input('labels') doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];;
  @Input('data')  doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
  

  public colors:Color[] = [
    { backgroundColor: ['#9E120E', '#FF5800', '#FFB414'] }
  ];

}
