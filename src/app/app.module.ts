import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MapViewComponent } from "./map-view/map-view.component";
import { LocationListComponent } from "./location-list/location-list.component";

import { HttpClientModule } from "@angular/common/http";
import { NgIconsModule } from "@ng-icons/core";
import { bootstrapChevronCompactRight } from "@ng-icons/bootstrap-icons";
import { LocationFiltersComponent } from "./location-filters/location-filters.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
	declarations: [AppComponent, MapViewComponent, LocationListComponent],
	providers: [],
	bootstrap: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		NgIconsModule.withIcons({ bootstrapChevronCompactRight }),
		BrowserAnimationsModule,
		LocationFiltersComponent,
	],
})
export class AppModule {}
