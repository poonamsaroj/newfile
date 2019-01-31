import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel-wise-pie',
  templateUrl: './channel-wise-pie.component.html',
  styleUrls: ['./channel-wise-pie.component.css']
})
export class ChannelWisePieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public pieChartLabels:string[] = ['Reviewed', 'Not Reviewed'];
  public pieChartData:number[] = [300, 500];
  public pieChartType:string = 'pie';
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
