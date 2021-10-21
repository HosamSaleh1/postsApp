import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './views/about/about.component';
import { PostsComponent } from './views/posts/posts.component';
import { ProfileComponent } from './views/profile/profile.component';
import { UsersComponent } from './views/users/users.component';

const routes: Routes = [
  {path:'',component:UsersComponent},
  {path:'profile',component:ProfileComponent},
  {path:'posts',component:PostsComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
