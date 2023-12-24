import { Component, OnInit } from "@angular/core";
import { ApiDataService, ParkingData } from "./api-data.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	title = "my-park";

	data: ParkingData | undefined;

	constructor(private dataService: ApiDataService) {}

	ngOnInit(): void {
		this.dataService.getData().subscribe((result) => {
			this.data = result;
		});
	}
}
