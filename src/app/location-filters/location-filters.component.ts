import { Component } from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import { ApiDataService, ParkingZone } from "../api-data.service";
import { CommonModule } from '@angular/common';


@Component({
	selector: "app-location-filters",
	templateUrl: "./location-filters.component.html",
	styleUrls: ["./location-filters.component.scss"],
	standalone: true,
	imports: [MatChipsModule, CommonModule],
})
export class LocationFiltersComponent {
	parkingZones: ParkingZone[] = [];

	constructor(private dataService: ApiDataService) {}

	ngOnInit() {
		this.parkingZones = [...this.dataService.parkingZones];
	}
}
