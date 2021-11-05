import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  openMobileHeader = false;
	colapsedVal = false;
  ngOnInit(): void {
   
  }
  mobileToggleBtnClick() {
    this.openMobileHeader = !this.openMobileHeader;
    setTimeout(() => {
      this.colapsedVal = true;
    }, 200);
  }
  logoClick() {
			this.router.navigate(["/home"]);
	}
}
