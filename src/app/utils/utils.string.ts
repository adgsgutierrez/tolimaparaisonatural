import { defaultIBanner, defaultICard, defaultIDetailSite, defaultISubBanner } from "../models/information/m.information";

export class UtilsString{

    private static defaults: any = {
        banner: defaultIBanner,
        subBanner: defaultISubBanner,
        cardsInformation: defaultICard,
        idDetail: defaultIDetailSite
    }
    /**
     * @description valida si la version nueva es mayor a la version actual
     * @param actual version actual con la que cuenta el storage
     * @param nuevo version nueva obtenida desde el cloud
     * @returns boolean con TRUE si es mayor la version nueva
     */
    public static newVersion(actual: string , nuevo: string): boolean{
        // Separacion de versiones
        const newVersion = nuevo.split('.');
        const actualVersion = actual.split('.');
        // Diferentes tamaños en las versiones
        if( newVersion.length !== actualVersion.length ){ return false; }
        // Version 2.0 nueva - 1.0 actual
        if( parseInt(newVersion[0]) > parseInt(actualVersion[0]) ){ return true; }
        // Version 1.0 nueva - 1.0 actual
        if( parseInt(newVersion[0]) === parseInt(actualVersion[0]) ){
            // Version 1.1 nueva - 1.0 actual
            return parseInt(newVersion[1]) > parseInt(actualVersion[1]);
        }
        return false;
    }

    public static getDefaults<T>( partial: Partial<T> , defaultObject: string): any {
        return { ...UtilsString.defaults[defaultObject] , ...partial};
    }

}