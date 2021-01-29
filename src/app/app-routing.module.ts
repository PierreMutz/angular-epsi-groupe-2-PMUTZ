import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CanActivateGuard } from "./core/can-activate.guard";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(mod => mod.AuthModule)
  },
  {
    path: "dash",
    canActivate: [CanActivateGuard],
    data: { admin: true },
    loadChildren: () => import("./dash/dash.module").then(mod => mod.DashModule)
  },
  {
    path: "**",
    redirectTo: "auth/landing"
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then(mod => mod.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
