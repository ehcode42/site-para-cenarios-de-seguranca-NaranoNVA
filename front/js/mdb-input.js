document.onreadystatechange = function () {
    if (document.readyState === 'interactive') {
       let elementos = document.getElementsByClassName("form-outline");
       elementos.forEach(element => {
          // element.insertAdjacentHTML('beforeend','<div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 94.4px;"></div><div class="form-notch-trailing"></div></div>'); 
       });

       let datepickers = document.getElementsByClassName("datepicker");
       datepickers.forEach(datepicker => {
            $(datepicker).datepicker({
                format: 'dd/mm/yyyy'
            });
        });
    }
    if (document.readyState === 'complete') {
        document.querySelectorAll('.form-outline').forEach((formOutline) => {
            new mdb.Input(formOutline).init();
          });
     }
  }




