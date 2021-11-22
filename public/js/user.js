/** 
 * Create User
 * 
*/
function store(e) {
    e.preventDefault();

    let name = $('.name').val();
    let email = $('.email').val();

    $.ajax({
        url: '/users/',
        type: 'POST',
        headers: {
            'X-CSRF-Token': $('meta[name="_token"]').attr('content')
        },
        data: {
            name: name,
            email: email
        },
        success: function (response) {
            $('#create-user-modal').modal('hide');
        },
        error: function (response) {
          console.log(response.error);
        }
    });
}
