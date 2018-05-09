import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Angular FlexLayout */
import { FlexLayoutModule } from '@angular/flex-layout';

/* Angular Material */
import { PlunkerMaterialModule } from '../plunker-material.module';

/* Shared Modules */
import { SharedModule } from '../shared/shared.module';

/* Components Modules */
import { ZeroModule } from '../components/zero.module';

import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

/* Directives */
import { NavDropdownDirective, NavDropdownToggleDirective } from './sidenav/nav-dropdown.directive';
import { PsDirective } from './sidenav/perfect-scrollable.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    PlunkerMaterialModule,
    SharedModule,
    ZeroModule
  ],
  declarations: [LayoutComponent, NavbarComponent, SidenavComponent, NavDropdownDirective, NavDropdownToggleDirective, PsDirective],
  exports: [LayoutComponent]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
