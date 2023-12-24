import { Component, Input } from "@angular/core";
import { ParkingData } from "../api-data.service";

@Component({
	selector: "app-location-list",
	templateUrl: "./location-list.component.html",
	styleUrls: ["./location-list.component.scss"],
})
export class LocationListComponent {
	@Input() data: ParkingData | undefined;

	parkZoneColors = new Map([
		["Oranje zone", "orange"],
		["Gele zone", "gold"],
		["Rode zone", "yellow"],
	]);
}
