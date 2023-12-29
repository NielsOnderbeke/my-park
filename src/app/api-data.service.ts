import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const parkingZones = [
	"Oranje zone",
	"Groene zone",
	"Gele zone",
	"Rode zone",
	"Blauwe zone",
	"Blauwe zone speciaal",
	"Groene zone uitbreiding",
] as const;
export type ParkingZone = (typeof parkingZones)[number];

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
		parkeertariefzone: ParkingZone;
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

const parkZoneColors = new Map<ParkingZone, string>([
	["Oranje zone", "#ea580c"],
	["Groene zone", "#059669"],
	["Gele zone", "#f59e0b"],
	["Groene zone uitbreiding", "#059669"],
	["Blauwe zone", "blue"],
	["Blauwe zone speciaal", "blue"],
	["Rode zone", "#b91c1c"],
]);

@Injectable({
	providedIn: "root",
})
export class ApiDataService {
	public readonly parkingZones = parkingZones;
	public readonly parkZoneColors = parkZoneColors;

	private apiUrl =
		"https://data.stad.gent/api/explore/v2.1/catalog/datasets/locaties-parkeerautomaten-gent/records?limit=50";

	constructor(private http: HttpClient) {}

	getData(): Observable<ParkingData> {
		return this.http.get(this.apiUrl) as Observable<ParkingData>;
	}
}
