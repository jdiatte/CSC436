import { Component, OnInit } from '@angular/core';

export class Request {
  public orig_airport: string;
  public dest_airport: string;
  public travel_date: Date;
  public num_travelers: number;
  public submit_date: Date;
  public price: number;
}

@Component({
  selector: 'app-request-component',
  templateUrl: './request-component.component.html',
  styleUrls: ['./request-component.component.css']
})
export class RequestComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  model = new Request();

  onSubmit(form): void {
    console.log(form.value);
  }

}
