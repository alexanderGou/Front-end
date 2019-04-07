import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private _sendMessage: ReplaySubject<any> = new ReplaySubject(1);

  constructor() {
  }

  public sendMessage(message: any): void {
    this._sendMessage.next(message);
  }

  public getMessage(): Observable<any> {
    return this._sendMessage.asObservable();
  }
}
