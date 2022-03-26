function check(){
     var ht= H.HVT.value;
     var ngay= H.Ngay.value;
     var thang =H.Thang.value;
     var nam = H.Nam.value;
     var nn = H.Nghenghiep.value;
     var gc = H.Ghichu.value;
     if(ht =='')
     {
         alert('không bỏ trống !!!')
         return false;
     }
     if(ngay =='')
     {
         alert('không bỏ trống !!!')
         return false;
     }
     if(thang =='')
     {
         alert('không bỏ trống !!!')
         return false;
     }
     if(nn =='')
     {
         alert('không bỏ trống !!!')
         return false;
     }
     if(gc =='')
     {
         alert('không bỏ trống !!!')
         return false;
     }
     return true;
}