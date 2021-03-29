import { Injectable } from '@angular/core';
import { Network} from '@ionic-native/network';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class NetworkService {
	
	constructor(private network: Network) {

	}

	NoConnection() {
			console.log("Non Connesso");
			return (this.network.type === 'none');
	}

	OnConnected () : Observable<any>{
			console.log("Connesso");
			return this.network.onConnect();
	}

	OnDisConnected () : Observable<any>{
			console.log("DisConnesso");
			return this.network.onDisconnect();
	}

}