import {Component, AfterViewInit, Input, OnInit, HostListener} from '@angular/core';
import './header.component.css';
import {Router} from '@angular/router';
import {DataKey, DataStoreService, SessionStorageKeys} from '../../services/data-store.service';
import {DataHandlerService} from '../../services/data-handler.service';
import {Constants} from '../../utils/Constants';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {DataLoaderService} from '../../services/data-loader.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, AfterViewInit {

    constructor(
        public dataHandlerService: DataHandlerService,
        public router: Router,
        public dataStore: DataStoreService,
        public dataLoaderService: DataLoaderService,
        public https: HttpClient
    ) {
    }

    profileImageURL = Constants.API_BASE_URL + Constants.DOWNLOAD_USER_PROFILE_PIC;

    signUpResultObject = {
        isSignUp: undefined,
        userType: undefined
    };
    openedDropDown = false;
    loggedInUser = null;
    user = null;
    firstName: string;
    isSignUp = true;
    userType;

    // Close the dropdown if the user clicks outside of it
    @HostListener('document:click', ['$event'])

    ngOnInit() {
        if (sessionStorage.getItem(SessionStorageKeys.loggedInUser)) {
            this.loggedInUser = JSON.parse(sessionStorage.getItem(SessionStorageKeys.loggedInUser));
        }
        this.firstName = null;
        if (this.loggedInUser) {
            this.firstName = this.setFirstName(this.loggedInUser);
        }
        if (this.dataStore.get(DataKey.signUpResultObject).getValue()) {
            this.signUpResultObject = this.dataStore.get(DataKey.signUpResultObject).getValue();
            this.userType = this.signUpResultObject.userType;
            this.isSignUp = this.signUpResultObject.isSignUp;
        }
        this.setProfileImageSource();
    }

    ngAfterViewInit() {
        setTimeout(() => {
            window.scroll(0, 0);
        }, 1000);
    }

    /**
     * Set profile image source. If there is no image, set default avatar
     */
    setProfileImageSource() {
        if (this.loggedInUser) {
            this.profileImageURL += this.loggedInUser.userId;
            // get image and verify that it is in the storage
            const req = new HttpRequest('GET', this.profileImageURL, {
                reportProgress: true
            });
            this.https.request(req).subscribe(
                data => {
                },
                error => {
                    if (error.status !== 200) {
                        this.profileImageURL = './assets/img/profile_blue1.png';
                    }
                }
            );
        } else {
            this.profileImageURL = './assets/img/profile_blue1.png';
        }
    }

    profilePicClick(): void {
        this.openedDropDown = false;

        if (this.dataStore.get(DataKey.signUpResultObject).getValue()) {
            this.signUpResultObject = this.dataStore.get(DataKey.signUpResultObject).getValue();
            this.userType = this.signUpResultObject.userType;
            this.isSignUp = this.signUpResultObject.isSignUp;
        }
        if (this.loggedInUser && this.loggedInUser.doctor !== null && this.loggedInUser.doctor) {
            this.router.navigate(['doctor/dashboard']).then(r => {
            });
        } else if (this.loggedInUser && this.loggedInUser.doctor !== null && !this.loggedInUser.doctor) {
            this.router.navigate(['user/dashboard']).then(r => {
            });
        } else {
            this.router.navigate(['signup']).then(r => {
            });
        }
    }

    goToHomePage() {
        this.openedDropDown = false;

        this.router.navigate(['/']).then(r => {
        });
    }

    private setFirstName(loggedInUser: any): string {
        let fName = null;
        if (loggedInUser && loggedInUser.doctor) {
            // todo: uncomment
            // fName = loggedInUser.doctorData.firstName;
            fName = loggedInUser.firstName;
        } else if (loggedInUser && !loggedInUser.doctor) {
            // todo: uncomment
            // fName = loggedInUser.patientData.firstName;
            fName = loggedInUser.firstName;
        }
        return fName;
    }

    // When the user clicks on the button,
    // toggle between hiding and showing the dropdown content
    openDropDown() {
        this.openedDropDown = !this.openedDropDown;
    }
}
