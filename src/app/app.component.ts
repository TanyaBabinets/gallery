import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgFor, NgIf } from "@angular/common";
import { HttpService } from './http.service';
import { Image } from './image';
import { HttpClientModule } from '@angular/common/http';


@Component({
    selector: 'my-app',
    standalone: true,
    imports: [FormsModule, HttpClientModule, NgFor, NgIf],
    providers: [HttpService],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
    section: string | null = null; //стартовая страница по умолчанию просит выбор 
    images: Image[] = [];
    selected: Image | null = null;//если изображение еще не выбрано, чтоб не было ошибки
    showdetails: boolean = false;
    error: any;
    constructor(private httpService: HttpService) { }
    ngOnInit() {
        this.httpService.getData().subscribe(
            {
               
                next: (data: Image[]) => {
                    this.images = data["imgList"];
                    console.log('Data received:', this.images);
                },
                error: (err) => {
                    console.error('Error occurred:', err);
                }

            });
    }

    isSelected: boolean = false;
    onImageClick(image: Image) {
        this.selected = image;
        this.showdetails = false;
        this.isSelected = true;
    }
    showSection(sec: string): void {
        this.section = sec;//выбор секции - галерея
    }
    toggleDet() {
        this.showdetails = !this.showdetails;
    }
    close() {
        this.selected = null;//close image
        this.isSelected = false;
    }
}
