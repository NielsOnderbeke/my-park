import { Component, Input } from "@angular/core";
import { ParkingData, ParkingZone } from "../api-data.service";

@Component({
	selector: "app-location-list",
	templateUrl: "./location-list.component.html",
	styleUrls: ["./location-list.component.scss"],
})
export class LocationListComponent {
	@Input() data: ParkingData | undefined;

	parkZoneColors = new Map<ParkingZone, string>([
		["Oranje zone", "#ea580c"],
		["Groene zone", "#059669"],
		["Gele zone", "#f59e0b"],
		["Groene zone uitbreiding", "#059669"],
		["Blauwe zone", "blue"],
		["Blauwe zone speciaal", "blue"],
		["Rode zone", "#b91c1c"],
	]);
}
