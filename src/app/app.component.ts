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

	tempOwnCoord = { lat: 50.91624517547351, lon: 3.6519480627756433 };

	haversine(lat1: number, lon1: number, lat2: number, lon2: number): number {
		const R = 6371.0; // Earth radius in kilometers

		// Convert latitude and longitude from degrees to radians
		const toRadians = (angle: number) => (angle * Math.PI) / 180.0;
		lat1 = toRadians(lat1);
		lon1 = toRadians(lon1);
		lat2 = toRadians(lat2);
		lon2 = toRadians(lon2);

		// Calculate the differences
		const dlat = lat2 - lat1;
		const dlon = lon2 - lon1;

		// Haversine formula
		const a = Math.sin(dlat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) ** 2;
		const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		const distance = R * c;

		return distance;
	}

	constructor(private dataService: ApiDataService) {}

	ngOnInit(): void {
		this.dataService.getData().subscribe((result) => {
			this.data = {
				...result,
				results: result.results
					.map((item) => ({
						...item,
						haversine: this.haversine(
							item.geo_point_2d.lat,
							item.geo_point_2d.lon,
							this.tempOwnCoord.lat,
							this.tempOwnCoord.lon,
						),
					}))
					.sort((a, b) => {
						return a.haversine - b.haversine;
					}),
			};
		});
	}
}
