import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { IBanner, ICard, IDetailSite, ISubBanner } from './../../models/information/m.information';
import { ParentDataService } from '../parent-data/parent-data';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private parent: ParentDataService ) {
  }

  public getBannerInformation(): Observable<IBanner>{
    // return of({
    //   imgBanner: './assets/imgs/img-banner.svg',
    //   textBanner: 'Descubre la magia del Tolima<br> ¡te esperamos!',
    //   version: '1.0'
    // });
    return this.parent.getAll<IBanner>(ParentDataService.TABLE_BANNER).pipe(
      map( data => {
        return data[0];
      })
    );
  }

  public getSubBannerInformation(): Observable<ISubBanner>{
    // return of({
    //   title: 'Encuentra la riqueza turística del Tolima en un solo lugar.',
    //   content: `Descripción de la oferta de valor e información que los usuarios podrán encontrar en la página. Lorem ipsum dolor sit amet consectetur. Proin sagittis aliquam gravida faucibus eget dui leo. Diam arcu consequat vel nisi. Vel dui leo sed morbi amet placerat vitae. Et massa nunc tellus ultricies feugiat. Molestie malesuada est vitae mauris morbi gravida morbi. Ac faucibus auctor mi elit ipsum massa. Egestas senectus sagittis amet nullam dolor est quis sapien.`,
    //   version: '1.0'
    // });
    return this.parent.getAll<ISubBanner>(ParentDataService.TABLE_SUBBANNER).pipe(
      map( data => {
        return data[0];
      })
    );
  }

  public getCardsInformation(): Observable<ICard[]>{
    // return of([
    //   { 
    //     id:'1', 
    //     description:'Lorem ipsum dolor sit amet consectetur. Nunc cum diam venenatis sed rhoncus pharetra odio odio dictumst. Dictum aliquet platea sed in ornare odio. Quisque convallis eget sed morbi. Morbi velit ut mauris id varius consectetur elementum.',
    //     image:'/assets/imgs/card_example.svg', 
    //     title:'Villamaría',
    //     route: '/detail'
    //   },
    //   { 
    //     id:'1', 
    //     description:'Lorem ipsum dolor sit amet consectetur. Nunc cum diam venenatis sed rhoncus pharetra odio odio dictumst. Dictum aliquet platea sed in ornare odio. Quisque convallis eget sed morbi. Morbi velit ut mauris id varius consectetur elementum.',
    //     image:'/assets/imgs/card_example.svg', 
    //     title:'Villamaría',
    //     route: '/detail'
    //   },
    //   { 
    //     id:'1', 
    //     description:'Lorem ipsum dolor sit amet consectetur. Nunc cum diam venenatis sed rhoncus pharetra odio odio dictumst. Dictum aliquet platea sed in ornare odio. Quisque convallis eget sed morbi. Morbi velit ut mauris id varius consectetur elementum.',
    //     image:'/assets/imgs/card_example.svg', 
    //     title:'Villamaría',
    //     route: '/detail'
    //   }, { 
    //     id:'1', 
    //     description:'Lorem ipsum dolor sit amet consectetur. Nunc cum diam venenatis sed rhoncus pharetra odio odio dictumst. Dictum aliquet platea sed in ornare odio. Quisque convallis eget sed morbi. Morbi velit ut mauris id varius consectetur elementum.',
    //     image:'/assets/imgs/card_example.svg', 
    //     title:'Villamaría',
    //     route: '/detail'
    //   },
    // ]);
    return this.parent.getAll<ICard>(ParentDataService.TABLE_CARDS).pipe(
      map( data => {
        console.log('Cards Information ' , data);
        return data;
      })
    );
  }

  public getIdDetail(id: number): Observable<any[]>{
    // return of([
    //   {
    //     title : 'Nombre del lugar',
    //     description: `Descubre la riqueza cultural de nuestro destino y sumérgete en una experiencia única.`,
    //     images: [
    //       '/assets/demo/img-1.svg',
    //       '/assets/demo/img-2.svg',
    //       '/assets/demo/img-3.svg',
    //       '/assets/demo/img-4.svg',
    //       '/assets/demo/img-5.svg'
    //     ],
    //   },
    //   {
    //     title : 'Información general del lugar y atractivos turísticos',
    //     description: `Lorem ipsum dolor sit amet consectetur. Proin sagittis aliquam gravida faucibus eget dui leo. Diam arcu consequat vel nisi. Vel dui leo sed morbi amet placerat vitae. Et massa nunc tellus ultricies feugiat. Molestie malesuada est vitae mauris morbi gravida morbi. Ac faucibus auctor mi elit ipsum massa. Egestas senectus sagittis amet nullam dolor est quis sapien.
    //     <br><br>
    //     <ul>
    //     <li>Et massa nunc tellus ultricies feugiat</li>
    //     <li>Ac faucibus auctor mi elit ipsum massa.</li>
    //     <li>Proin sagittis aliquam gravida faucibus eget dui leo.</li>
    //     <li>Proin sagittis aliquam gravida faucibus eget dui leo.</li>
    //     <ul>`,
    //   },
    //   {
    //     title : 'Gastronomía',
    //     description: `Descripción general
    //     Lorem ipsum dolor sit amet consectetur. Proin sagittis aliquam gravida faucibus eget dui leo. Diam arcu consequat vel nisi. Vel dui leo sed morbi amet placerat vitae. Et massa nunc tellus ultricies feugiat. Molestie malesuada est vitae mauris morbi gravida morbi. Ac faucibus auctor mi elit ipsum massa. Egestas senectus sagittis amet nullam dolor est quis sapien.`,
    //     details : [
    //       { 
    //         id:'1', 
    //         description:`Lorem ipsum dolor sit amet consectetur. Nunc cum diam venenatis sed rhoncus pharetra odio odio dictumst. Dictum aliquet platea sed in ornare odio. Quisque convallis eget sed morbi. Morbi velit ut mauris id varius consectetur elementum.

    //         Dictum aliquet platea sed in ornare odio.
    //        Telefono: 123 456 7890
    //        Web: www.ejemplo.com.co`,
    //         image:'/assets/imgs/card_example.svg', 
    //         title:'Restaurante ejemplo',
    //         route: 'https://www.facebook.com'
    //       },
    //       { 
    //         id:'1', 
    //         description:`Lorem ipsum dolor sit amet consectetur. Nunc cum diam venenatis sed rhoncus pharetra odio odio dictumst. Dictum aliquet platea sed in ornare odio. Quisque convallis eget sed morbi. Morbi velit ut mauris id varius consectetur elementum.

    //         Dictum aliquet platea sed in ornare odio.
    //        Telefono: 123 456 7890
    //        Web: www.ejemplo.com.co`,
    //         image:'/assets/imgs/card_example.svg', 
    //         title:'Restaurante ejemplo',
    //         route: 'https://www.facebook.com'
    //       },
    //     ]
    //   },
    //   {
    //     title : 'Artesanía',
    //     details : [
    //       { 
    //         id:'1', 
    //         description:`Lorem ipsum dolor sit amet consectetur. Nunc cum diam venenatis sed rhoncus pharetra odio odio dictumst. Dictum aliquet platea sed in ornare odio. Quisque convallis eget sed morbi. Morbi velit ut mauris id varius consectetur elementum.

    //         Dictum aliquet platea sed in ornare odio.
    //        Telefono: 123 456 7890
    //        Web: www.ejemplo.com.co`,
    //         image:'/assets/imgs/card_example.svg', 
    //         title:'Restaurante ejemplo',
    //         route: 'https://www.facebook.com'
    //       },
    //       { 
    //         id:'1', 
    //         description:`Lorem ipsum dolor sit amet consectetur. Nunc cum diam venenatis sed rhoncus pharetra odio odio dictumst. Dictum aliquet platea sed in ornare odio. Quisque convallis eget sed morbi. Morbi velit ut mauris id varius consectetur elementum.

    //         Dictum aliquet platea sed in ornare odio.
    //        Telefono: 123 456 7890
    //        Web: www.ejemplo.com.co`,
    //         image:'/assets/imgs/card_example.svg', 
    //         title:'Restaurante ejemplo',
    //         route: 'https://www.facebook.com'
    //       },
    //     ]
    //   },
    //   {
    //     title : 'Agencias y guías turisticos',
    //     details : [
    //       { 
    //         id:'1', 
    //         description:`Lorem ipsum dolor sit amet consectetur. Nunc cum diam venenatis sed rhoncus pharetra odio odio dictumst. Dictum aliquet platea sed in ornare odio. Quisque convallis eget sed morbi. Morbi velit ut mauris id varius consectetur elementum.

    //         Dictum aliquet platea sed in ornare odio.
    //        Telefono: 123 456 7890
    //        Web: www.ejemplo.com.co`,
    //         image:'/assets/imgs/card_example.svg', 
    //         title:'Restaurante ejemplo',
    //         route: 'https://www.facebook.com'
    //       },
    //       { 
    //         id:'1', 
    //         description:`Lorem ipsum dolor sit amet consectetur. Nunc cum diam venenatis sed rhoncus pharetra odio odio dictumst. Dictum aliquet platea sed in ornare odio. Quisque convallis eget sed morbi. Morbi velit ut mauris id varius consectetur elementum.

    //         Dictum aliquet platea sed in ornare odio.
    //        Telefono: 123 456 7890
    //        Web: www.ejemplo.com.co`,
    //         image:'/assets/imgs/card_example.svg', 
    //         title:'Restaurante ejemplo',
    //         route: 'https://www.facebook.com'
    //       },
    //       { 
    //         id:'1', 
    //         description:`Lorem ipsum dolor sit amet consectetur. Nunc cum diam venenatis sed rhoncus pharetra odio odio dictumst. Dictum aliquet platea sed in ornare odio. Quisque convallis eget sed morbi. Morbi velit ut mauris id varius consectetur elementum.

    //         Dictum aliquet platea sed in ornare odio.
    //        Telefono: 123 456 7890
    //        Web: www.ejemplo.com.co`,
    //         image:'/assets/imgs/card_example.svg', 
    //         title:'Restaurante ejemplo',
    //         route: 'https://www.facebook.com'
    //       },
    //       { 
    //         id:'1', 
    //         description:`Lorem ipsum dolor sit amet consectetur. Nunc cum diam venenatis sed rhoncus pharetra odio odio dictumst. Dictum aliquet platea sed in ornare odio. Quisque convallis eget sed morbi. Morbi velit ut mauris id varius consectetur elementum.

    //         Dictum aliquet platea sed in ornare odio.
    //        Telefono: 123 456 7890
    //        Web: www.ejemplo.com.co`,
    //         image:'/assets/imgs/card_example.svg', 
    //         title:'Restaurante ejemplo',
    //         route: 'https://www.facebook.com'
    //       },
    //     ]
    //   },
    // ]);
    console.log('Id de busqueda ', id);
    return this.parent.getById<IDetailSite>('card' ,id ,ParentDataService.TABLE_DETAIL).pipe(
      map( data => {
        console.log('Cards Information ' , data);
        return data.reverse();
      })
    );
  }
}
