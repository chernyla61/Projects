﻿$(document).ready(doOnLoad);


function doOnLoad() {
    initImageUpload();
}

function initImageUpload() {
    var myDropzone = new Dropzone(document.getElementById('image-upload'), {
        uploadMultiple: false
        ,acceptedFiles: '.jpg,.png,.jpeg,.gif'
        ,parallelUploads: 6
        ,url: 'https://api.cloudinary.com/v1_1/sdlc-consulting-inc/image/upload'
    });

    myDropzone.on('sending', function (file, xhr, formData) {
        //formData.append('cloud-name', 'sdlc-consulting-inc');
        formData.append('api_key', 769139747187178);
        formData.append('timestamp', Date.now() / 1000 | 0);
        formData.append('upload_preset', 'sdlc_preset');
    });

    myDropzone.on('success', function (file, response) {
        console.log('Success! Cloudinary public ID is', response.public_id);
    });


    myDropzone.on('complete', function (file) {
        console.log('Completed. Status is', file.status);
    });

}