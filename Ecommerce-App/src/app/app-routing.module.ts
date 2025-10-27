import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionPageComponent } from './description-page/description-page.component';

const routes: Routes = [

//
{path:'',redirectTo:'/description-page/1',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
