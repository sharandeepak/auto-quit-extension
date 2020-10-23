$(function(){
    var d = new Date();
    var da=d.getDate();
    var m=d.getMonth()+1;
    var y=d.getFullYear();
    var finaldate=da+'/'+m+'/'+y;
    var date2;
    var systime = d.getHours() + ":" + d.getMinutes();
    chrome.storage.sync.get(['time','date'], function(details){
        $('#name_id').text(details.time);
        $('#date_text_id').text(details.date);
        date2=details.date;
    })

    if(date2==finaldate)
    {
      chrome.storage.sync.get(['time','date'], function(details){
        chrome.alarms.create("1min", {
          delayInMinutes: 1,
          periodInMinutes: 1
        });
        
        chrome.alarms.onAlarm.addListener(function(alarm) {
          if (alarm.name === "1min") {
            if(details.time===systime)
            {
                
            }
            
          }
        });
          
        });
        
    }


    $("#button_id").click(function(){
        var inputValue = $("#time_id").val();
        if(inputValue)
        {
            chrome.storage.sync.set({'time':inputValue});
            chrome.storage.sync.set({'date':finaldate});
            $('#name_id').text(inputValue);
            $('#date_text_id').text(finaldate);
            // $('#time_id').val('');
        }
    });
    $("#delete_button_id").click(function(){
        chrome.storage.sync.set({'time':"Not Set"});
        $('#name_id').text("Not Set");
        chrome.storage.sync.set({'date':"Not Set"});
        $('#date_text_id').text("Not Set");
    });
    
});
