import { ModuleWithProviders, NgModule } from '@angular/core';
import { GtagEventDirective } from './directive/gtag-event.directive';
import { GtagConfig } from './interface/gtag-config';
import { GtagAPIService } from './service/gtag-api.service';

@NgModule({
  declarations: [GtagEventDirective],
  exports: [GtagEventDirective],
})
export class GtagModule {
  public static forRoot(config: GtagConfig): ModuleWithProviders<GtagModule> {
    return {
      ngModule: GtagModule,
      providers: [GtagAPIService, { provide: 'config', useValue: config }],
    };
  }
}
