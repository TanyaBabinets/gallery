import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgFor, NgIf } from "@angular/common";
import { DataService } from './data.service';
import { LogService } from './log.service';
import { Image } from './image';


@Component({
    selector: 'my-app',
    standalone: true,
    imports: [FormsModule, NgFor, NgIf],
    providers: [DataService, LogService],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
    section: string | null = null; //стартовая страница по умолчанию просит выбор 
    images: Image[] = [];
    selected: Image | null = null;//если изображение еще не выбрано, чтоб не было ошибки
    showdetails: boolean = false;

    constructor(private dataService: DataService) { }
   
    
    ngOnInit() {
        this.images = this.dataService.getData();
    }
    
    isSelected: boolean = false;
    onImageClick(image: Image) {
        this.selected = image;
        this.showdetails = false;
        this.isSelected = true; 
    }
    showSection(sec: string): void{
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
