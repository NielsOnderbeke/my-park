import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MapViewComponent } from "./map-view/map-view.component";
import { LocationListComponent } from "./location-list/location-list.component";

import { HttpClientModule } from "@angular/common/http";
import { NgIconsModule } from "@ng-icons/core";
import { bootstrapChevronCompactRight } from "@ng-icons/bootstrap-icons";

@NgModule({
	declarations: [AppComponent, MapViewComponent, LocationListComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		NgIconsModule.withIcons({ bootstrapChevronCompactRight }),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
