import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AboutComponent } from './pages/about/about';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [  
    { path: 'home', component: Home },
    {path : 'about', component: AboutComponent},
    {path : 'contact', component: Contact}
     ];

