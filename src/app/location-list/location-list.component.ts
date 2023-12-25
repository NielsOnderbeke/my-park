import { Component, Input } from "@angular/core";
import { ParkingData } from "../api-data.service";

@Component({
	selector: "app-location-list",
	templateUrl: "./location-list.component.html",
	styleUrls: ["./location-list.component.scss"],
})
export class LocationListComponent {
	@Input() data: ParkingData | undefined;

	parkZoneColors = new Map<string, string>([
		["Oranje zone", "#ea580c"],
		["Groene zone", "#059669"],
		["Gele zone", "#f59e0b"],
		["Rode zone", "#b91c1c"],
	]);
}
