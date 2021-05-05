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
	bannerData: any;
	latestMovies: any;
	trendingMovies: any;
	ngOnInit(): void {
		this.indexService.getBanners().subscribe((data: any) => {
			this.bannerData = data;
		});

		this.indexService.getLatestMovies().subscribe((data: any) => {
			this.latestMovies = data;
			console.log(this.latestMovies);
		});

		this.indexService.getTrendingMovies().subscribe((data: any) => {
			this.trendingMovies = data;
			console.log(this.trendingMovies);
		})
	}

	openSidePanel() {
		var panelTriggers = document.getElementsByClassName('js-cd-panel-trigger');
		if (panelTriggers.length > 0) {
			for (var i = 0; i < panelTriggers.length; i++) {
				(function (i) {
					var panelClass = 'js-cd-panel-' + panelTriggers[i].getAttribute('data-panel'),
						panel = document.getElementsByClassName(panelClass)[0];
					// open panel when clicking on trigger btn
					panelTriggers[i].addEventListener('click', function (event) {
						event.preventDefault();
						addClass(panel, 'cd-panel--is-visible');
					});
					//close panel when clicking on 'x' or outside the panel
					panel.addEventListener('click', function (event) {
						if (hasClass(event.target, 'js-cd-close') || hasClass(event.target, panelClass)) {
							event.preventDefault();
							removeClass(panel, 'cd-panel--is-visible');
						}
					});
				})(i);
			}
		}

		function hasClass(el, className) {
			if (el.classList) return el.classList.contains(className);
			else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
		}
		function addClass(el, className) {
			if (el.classList) el.classList.add(className);
			else if (!hasClass(el, className)) el.className += " " + className;
		}
		function removeClass(el, className) {
			if (el.classList) el.classList.remove(className);
			else if (hasClass(el, className)) {
				var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
				el.className = el.className.replace(reg, ' ');
			}
		}
	}

}
