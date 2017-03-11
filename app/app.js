$(document).ready(function() { 
    
    
    $('.image').each(function() {
        var gaugeHeight = 0;
        $(this).on('click', function() {
            var $this = $(this);
        var $meter = $this.prev().find('.meter');

        gaugeHeight = gaugeHeight + 10;

        $meter.css('height', gaugeHeight + '%');
    });
        })
        
});
