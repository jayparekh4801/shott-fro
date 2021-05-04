import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, OnInit } from '@angular/core';
import { IndexService } from 'src/app/Services/indexServices/index.service';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

	constructor(private indexService: IndexService) { }
	bannerData : any ;
	latestMovies : any;
	ngOnInit(): void {
		this.indexService.getBanners().subscribe((data : any) => {
			this.bannerData = data;
		});

		this.indexService.getLatestMovies().subscribe((data : any) => {
			this.latestMovies = data;
			console.log(this.latestMovies);
		})
	}

}
