$(document).ready(function(){

var date = new Date();

    var tarix = $('.tarix')
    var zaman = $('.zaman')
    var saniye  =date.getSeconds()
    $('.hefteningunu').append(hefteninGunu())
    tarix.append(`${date.getDate()} - ${ayinTarixi()} - ${date.getFullYear()}`)
           function ayinTarixi() {
            var d = new Date();
            var month = new Array();
            month[0] = "Yanvar";
            month[1] = "Fevral";
            month[2] = "Mart";
            month[3] = "Aprel";
            month[4] = "May";
            month[5] = "Iyun";
            month[6] = "Iyul";
            month[7] = "Avqust";
            month[8] = "Sentyabr";
            month[9] = "Oktyabr";
            month[10] = "Noyabr";
            month[11] = "Dekabr";
            return month[d.getMonth()];
        }
                   function hefteninGunu() {
            let d = new Date();
            let day = new Array();
            day[0] = "Bazar";
            day[1] = "Bazar ertəsi";
            day[2] = "Çərşənbə axşamı";
            day[3] = "Çərşənbə";
            day[4] = "Cümə axşamı";
            day[5] = "Cümə";
            day[6] = "Şənbə";
            day[7] = "Avqust";
            return day[d.getDay()];
        }
        function saniyeniGoster() {
            let saniyem = new Date()
            if (saniyem.getSeconds() < 10){
                return '0' + saniyem.getSeconds()
            }
            return saniyem.getSeconds()
        }
        function deqiqeniGoster() {
            let deqiqem = new Date()
            if (deqiqem.getMinutes() < 10){
                return '0' + deqiqem.getMinutes()
            }
            return deqiqem.getMinutes()
        }
        function saatiGoster(){
            let saatim = new Date()
            if (saatim.getHours() < 10){
                return '0' + saatim.getHours()
            }
            return saatim.getHours()
        }
         zaman.append(`${saatiGoster()} ${deqiqeniGoster()} ${saniyeniGoster()}`)
        setInterval(() => {
            zaman.empty()
            if(saniyeniGoster() % 2 == 0){
                zaman.append(`${saatiGoster()}:${deqiqeniGoster()}:${saniyeniGoster()}`)
            }
            else{
                zaman.append(`${saatiGoster()} ${deqiqeniGoster()} ${saniyeniGoster()}`)

            }
        }, 1000);
          
          

    // setInterval(() => {
    // $('#vaxt').empty()

    // $('#vaxt').append(Date())
    // }, 1000);
    // var saat = $('#saat')
    // var deqiqe = $('#deqiqe')
    // var saniye = $('#saniye')
    // var time_sec = 0
    // var time_minute = 0
    // var time_hour = 0
    // setInterval(() => {
    //     time_sec +=1
    //     if (time_sec >=60){
    //         saniye.empty()
    //         saniye.append(time_sec)   
    //         time_minute += 1
    //         if(time_minute < 10){
    //         deqiqe.empty()
    //         deqiqe.append('0' + time_minute)
    //         }
    //         else{
    //         deqiqe.empty()
    //         deqiqe.append(time_minute)
    //         }     
    //         time_sec = 0
    //     }
    //     if (time_minute >59){
    //         if(time_hour < 10){
    //         time_minute = 0
    //         time_hour += 1
    //         saat.empty()
    //         saniye.empty()
    //         saat.append('0' + time_hour)
    //         time_sec = 0
    //         }
 
    //     }
    //     saniye.empty()
    //     saniye.append(time_sec)
    // }, 10);
})