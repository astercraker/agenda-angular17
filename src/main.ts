import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF1cWmhIYVRpR2Nbe05zflRBal5ZVBYiSV9jS31SdEVrWHpfeHdVRWFfUQ==');

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
