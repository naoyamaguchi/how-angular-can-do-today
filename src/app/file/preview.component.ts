import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit, OnDestroy {
  private _closing = new EventEmitter<{}>();

  private _discription = '';
  private _url: SafeUrl = '';
  private _size = 0;
  private _sizeUnit = '';
  private _filename = '';

  ngOnInit() {
    // console.log(`SampleComponent.ngOnInit >> no="${this._no}"`);
  }

  ngOnDestroy() {
    // console.log(`SampleComponent.ngOnDestroy >> no="${this._no}"`);
  }

  public get closing(): Observable<{}> {
    return this._closing;
  }

  public set discription(value: string) {
    this._discription = value;
  }
  public set url(value: SafeUrl) {
    this._url = value;
  }
  public set size(value: number) {
    this._size = value;
    if ((this._size / 1000) < 1) {
        this._sizeUnit = this._size + ' B';
    } else if ((this._size / 1000000) < 1) {
        this._sizeUnit = Math.round(this._size / 1000) + ' KB';
    } else if ((this._size / 1000000) < 1) {
        this._sizeUnit = Math.round(this._size / 1000000) + ' MB';
    }
  }
  public set filename(value: string) {
    this._filename = value;
  }

  del(): void {
    this._closing.emit({});
  }

}