function check(){
    var ht      = F.HT.value;
    var dc      = F.DC.value;
    var em      = F.Email.value;
    var dt      = F.DT.value;

    var emRegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
	var dtRegExp = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/

    if( ht == '')
    {
        alert(" nhập lại không bỏ trống....!!!");
        return false;
    }

    if( dc == '')
    {
        alert(" nhập lại không bỏ trống  ....!!!");
        return false;
    }

    if( !emRegExp.test(em))
    {
        alert(" nhập lại email không hợp lệ  ....!!!");
        return false;
    }

    if( !dtRegExp.test(dt))
    {
        alert(" hợp lệ !!!");
        return false;
    }

    return true;
}