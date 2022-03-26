function check(){
    var tdn = T.TDN.value;
    var mk = T.MK.value;

    if( tdn == '')
    {
        alert(" nhập lại không bỏ trống....!!!");
        return false;
    }
    if( mk == '')
    {
        alert(" nhập lại ....!!!");
        return false;
    }
    return true;
}