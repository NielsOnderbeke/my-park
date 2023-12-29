import { Component } from "@angular/core";
import { MatChipsModule } from "@angular/material/chips";
import { ApiDataService, ParkingZone } from "../api-data.service";
import { CommonModule } from "@angular/common";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { bootstrapMapFill } from "@ng-icons/bootstrap-icons";

@Component({
	selector: "app-location-filters",
	templateUrl: "./location-filters.component.html",
	styleUrls: ["./location-filters.component.scss"],
	standalone: true,
  imports: [MatChipsModule, CommonModule, NgIconComponent],
  providers: [provideIcons({ bootstrapMapFill })],
})
export class LocationFiltersComponent {
	parkingZones: ParkingZone[] = [];
	parkZoneColors: Map<ParkingZone, string> = new Map();

	constructor(private dataService: ApiDataService) {}

	ngOnInit() {
		this.parkingZones = [...this.dataService.parkingZones];
		this.parkZoneColors = this.dataService.parkZoneColors;
	}
}
