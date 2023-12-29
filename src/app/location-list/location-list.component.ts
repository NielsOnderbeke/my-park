import { Component, Input } from "@angular/core";
import { ApiDataService, ParkingData, ParkingZone } from "../api-data.service";

@Component({
	selector: "app-location-list",
	templateUrl: "./location-list.component.html",
	styleUrls: ["./location-list.component.scss"],
})
export class LocationListComponent {
	@Input() data: ParkingData | undefined;

	parkZoneColors: Map<ParkingZone, string> = new Map();

	constructor(private dataService: ApiDataService) {}

	ngOnInit() {
		this.parkZoneColors = this.dataService.parkZoneColors;
	}
}
