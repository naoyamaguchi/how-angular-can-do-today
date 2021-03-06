import { BrowserModule, ɵDomSanitizerImpl } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';

// 3rd party (leaflet)
import {icon, Marker} from 'leaflet';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Marker.prototype.options.icon = iconDefault;

// (sentry)
// import * as Raven from 'raven-js';
// Raven.config('https://6e025b377f3945508dfc2b3ef7ca70d3@sentry.io/1436874').install();
// export class RavenErrorHandler implements ErrorHandler {
//   handleError(err: any): void {
//     if (environment.production) {
//       Raven.captureException(err);
//     }
//   }
// }

// component
import { CameraAndMicrophoneComponent, SavePictureDialogComponent } from './camera-and-microphone/camera-and-microphone.component';
import { DeviceFeaturesComponent } from './device-features/device-features.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { TopComponent } from './top/top.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { DevicePositionComponent } from './device-position/device-position.component';
import { BluetoothComponent } from './bluetooth/bluetooth.component';
import { UsbComponent } from './usb/usb.component';
import { AudioVisualizationComponent } from './audio-visualization/audio-visualization.component';
import { FileComponent } from './file/file.component';
import { UploadFileDialogComponent } from './file/upload-file-dialog';
import { PreviewComponent } from './file/preview.component';
import { FileDropDirective } from './directives/file-drop.directive';
import { FormAndValidationComponent } from './form-and-validation/form-and-validation.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GooglePhotoComponent } from './google-photo/google-photo.component';


@NgModule({
  declarations: [
    AppComponent,
    CameraAndMicrophoneComponent,
    DeviceFeaturesComponent,
    NavigationComponent,
    TopComponent,
    GeolocationComponent,
    DevicePositionComponent,
    SavePictureDialogComponent,
    BluetoothComponent,
    UsbComponent,
    AudioVisualizationComponent,
    FileComponent,
    UploadFileDialogComponent,
    PreviewComponent,
    FileDropDirective,
    FormAndValidationComponent,
    CalendarComponent,
    GooglePhotoComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    RouterModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    // material
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatMenuModule,
    MatTooltipModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTableModule,
    CdkTableModule,
    MatExpansionModule,
    MatSliderModule,
    MatSnackBarModule,
    MatDatepickerModule,
  ],
  entryComponents: [
    SavePictureDialogComponent,
    UploadFileDialogComponent,
    PreviewComponent,
  ],
  providers: [
    // { provide: ErrorHandler, useClass: RavenErrorHandler },
    ɵDomSanitizerImpl,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
