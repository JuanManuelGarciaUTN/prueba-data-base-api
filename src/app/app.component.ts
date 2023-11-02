import { Component } from '@angular/core';
import { Caballo } from './caballo-actual';
import { CarreraDatos, Tipo } from './carrera-datos';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public caballos:Caballo[] = [];
  public distancia = "0";
  public tipo: Tipo = Tipo.ninguno;
  public id = "0";
  public ganador = "1";
  public cab1:Caballo = this.inicializar();
  public cab2:Caballo = this.inicializar();
  public cab3:Caballo = this.inicializar();
  public cab4:Caballo = this.inicializar();
  public cab5:Caballo = this.inicializar();
  public cab6:Caballo = this.inicializar();
  public cab7:Caballo = this.inicializar();
  public cab8:Caballo = this.inicializar();
  public cab9:Caballo = this.inicializar();
  public cab10:Caballo = this.inicializar();
  public cab11:Caballo = this.inicializar();
  public cab12:Caballo = this.inicializar();
  public cab13:Caballo = this.inicializar();
  public cab14:Caballo = this.inicializar();
  public cab15:Caballo = this.inicializar();

  private apiUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  private inicializar():Caballo{
    return {actual:{edad:0,jockey:0,numero:0,peso_caballo:0,peso_jockey:0, sexo:0,spot:0}, anterior:[{cuerpos:0,distancia:0,jockey:0,numero:0,peso_jockey:0,posicion:0,spot:0,tiempo:0,tipo:0},{cuerpos:0,distancia:0,jockey:0,numero:0,peso_jockey:0,posicion:0,spot:0,tiempo:0,tipo:0},{cuerpos:0,distancia:0,jockey:0,numero:0,peso_jockey:0,posicion:0,spot:0,tiempo:0,tipo:0}]};
  }
  guardar(){
    const carrera:CarreraDatos = {
      id: this.id,
      ganador:  Number(this.ganador),
      distancia: Number(this.distancia),
      tipo: this.tipo,
      caballos:[
        this.cab1,
        this.cab2,
        this.cab3,
        this.cab4,
        this.cab5,
        this.cab6,
        this.cab7,
        this.cab8,
        this.cab9,
        this.cab10,
        this.cab11,
        this.cab12,
        this.cab13,
        this.cab14,
        this.cab15
      ],
    }
    const sub = this.http.post("http://localhost:3000/api/add",carrera).subscribe(     
    (response) => {
      sub.unsubscribe();
      console.log('Data added successfully:', response);
    });
    console.log(carrera);
  }

  buscar(){
    const sub = this.http.get("http://localhost:3000/api/buscar/" + this.id).subscribe(     
      (response:any) => {
        sub.unsubscribe();
        console.log('Data added successfully:', response);
        const carrera = response.carrera;
        this.ganador = carrera.ganador;
        this.distancia = carrera.distancia;
        this.tipo = carrera.tipo;
        this.cab1 = {
          actual:{
            numero: carrera.caballo1_actual_numero,
            sexo: carrera.caballo1_actual_sexo,
            edad: carrera.caballo1_actual_edad,
            peso_jockey: carrera.caballo1_actual_peso_jockey,
            jockey: carrera.caballo1_actual_jockey,
            peso_caballo: carrera.caballo1_actual_peso_caballo,
            spot: carrera.caballo1_actual_spot ,
          },
          anterior:[
            {
              distancia: carrera.caballo1_anterior1_distancia,
              tipo: carrera.caballo1_anterior1_tipo,
              numero: carrera.caballo1_anterior1_numero,
              posicion: carrera.caballo1_anterior1_posicion,
              cuerpos: carrera.caballo1_anterior1_cuerpos,
              tiempo: carrera.caballo1_anterior1_tiempo,
              spot: carrera.caballo1_anterior1_spot,
              peso_jockey: carrera.caballo1_anterior1_peso_jockey,
              jockey: carrera.caballo1_anterior1_jockey,
            },
            {
              distancia: carrera.caballo1_anterior2_distancia,
              tipo: carrera.caballo1_anterior2_tipo,
              numero: carrera.caballo1_anterior2_numero,
              posicion: carrera.caballo1_anterior2_posicion,
              cuerpos: carrera.caballo1_anterior2_cuerpos,
              tiempo: carrera.caballo1_anterior2_tiempo,
              spot: carrera.caballo1_anterior2_spot,
              peso_jockey: carrera.caballo1_anterior2_peso_jockey,
              jockey: carrera.caballo1_anterior2_jockey,
            },
            {
              distancia: carrera.caballo1_anterior3_distancia,
              tipo: carrera.caballo1_anterior3_tipo,
              numero: carrera.caballo1_anterior3_numero,
              posicion: carrera.caballo1_anterior3_posicion,
              cuerpos: carrera.caballo1_anterior3_cuerpos,
              tiempo: carrera.caballo1_anterior3_tiempo,
              spot: carrera.caballo1_anterior3_spot,
              peso_jockey: carrera.caballo1_anterior3_peso_jockey,
              jockey: carrera.caballo1_anterior3_jockey,
            }
          ]
        };
        this.cab2 = {
          actual:{
            numero: carrera.caballo2_actual_numero,
            sexo: carrera.caballo2_actual_sexo,
            edad: carrera.caballo2_actual_edad,
            peso_jockey: carrera.caballo2_actual_peso_jockey,
            jockey: carrera.caballo2_actual_jockey,
            peso_caballo: carrera.caballo2_actual_peso_caballo,
            spot: carrera.caballo2_actual_spot ,
          },
          anterior:[
            {
              distancia: carrera.caballo2_anterior1_distancia,
              tipo: carrera.caballo2_anterior1_tipo,
              numero: carrera.caballo2_anterior1_numero,
              posicion: carrera.caballo2_anterior1_posicion,
              cuerpos: carrera.caballo2_anterior1_cuerpos,
              tiempo: carrera.caballo2_anterior1_tiempo,
              spot: carrera.caballo2_anterior1_spot,
              peso_jockey: carrera.caballo2_anterior1_peso_jockey,
              jockey: carrera.caballo2_anterior1_jockey,
            },
            {
              distancia: carrera.caballo2_anterior2_distancia,
              tipo: carrera.caballo2_anterior2_tipo,
              numero: carrera.caballo2_anterior2_numero,
              posicion: carrera.caballo2_anterior2_posicion,
              cuerpos: carrera.caballo2_anterior2_cuerpos,
              tiempo: carrera.caballo2_anterior2_tiempo,
              spot: carrera.caballo2_anterior2_spot,
              peso_jockey: carrera.caballo2_anterior2_peso_jockey,
              jockey: carrera.caballo2_anterior2_jockey,
            },
            {
              distancia: carrera.caballo2_anterior3_distancia,
              tipo: carrera.caballo2_anterior3_tipo,
              numero: carrera.caballo2_anterior3_numero,
              posicion: carrera.caballo2_anterior3_posicion,
              cuerpos: carrera.caballo2_anterior3_cuerpos,
              tiempo: carrera.caballo2_anterior3_tiempo,
              spot: carrera.caballo2_anterior3_spot,
              peso_jockey: carrera.caballo2_anterior3_peso_jockey,
              jockey: carrera.caballo2_anterior3_jockey,
            }
          ]
        };
        this.cab3 = {
          actual:{
            numero: carrera.caballo3_actual_numero,
            sexo: carrera.caballo3_actual_sexo,
            edad: carrera.caballo3_actual_edad,
            peso_jockey: carrera.caballo3_actual_peso_jockey,
            jockey: carrera.caballo3_actual_jockey,
            peso_caballo: carrera.caballo3_actual_peso_caballo,
            spot: carrera.caballo3_actual_spot ,
          },
          anterior:[
            {
              distancia: carrera.caballo3_anterior1_distancia,
              tipo: carrera.caballo3_anterior1_tipo,
              numero: carrera.caballo3_anterior1_numero,
              posicion: carrera.caballo3_anterior1_posicion,
              cuerpos: carrera.caballo3_anterior1_cuerpos,
              tiempo: carrera.caballo3_anterior1_tiempo,
              spot: carrera.caballo3_anterior1_spot,
              peso_jockey: carrera.caballo3_anterior1_peso_jockey,
              jockey: carrera.caballo3_anterior1_jockey,
            },
            {
              distancia: carrera.caballo3_anterior2_distancia,
              tipo: carrera.caballo3_anterior2_tipo,
              numero: carrera.caballo3_anterior2_numero,
              posicion: carrera.caballo3_anterior2_posicion,
              cuerpos: carrera.caballo3_anterior2_cuerpos,
              tiempo: carrera.caballo3_anterior2_tiempo,
              spot: carrera.caballo3_anterior2_spot,
              peso_jockey: carrera.caballo3_anterior2_peso_jockey,
              jockey: carrera.caballo3_anterior2_jockey,
            },
            {
              distancia: carrera.caballo3_anterior3_distancia,
              tipo: carrera.caballo3_anterior3_tipo,
              numero: carrera.caballo3_anterior3_numero,
              posicion: carrera.caballo3_anterior3_posicion,
              cuerpos: carrera.caballo3_anterior3_cuerpos,
              tiempo: carrera.caballo3_anterior3_tiempo,
              spot: carrera.caballo3_anterior3_spot,
              peso_jockey: carrera.caballo3_anterior3_peso_jockey,
              jockey: carrera.caballo3_anterior3_jockey,
            }
          ]
        };
        this.cab4 = {
          actual:{
            numero: carrera.caballo4_actual_numero,
            sexo: carrera.caballo4_actual_sexo,
            edad: carrera.caballo4_actual_edad,
            peso_jockey: carrera.caballo4_actual_peso_jockey,
            jockey: carrera.caballo4_actual_jockey,
            peso_caballo: carrera.caballo4_actual_peso_caballo,
            spot: carrera.caballo4_actual_spot ,
          },
          anterior:[
            {
              distancia: carrera.caballo4_anterior1_distancia,
              tipo: carrera.caballo4_anterior1_tipo,
              numero: carrera.caballo4_anterior1_numero,
              posicion: carrera.caballo4_anterior1_posicion,
              cuerpos: carrera.caballo4_anterior1_cuerpos,
              tiempo: carrera.caballo4_anterior1_tiempo,
              spot: carrera.caballo4_anterior1_spot,
              peso_jockey: carrera.caballo4_anterior1_peso_jockey,
              jockey: carrera.caballo4_anterior1_jockey,
            },
            {
              distancia: carrera.caballo4_anterior2_distancia,
              tipo: carrera.caballo4_anterior2_tipo,
              numero: carrera.caballo4_anterior2_numero,
              posicion: carrera.caballo4_anterior2_posicion,
              cuerpos: carrera.caballo4_anterior2_cuerpos,
              tiempo: carrera.caballo4_anterior2_tiempo,
              spot: carrera.caballo4_anterior2_spot,
              peso_jockey: carrera.caballo4_anterior2_peso_jockey,
              jockey: carrera.caballo4_anterior2_jockey,
            },
            {
              distancia: carrera.caballo4_anterior3_distancia,
              tipo: carrera.caballo4_anterior3_tipo,
              numero: carrera.caballo4_anterior3_numero,
              posicion: carrera.caballo4_anterior3_posicion,
              cuerpos: carrera.caballo4_anterior3_cuerpos,
              tiempo: carrera.caballo4_anterior3_tiempo,
              spot: carrera.caballo4_anterior3_spot,
              peso_jockey: carrera.caballo4_anterior3_peso_jockey,
              jockey: carrera.caballo4_anterior3_jockey,
            }
          ]
        };
        this.cab5 = {
          actual:{
            numero: carrera.caballo5_actual_numero,
            sexo: carrera.caballo5_actual_sexo,
            edad: carrera.caballo5_actual_edad,
            peso_jockey: carrera.caballo5_actual_peso_jockey,
            jockey: carrera.caballo5_actual_jockey,
            peso_caballo: carrera.caballo5_actual_peso_caballo,
            spot: carrera.caballo5_actual_spot ,
          },
          anterior:[
            {
              distancia: carrera.caballo5_anterior1_distancia,
              tipo: carrera.caballo5_anterior1_tipo,
              numero: carrera.caballo5_anterior1_numero,
              posicion: carrera.caballo5_anterior1_posicion,
              cuerpos: carrera.caballo5_anterior1_cuerpos,
              tiempo: carrera.caballo5_anterior1_tiempo,
              spot: carrera.caballo5_anterior1_spot,
              peso_jockey: carrera.caballo5_anterior1_peso_jockey,
              jockey: carrera.caballo5_anterior1_jockey,
            },
            {
              distancia: carrera.caballo5_anterior2_distancia,
              tipo: carrera.caballo5_anterior2_tipo,
              numero: carrera.caballo5_anterior2_numero,
              posicion: carrera.caballo5_anterior2_posicion,
              cuerpos: carrera.caballo5_anterior2_cuerpos,
              tiempo: carrera.caballo5_anterior2_tiempo,
              spot: carrera.caballo5_anterior2_spot,
              peso_jockey: carrera.caballo5_anterior2_peso_jockey,
              jockey: carrera.caballo5_anterior2_jockey,
            },
            {
              distancia: carrera.caballo5_anterior3_distancia,
              tipo: carrera.caballo5_anterior3_tipo,
              numero: carrera.caballo5_anterior3_numero,
              posicion: carrera.caballo5_anterior3_posicion,
              cuerpos: carrera.caballo5_anterior3_cuerpos,
              tiempo: carrera.caballo5_anterior3_tiempo,
              spot: carrera.caballo5_anterior3_spot,
              peso_jockey: carrera.caballo5_anterior3_peso_jockey,
              jockey: carrera.caballo5_anterior3_jockey,
            }
          ]
        };
        this.cab6 = {
          actual:{
            numero: carrera.caballo6_actual_numero,
            sexo: carrera.caballo6_actual_sexo,
            edad: carrera.caballo6_actual_edad,
            peso_jockey: carrera.caballo6_actual_peso_jockey,
            jockey: carrera.caballo6_actual_jockey,
            peso_caballo: carrera.caballo6_actual_peso_caballo,
            spot: carrera.caballo6_actual_spot ,
          },
          anterior:[
            {
              distancia: carrera.caballo6_anterior1_distancia,
              tipo: carrera.caballo6_anterior1_tipo,
              numero: carrera.caballo6_anterior1_numero,
              posicion: carrera.caballo6_anterior1_posicion,
              cuerpos: carrera.caballo6_anterior1_cuerpos,
              tiempo: carrera.caballo6_anterior1_tiempo,
              spot: carrera.caballo6_anterior1_spot,
              peso_jockey: carrera.caballo6_anterior1_peso_jockey,
              jockey: carrera.caballo6_anterior1_jockey,
            },
            {
              distancia: carrera.caballo6_anterior2_distancia,
              tipo: carrera.caballo6_anterior2_tipo,
              numero: carrera.caballo6_anterior2_numero,
              posicion: carrera.caballo6_anterior2_posicion,
              cuerpos: carrera.caballo6_anterior2_cuerpos,
              tiempo: carrera.caballo6_anterior2_tiempo,
              spot: carrera.caballo6_anterior2_spot,
              peso_jockey: carrera.caballo6_anterior2_peso_jockey,
              jockey: carrera.caballo6_anterior2_jockey,
            },
            {
              distancia: carrera.caballo6_anterior3_distancia,
              tipo: carrera.caballo6_anterior3_tipo,
              numero: carrera.caballo6_anterior3_numero,
              posicion: carrera.caballo6_anterior3_posicion,
              cuerpos: carrera.caballo6_anterior3_cuerpos,
              tiempo: carrera.caballo6_anterior3_tiempo,
              spot: carrera.caballo6_anterior3_spot,
              peso_jockey: carrera.caballo6_anterior3_peso_jockey,
              jockey: carrera.caballo6_anterior3_jockey,
            }
          ]
        };
        this.cab7 = {
          actual:{
            numero: carrera.caballo7_actual_numero,
            sexo: carrera.caballo7_actual_sexo,
            edad: carrera.caballo7_actual_edad,
            peso_jockey: carrera.caballo7_actual_peso_jockey,
            jockey: carrera.caballo7_actual_jockey,
            peso_caballo: carrera.caballo7_actual_peso_caballo,
            spot: carrera.caballo7_actual_spot ,
          },
          anterior:[
            {
              distancia: carrera.caballo7_anterior1_distancia,
              tipo: carrera.caballo7_anterior1_tipo,
              numero: carrera.caballo7_anterior1_numero,
              posicion: carrera.caballo7_anterior1_posicion,
              cuerpos: carrera.caballo7_anterior1_cuerpos,
              tiempo: carrera.caballo7_anterior1_tiempo,
              spot: carrera.caballo7_anterior1_spot,
              peso_jockey: carrera.caballo7_anterior1_peso_jockey,
              jockey: carrera.caballo7_anterior1_jockey,
            },
            {
              distancia: carrera.caballo7_anterior2_distancia,
              tipo: carrera.caballo7_anterior2_tipo,
              numero: carrera.caballo7_anterior2_numero,
              posicion: carrera.caballo7_anterior2_posicion,
              cuerpos: carrera.caballo7_anterior2_cuerpos,
              tiempo: carrera.caballo7_anterior2_tiempo,
              spot: carrera.caballo7_anterior2_spot,
              peso_jockey: carrera.caballo7_anterior2_peso_jockey,
              jockey: carrera.caballo7_anterior2_jockey,
            },
            {
              distancia: carrera.caballo7_anterior3_distancia,
              tipo: carrera.caballo7_anterior3_tipo,
              numero: carrera.caballo7_anterior3_numero,
              posicion: carrera.caballo7_anterior3_posicion,
              cuerpos: carrera.caballo7_anterior3_cuerpos,
              tiempo: carrera.caballo7_anterior3_tiempo,
              spot: carrera.caballo7_anterior3_spot,
              peso_jockey: carrera.caballo7_anterior3_peso_jockey,
              jockey: carrera.caballo7_anterior3_jockey,
            }
          ]
        };
        this.cab8 = {
          actual:{
            numero: carrera.caballo8_actual_numero,
            sexo: carrera.caballo8_actual_sexo,
            edad: carrera.caballo8_actual_edad,
            peso_jockey: carrera.caballo8_actual_peso_jockey,
            jockey: carrera.caballo8_actual_jockey,
            peso_caballo: carrera.caballo8_actual_peso_caballo,
            spot: carrera.caballo8_actual_spot ,
          },
          anterior:[
            {
              distancia: carrera.caballo8_anterior1_distancia,
              tipo: carrera.caballo8_anterior1_tipo,
              numero: carrera.caballo8_anterior1_numero,
              posicion: carrera.caballo8_anterior1_posicion,
              cuerpos: carrera.caballo8_anterior1_cuerpos,
              tiempo: carrera.caballo8_anterior1_tiempo,
              spot: carrera.caballo8_anterior1_spot,
              peso_jockey: carrera.caballo8_anterior1_peso_jockey,
              jockey: carrera.caballo8_anterior1_jockey,
            },
            {
              distancia: carrera.caballo8_anterior2_distancia,
              tipo: carrera.caballo8_anterior2_tipo,
              numero: carrera.caballo8_anterior2_numero,
              posicion: carrera.caballo8_anterior2_posicion,
              cuerpos: carrera.caballo8_anterior2_cuerpos,
              tiempo: carrera.caballo8_anterior2_tiempo,
              spot: carrera.caballo8_anterior2_spot,
              peso_jockey: carrera.caballo8_anterior2_peso_jockey,
              jockey: carrera.caballo8_anterior2_jockey,
            },
            {
              distancia: carrera.caballo8_anterior3_distancia,
              tipo: carrera.caballo8_anterior3_tipo,
              numero: carrera.caballo8_anterior3_numero,
              posicion: carrera.caballo8_anterior3_posicion,
              cuerpos: carrera.caballo8_anterior3_cuerpos,
              tiempo: carrera.caballo8_anterior3_tiempo,
              spot: carrera.caballo8_anterior3_spot,
              peso_jockey: carrera.caballo8_anterior3_peso_jockey,
              jockey: carrera.caballo8_anterior3_jockey,
            }
          ]
        };
        this.cab9 = {
          actual:{
            numero: carrera.caballo9_actual_numero,
            sexo: carrera.caballo9_actual_sexo,
            edad: carrera.caballo9_actual_edad,
            peso_jockey: carrera.caballo9_actual_peso_jockey,
            jockey: carrera.caballo9_actual_jockey,
            peso_caballo: carrera.caballo9_actual_peso_caballo,
            spot: carrera.caballo9_actual_spot ,
          },
          anterior:[
            {
              distancia: carrera.caballo9_anterior1_distancia,
              tipo: carrera.caballo9_anterior1_tipo,
              numero: carrera.caballo9_anterior1_numero,
              posicion: carrera.caballo9_anterior1_posicion,
              cuerpos: carrera.caballo9_anterior1_cuerpos,
              tiempo: carrera.caballo9_anterior1_tiempo,
              spot: carrera.caballo9_anterior1_spot,
              peso_jockey: carrera.caballo9_anterior1_peso_jockey,
              jockey: carrera.caballo9_anterior1_jockey,
            },
            {
              distancia: carrera.caballo9_anterior2_distancia,
              tipo: carrera.caballo9_anterior2_tipo,
              numero: carrera.caballo9_anterior2_numero,
              posicion: carrera.caballo9_anterior2_posicion,
              cuerpos: carrera.caballo9_anterior2_cuerpos,
              tiempo: carrera.caballo9_anterior2_tiempo,
              spot: carrera.caballo9_anterior2_spot,
              peso_jockey: carrera.caballo9_anterior2_peso_jockey,
              jockey: carrera.caballo9_anterior2_jockey,
            },
            {
              distancia: carrera.caballo9_anterior3_distancia,
              tipo: carrera.caballo9_anterior3_tipo,
              numero: carrera.caballo9_anterior3_numero,
              posicion: carrera.caballo9_anterior3_posicion,
              cuerpos: carrera.caballo9_anterior3_cuerpos,
              tiempo: carrera.caballo9_anterior3_tiempo,
              spot: carrera.caballo9_anterior3_spot,
              peso_jockey: carrera.caballo9_anterior3_peso_jockey,
              jockey: carrera.caballo9_anterior3_jockey,
            }
          ]
        };
        this.cab10 = {
          actual:{
            numero: carrera.caballo10_actual_numero,
            sexo: carrera.caballo10_actual_sexo,
            edad: carrera.caballo10_actual_edad,
            peso_jockey: carrera.caballo10_actual_peso_jockey,
            jockey: carrera.caballo10_actual_jockey,
            peso_caballo: carrera.caballo10_actual_peso_caballo,
            spot: carrera.caballo10_actual_spot ,
          },
          anterior:[
            {
              distancia: carrera.caballo10_anterior1_distancia,
              tipo: carrera.caballo10_anterior1_tipo,
              numero: carrera.caballo10_anterior1_numero,
              posicion: carrera.caballo10_anterior1_posicion,
              cuerpos: carrera.caballo10_anterior1_cuerpos,
              tiempo: carrera.caballo10_anterior1_tiempo,
              spot: carrera.caballo10_anterior1_spot,
              peso_jockey: carrera.caballo10_anterior1_peso_jockey,
              jockey: carrera.caballo10_anterior1_jockey,
            },
            {
              distancia: carrera.caballo10_anterior2_distancia,
              tipo: carrera.caballo10_anterior2_tipo,
              numero: carrera.caballo10_anterior2_numero,
              posicion: carrera.caballo10_anterior2_posicion,
              cuerpos: carrera.caballo10_anterior2_cuerpos,
              tiempo: carrera.caballo10_anterior2_tiempo,
              spot: carrera.caballo10_anterior2_spot,
              peso_jockey: carrera.caballo10_anterior2_peso_jockey,
              jockey: carrera.caballo10_anterior2_jockey,
            },
            {
              distancia: carrera.caballo10_anterior3_distancia,
              tipo: carrera.caballo10_anterior3_tipo,
              numero: carrera.caballo10_anterior3_numero,
              posicion: carrera.caballo10_anterior3_posicion,
              cuerpos: carrera.caballo10_anterior3_cuerpos,
              tiempo: carrera.caballo10_anterior3_tiempo,
              spot: carrera.caballo10_anterior3_spot,
              peso_jockey: carrera.caballo10_anterior3_peso_jockey,
              jockey: carrera.caballo10_anterior3_jockey,
            }
          ]
        };
        this.cab11 = {
          actual:{
            numero: carrera.caballo11_actual_numero,
            sexo: carrera.caballo11_actual_sexo,
            edad: carrera.caballo11_actual_edad,
            peso_jockey: carrera.caballo11_actual_peso_jockey,
            jockey: carrera.caballo11_actual_jockey,
            peso_caballo: carrera.caballo11_actual_peso_caballo,
            spot: carrera.caballo11_actual_spot ,
          },
          anterior:[
            {
              distancia: carrera.caballo11_anterior1_distancia,
              tipo: carrera.caballo11_anterior1_tipo,
              numero: carrera.caballo11_anterior1_numero,
              posicion: carrera.caballo11_anterior1_posicion,
              cuerpos: carrera.caballo11_anterior1_cuerpos,
              tiempo: carrera.caballo11_anterior1_tiempo,
              spot: carrera.caballo11_anterior1_spot,
              peso_jockey: carrera.caballo11_anterior1_peso_jockey,
              jockey: carrera.caballo11_anterior1_jockey,
            },
            {
              distancia: carrera.caballo11_anterior2_distancia,
              tipo: carrera.caballo11_anterior2_tipo,
              numero: carrera.caballo11_anterior2_numero,
              posicion: carrera.caballo11_anterior2_posicion,
              cuerpos: carrera.caballo11_anterior2_cuerpos,
              tiempo: carrera.caballo11_anterior2_tiempo,
              spot: carrera.caballo11_anterior2_spot,
              peso_jockey: carrera.caballo11_anterior2_peso_jockey,
              jockey: carrera.caballo11_anterior2_jockey,
            },
            {
              distancia: carrera.caballo11_anterior3_distancia,
              tipo: carrera.caballo11_anterior3_tipo,
              numero: carrera.caballo11_anterior3_numero,
              posicion: carrera.caballo11_anterior3_posicion,
              cuerpos: carrera.caballo11_anterior3_cuerpos,
              tiempo: carrera.caballo11_anterior3_tiempo,
              spot: carrera.caballo11_anterior3_spot,
              peso_jockey: carrera.caballo11_anterior3_peso_jockey,
              jockey: carrera.caballo11_anterior3_jockey,
            }
          ]
        };
        this.cab12 = {
          actual:{
            numero: carrera.caballo12_actual_numero,
            sexo: carrera.caballo12_actual_sexo,
            edad: carrera.caballo12_actual_edad,
            peso_jockey: carrera.caballo12_actual_peso_jockey,
            jockey: carrera.caballo12_actual_jockey,
            peso_caballo: carrera.caballo12_actual_peso_caballo,
            spot: carrera.caballo12_actual_spot ,
          },
          anterior:[
            {
              distancia: carrera.caballo12_anterior1_distancia,
              tipo: carrera.caballo12_anterior1_tipo,
              numero: carrera.caballo12_anterior1_numero,
              posicion: carrera.caballo12_anterior1_posicion,
              cuerpos: carrera.caballo12_anterior1_cuerpos,
              tiempo: carrera.caballo12_anterior1_tiempo,
              spot: carrera.caballo12_anterior1_spot,
              peso_jockey: carrera.caballo12_anterior1_peso_jockey,
              jockey: carrera.caballo12_anterior1_jockey,
            },
            {
              distancia: carrera.caballo12_anterior2_distancia,
              tipo: carrera.caballo12_anterior2_tipo,
              numero: carrera.caballo12_anterior2_numero,
              posicion: carrera.caballo12_anterior2_posicion,
              cuerpos: carrera.caballo12_anterior2_cuerpos,
              tiempo: carrera.caballo12_anterior2_tiempo,
              spot: carrera.caballo12_anterior2_spot,
              peso_jockey: carrera.caballo12_anterior2_peso_jockey,
              jockey: carrera.caballo12_anterior2_jockey,
            },
            {
              distancia: carrera.caballo12_anterior3_distancia,
              tipo: carrera.caballo12_anterior3_tipo,
              numero: carrera.caballo12_anterior3_numero,
              posicion: carrera.caballo12_anterior3_posicion,
              cuerpos: carrera.caballo12_anterior3_cuerpos,
              tiempo: carrera.caballo12_anterior3_tiempo,
              spot: carrera.caballo12_anterior3_spot,
              peso_jockey: carrera.caballo12_anterior3_peso_jockey,
              jockey: carrera.caballo12_anterior3_jockey,
            }
          ]
        };
        this.cab13 = {
          actual:{
            numero: carrera.caballo13_actual_numero,
            sexo: carrera.caballo13_actual_sexo,
            edad: carrera.caballo13_actual_edad,
            peso_jockey: carrera.caballo13_actual_peso_jockey,
            jockey: carrera.caballo13_actual_jockey,
            peso_caballo: carrera.caballo13_actual_peso_caballo,
            spot: carrera.caballo13_actual_spot ,
          },
          anterior:[
            {
              distancia: carrera.caballo13_anterior1_distancia,
              tipo: carrera.caballo13_anterior1_tipo,
              numero: carrera.caballo13_anterior1_numero,
              posicion: carrera.caballo13_anterior1_posicion,
              cuerpos: carrera.caballo13_anterior1_cuerpos,
              tiempo: carrera.caballo13_anterior1_tiempo,
              spot: carrera.caballo13_anterior1_spot,
              peso_jockey: carrera.caballo13_anterior1_peso_jockey,
              jockey: carrera.caballo13_anterior1_jockey,
            },
            {
              distancia: carrera.caballo13_anterior2_distancia,
              tipo: carrera.caballo13_anterior2_tipo,
              numero: carrera.caballo13_anterior2_numero,
              posicion: carrera.caballo13_anterior2_posicion,
              cuerpos: carrera.caballo13_anterior2_cuerpos,
              tiempo: carrera.caballo13_anterior2_tiempo,
              spot: carrera.caballo13_anterior2_spot,
              peso_jockey: carrera.caballo13_anterior2_peso_jockey,
              jockey: carrera.caballo13_anterior2_jockey,
            },
            {
              distancia: carrera.caballo13_anterior3_distancia,
              tipo: carrera.caballo13_anterior3_tipo,
              numero: carrera.caballo13_anterior3_numero,
              posicion: carrera.caballo13_anterior3_posicion,
              cuerpos: carrera.caballo13_anterior3_cuerpos,
              tiempo: carrera.caballo13_anterior3_tiempo,
              spot: carrera.caballo13_anterior3_spot,
              peso_jockey: carrera.caballo13_anterior3_peso_jockey,
              jockey: carrera.caballo13_anterior3_jockey,
            }
          ]
        };
        this.cab14 = {
          actual:{
            numero: carrera.caballo14_actual_numero,
            sexo: carrera.caballo14_actual_sexo,
            edad: carrera.caballo14_actual_edad,
            peso_jockey: carrera.caballo14_actual_peso_jockey,
            jockey: carrera.caballo14_actual_jockey,
            peso_caballo: carrera.caballo14_actual_peso_caballo,
            spot: carrera.caballo14_actual_spot ,
          },
          anterior:[
            {
              distancia: carrera.caballo14_anterior1_distancia,
              tipo: carrera.caballo14_anterior1_tipo,
              numero: carrera.caballo14_anterior1_numero,
              posicion: carrera.caballo14_anterior1_posicion,
              cuerpos: carrera.caballo14_anterior1_cuerpos,
              tiempo: carrera.caballo14_anterior1_tiempo,
              spot: carrera.caballo14_anterior1_spot,
              peso_jockey: carrera.caballo14_anterior1_peso_jockey,
              jockey: carrera.caballo14_anterior1_jockey,
            },
            {
              distancia: carrera.caballo14_anterior2_distancia,
              tipo: carrera.caballo14_anterior2_tipo,
              numero: carrera.caballo14_anterior2_numero,
              posicion: carrera.caballo14_anterior2_posicion,
              cuerpos: carrera.caballo14_anterior2_cuerpos,
              tiempo: carrera.caballo14_anterior2_tiempo,
              spot: carrera.caballo14_anterior2_spot,
              peso_jockey: carrera.caballo14_anterior2_peso_jockey,
              jockey: carrera.caballo14_anterior2_jockey,
            },
            {
              distancia: carrera.caballo14_anterior3_distancia,
              tipo: carrera.caballo14_anterior3_tipo,
              numero: carrera.caballo14_anterior3_numero,
              posicion: carrera.caballo14_anterior3_posicion,
              cuerpos: carrera.caballo14_anterior3_cuerpos,
              tiempo: carrera.caballo14_anterior3_tiempo,
              spot: carrera.caballo14_anterior3_spot,
              peso_jockey: carrera.caballo14_anterior3_peso_jockey,
              jockey: carrera.caballo14_anterior3_jockey,
            }
          ]
        };
        this.cab15 = {
          actual:{
            numero: carrera.caballo15_actual_numero,
            sexo: carrera.caballo15_actual_sexo,
            edad: carrera.caballo15_actual_edad,
            peso_jockey: carrera.caballo15_actual_peso_jockey,
            jockey: carrera.caballo15_actual_jockey,
            peso_caballo: carrera.caballo15_actual_peso_caballo,
            spot: carrera.caballo15_actual_spot ,
          },
          anterior:[
            {
              distancia: carrera.caballo15_anterior1_distancia,
              tipo: carrera.caballo15_anterior1_tipo,
              numero: carrera.caballo15_anterior1_numero,
              posicion: carrera.caballo15_anterior1_posicion,
              cuerpos: carrera.caballo15_anterior1_cuerpos,
              tiempo: carrera.caballo15_anterior1_tiempo,
              spot: carrera.caballo15_anterior1_spot,
              peso_jockey: carrera.caballo15_anterior1_peso_jockey,
              jockey: carrera.caballo15_anterior1_jockey,
            },
            {
              distancia: carrera.caballo15_anterior2_distancia,
              tipo: carrera.caballo15_anterior2_tipo,
              numero: carrera.caballo15_anterior2_numero,
              posicion: carrera.caballo15_anterior2_posicion,
              cuerpos: carrera.caballo15_anterior2_cuerpos,
              tiempo: carrera.caballo15_anterior2_tiempo,
              spot: carrera.caballo15_anterior2_spot,
              peso_jockey: carrera.caballo15_anterior2_peso_jockey,
              jockey: carrera.caballo15_anterior2_jockey,
            },
            {
              distancia: carrera.caballo15_anterior3_distancia,
              tipo: carrera.caballo15_anterior3_tipo,
              numero: carrera.caballo15_anterior3_numero,
              posicion: carrera.caballo15_anterior3_posicion,
              cuerpos: carrera.caballo15_anterior3_cuerpos,
              tiempo: carrera.caballo15_anterior3_tiempo,
              spot: carrera.caballo15_anterior3_spot,
              peso_jockey: carrera.caballo15_anterior3_peso_jockey,
              jockey: carrera.caballo15_anterior3_jockey,
            }
          ]
        };
      });
  }

  actualizar(){
    const carrera:CarreraDatos = {
      id: this.id,
      ganador:  Number(this.ganador),
      distancia: Number(this.distancia),
      tipo: this.tipo,
      caballos:[
        this.cab1,
        this.cab2,
        this.cab3,
        this.cab4,
        this.cab5,
        this.cab6,
        this.cab7,
        this.cab8,
        this.cab9,
        this.cab10,
        this.cab11,
        this.cab12,
        this.cab13,
        this.cab14,
        this.cab15
      ],
    }
    const sub = this.http.post("http://localhost:3000/api/actualizar",carrera).subscribe(     
    (response) => {
      sub.unsubscribe();
      console.log('Data updated successfully:', response);
    });
    console.log(carrera);
  }
}

