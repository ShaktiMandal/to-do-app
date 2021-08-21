import { EventEmitter, Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class AppService {

    public MenuSelectionEvent = new EventEmitter<string>();
}