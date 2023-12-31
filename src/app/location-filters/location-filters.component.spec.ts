import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LocationFiltersComponent } from "./location-filters.component";

describe("LocationFiltersComponent", () => {
	let component: LocationFiltersComponent;
	let fixture: ComponentFixture<LocationFiltersComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [LocationFiltersComponent],
		});
		fixture = TestBed.createComponent(LocationFiltersComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
