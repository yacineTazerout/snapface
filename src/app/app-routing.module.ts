import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SnapListsComponent } from "./snap-lists/snap-lists.component";
import { HomeComponent } from "./home/home.component";
import { SingleSnapComponent } from "./single-snap/single-snap.component";

const routes: Routes = [
    { path : '', component: HomeComponent},
   { path: 'facesnaps', component: SnapListsComponent},
   { path: 'facesnaps/:id', component:SingleSnapComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)    
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}