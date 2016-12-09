﻿$(document).ready(doOnLoad);



function doOnLoad() {

    window.user = { id: ''}

    $('#layout').w2layout({
        name: 'layout',
        panels: [
            { type: 'top', size: 50, resizable: false, hidden: true, content: 'top' },
            { type: 'left', size: 200, resizable: true, hidden: true, content: 'left' },
            { type: 'main', content: 'main' },
            { type: 'preview', size: '50%', resizable: true, hidden: true, content: 'preview' },
            { type: 'right', size: 200, resizable: true, hidden: true, content: 'right' },
            { type: 'bottom', size: 50, resizable: false, hidden: true, content: 'bottom' }
        ]
    });

    //w2ui['layout'].toggle('top', window.instant);
    //w2ui['layout'].toggle('bottom', window.instant);

    if (!window.user.id) {
        showLogin();
    }
}

function showLogin() {
    
    var w2Layout = w2ui['layout'];

    w2Layout.hide('top');
    w2Layout.hide('bottom');
    w2Layout.hide('left');
    w2Layout.hide('right');
    w2Layout.hide('preview');
    w2Layout.show('main');

    w2Layout.load('main', 'part.login.html', '', function () {

        var $frmLogin = $('#form-login').w2form({
            name: 'form-login',
            //recid: window.user.id,
            url: '/public/mocks/login-success.json',
            fields: [
                { field: 'email', type: 'email', required: true },
                { field: 'pwd', type: 'password', required: true }
            ],

            actions: {
                reset: function (target,data) {
                    this.clear();
                },
                save: function (target, data) {
                    this.request(function (data) {
                        console.log(data);
                    });
                }
            }

        });

        $('#form-login').fadeIn(1000);
    });

    


    

}