import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-shipment',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './shipment.component.html',
  styleUrl: './shipment.component.css'
})
export class ShipmentComponent {

  shipments: any
  shipmentForm: any

  constructor(
    private api: ApiService,
    private builder: FormBuilder
  ){}

  ngOnInit(){
    this.get()
    this.shipmentForm = this.builder.group({
      shipmentId: "",
      sentDate: "",
      endDate: "",
      addressee: "",
      targetCity: ""
    })
  }

  get(){
    this.api.getShipments().subscribe({
      next: (result: any) => {
        console.log(result.data)
        this.shipments = result.data
      }
    })
  }

  add(){
    const newShipment = {
      shipmentId: this.shipmentForm.value.shipmentId,
      sentDate: this.shipmentForm.value.sentDate,
      endDate: this.shipmentForm.value.endDate,
      addressee: this.shipmentForm.value.addressee,
      targetCity: this.shipmentForm.value.targetCity          
    }
    this.api.addShipment(newShipment).subscribe({
      next: (result) => {
        console.log(result)
        this.get()
        this.shipmentForm.reset()
      }
    })
  }
}
