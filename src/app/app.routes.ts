import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { ProductDetail } from './pages/product-detail/product-detail';

export const routes: Routes = [  
    { path: 'home', component: Home },
    {path : 'about', component: About},
    {path : 'contact', component: Contact},
    {path: 'products', component: Products},
    {path:'product/:id', component:ProductDetail}
     ];

