var $ = $.noConflict();
$(document).ready(function () {
    "use strict";

$("#contact-form").validate({
        messages: {
        
            name: {
                required: 'Please enter your name' //You can customise this message
            },
            email: {
                required: 'Please enter your email' //You can customise this message
            },  
            phone: {
                required: 'Please enter your phone number' //You can customise this message
            },  
            zipcode: {
                required: 'Please enter your zip code' //You can customise this message
            },  
            message: {
                required: 'Please provide your project info' //You can customise this message
            }
            
        }
        
    });
 });