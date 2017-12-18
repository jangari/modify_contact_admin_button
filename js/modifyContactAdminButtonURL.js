$('document').ready(function() {
        var searchResults = document.querySelectorAll('#help_panel div div div div div a.btn-contact-admin.btn-primary.btn-xs');

        if(searchResults.length === 1) {
            var button = searchResults[0];
            var username = document.getElementById('username-reference').textContent
            
            var length = contactAdminButtonValuePairs.length;
            button.href = contactAdminButtonURL;

            for(var i in contactAdminButtonValuePairs){
                 button.href += '&' + contactAdminButtonValuePairs[i].name;
                 button.href += '=' + contactAdminButtonValuePairs[i].value;
            }
        }
});
