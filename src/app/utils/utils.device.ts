export class UtilsDevice{

    public static isDevice(): boolean {
        var ua = navigator.userAgent;
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua))
           return true;
        return false;
    }
}