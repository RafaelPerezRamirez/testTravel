import { Component, OnInit } from '@angular/core';
import { DestinationsService } from '../../services/destinations.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    newReservation:any ={
        type: "",
        salida: "",
        regreso: "",
        fsalida: "",
        fregreso: "",
        pasajeros: ""
    }
    cities:any;
    constructor( private destinations:DestinationsService, private _router:Router,
    private activated:ActivatedRoute ) {
    }
    ngOnInit() {
      this.destinations.getDestination().subscribe( data=>{
          this.cities = data["aeropuertos"];
          setTimeout(function(){
              $("#niceSelect, #niceSelectTwo").niceSelect();
          },0);
      })
      $( function() {
          $( "#datepicker, #datepickerTwo" ).datepicker();
      } );
    }
    guardar(){
        var form = document.forms[0];
        this.newReservation.salida      = (<HTMLInputElement>form.querySelector('#niceSelect')).value;
        this.newReservation.regreso     = (<HTMLInputElement>form.querySelector('#niceSelectTwo')).value;
        this.newReservation.fsalida     = (<HTMLInputElement>form.querySelector('#datepicker')).value;
        this.newReservation.fregreso    = (<HTMLInputElement>form.querySelector('#datepickerTwo')).value;
        this.newReservation.pasajeros   = (<HTMLInputElement>form.querySelector('#numPas')).value;
        this._router.navigate(['/showData', this.newReservation]);
    }
}
