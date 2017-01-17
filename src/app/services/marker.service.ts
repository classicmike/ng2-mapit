import {Injectable} from '@angular/core';
import { Init } from '../init-markers';

@Injectable()

export class MarkerService extends Init {
    constructor(){
        super();
        console.log('Marker Service Initalised');
        this.load();
    }

    getMarkers(){
        var markers = JSON.parse(localStorage.getItem('markers'));

        return markers;
    }

    addMarker(newMarker){
        //Fetch markers
        var markers = JSON.parse(localStorage.getItem('markers'));

        markers.push(newMarker);

        //Set the local storage
        localStorage.setItem('markers', JSON.stringify(markers));
    }

    updateMarker(marker, newLat, newLng){
        var markers = JSON.parse(localStorage.getItem('markers'));

        for(var i = 0; i < markers.length; i++){
            if(marker.lat === markers[i].lat  && marker.lng === markers[i].lng){
                markers[i].lat = newLat;
                markers[i].lng = newLng;
            }
        }

        //Set the local storage
        localStorage.setItem('markers', JSON.stringify(markers));
    }

    removeMarker(marker){
        var markers = JSON.parse(localStorage.getItem('markers'));

        for(var i = 0; i < markers.length; i++){
            if(marker.lat === markers[i].lat && marker.lng === markers[i].lng){
                markers.splice(i, 1);
            }
        }

        localStorage.setItem('markers', JSON.stringify(markers));
    }
}