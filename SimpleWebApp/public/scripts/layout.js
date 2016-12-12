$(document).ready(doOnLoad);



function doOnLoad() {

    window.user = { id: '' }

    $('#layout').w2layout({
        name: 'layout',
        panels: [
            { type: 'top', size: 50, resizable: false, hidden: false, content: '<button class="w2ui-btn" name="login" onclick="loadLogin()">Login</button>' },
            { type: 'left', size: 200, resizable: true, hidden: true, content: 'left' },
            { type: 'main', content: 'main' },
            { type: 'preview', size: '50%', resizable: true, hidden: true, content: 'preview' },
            { type: 'right', size: 200, resizable: true, hidden: true, content: 'right' },
            { type: 'bottom', size: 50, resizable: false, hidden: true, content: 'bottom' }
        ]
    });

    window.w2Layout = w2ui['layout'];

    
    
    


    if (!window.user.id) {
        loadLogin();
        
    }
}


function loadLogin() {
    w2Layout.load('main', 'part.login.html', '', initLogin);
}

function initLogin() {

    window.setTimeout(function () {
        var $frm = $('#form-login').w2form({
            name: 'form-login',
            //recid: window.user.id,
            url: '/public/mocks/login-success.json',
            fields: [
                { field: 'email', type: 'email', required: true },
                { field: 'pwd', type: 'password', required: true }
            ],

            actions: {
                signup: function (target, data) {
                    loadSignUp();
                },
                login: function (target, data) {
                    if (this.validate())
                        return;
                    this.request(function (data) {
                        console.log(data);
                    }
                  );
                }
            }

        });

        $('#form-login').fadeIn(1000);


    }, 100);

}


function loadSignUp() {
    w2Layout.load('main', 'part.signup.html', '', initSignUp);
}

function initSignUp() {

    window.setTimeout(function () {

        var $frm = $('#form-signup').w2form({
            name: 'form-signup',
            //recid: window.user.id,
            url: '/public/mocks/login-success.json',
            fields: [
                { field: 'email', type: 'email', required: true },
                { field: 'pwd', type: 'password', required: true },
                { field: 'fname', type: 'text', required: true },
                { field: 'lname', type: 'text', required: true }
             ],

            actions: {
                save: function (target, data) {
                    if (this.validate())
                        return;
                    this.request(function (data) {
                        console.log(data);
                    });
                }
            }

        });

        initImageUpload();

        $('#form-signup').fadeIn(1000);

    }, 100);
}