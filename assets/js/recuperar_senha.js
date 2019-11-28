$(function () {
    'use strict';
    var loginSenha = $('#loginSenha');
    var labelSenha = $('#labelSenha');
    

    $(document).on('click', 'input[id=#recuperarSenha]', function () {
        var id = $(this).prop('id');
        esconderSenha(id);
    
    });
    function esconderSenha() {
        labelSenha.hide();
        loginSenha.hide();
    }
    




});