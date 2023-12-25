import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface ParkingData {
	total_count: number;
	results: Array<{
		geometry: {
			type: string;
			geometry: {
				coordinates: [number, number];
				type: string;
			};
			properties: {};
		};
		urid: string;
		parkeertariefzone: string;
		bewonerszone: string;
		panr: number;
		betaalmodus: string;
		status: string;
		categorie: string;
		gexxxx: string;
		straat: string;
		huisnr: string;
		betrokkenadressen: string;
		bronid: string;
		timestampbron: string;
		geo_point_2d: {
			lon: number;
			lat: number;
		};
		haversine?: number;
	}>;
}

@Injectable({
	providedIn: "root",
})
export class ApiDataService {
	private apiUrl =
		"https://data.stad.gent/api/explore/v2.1/catalog/datasets/locaties-parkeerautomaten-gent/records?limit=50";

	constructor(private http: HttpClient) {}

	getData(): Observable<ParkingData> {
		return this.http.get(this.apiUrl) as Observable<ParkingData>;
	}
}
