
 $(document).ready(function() {
            var text_max = 150;
            $('#char_left').html(text_max + ' characters remaining');

            $('#compose').keyup(function() {
                var text_length = $('#compose').val().length;
                var text_remaining = text_max - text_length;

                $('#char_left').html(text_remaining + ' characters remaining');
            });
            $('#char_left1').html(text_max + ' characters remaining');

            $('#compose1').keyup(function() {
                var text_length1 = $('#compose1').val().length;
                var text_remaining1 = text_max - text_length1;

                $('#char_left1').html(text_remaining1 + ' characters remaining');
            });
            tinymce.init({
             selector:'#email-box',
             elementpath: false,
             menubar: false,
             resize: false,
             statusbar: false,
             skin_url: 'css/TinySkins/light',
             skin: 'light',
            });
        });   
