
// function showForm(event) {
//     $(event.data.arg).show('slow');
// };
// function hideForm(event) {
//     $(event.data.arg).hide('slow');
// };
// function ajaxReg(data) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', '/regist', true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.send(JSON.stringify(data));

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState !== 4) return;
//         if (xhr.status === 200) {
//             $('#result').html(`Registration Success  <br /> 
//                                 Welcome <em>  ${JSON.parse(xhr.response).surname} <em/> <br/> 
//                                 Now you can sign in to your account`);
//             $("#regForm").hide('slow');
//         } else {
//             console.log(xhr.status + '-' + xhr.statusText);
//         }
//     }
// }

// $('#singUp').on('click', { arg: "#regForm" }, showForm);

// $('#send').on('click', function () {
//     event.preventDefault();
//     if ($('#userName').val() &&
//         $('#userSurname').val() &&
//         $('#userEmail').val() &&
//         $('input[name="gender"]:checked').val() &&
//         $('#userPassword').val() &&
//         (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test($('#userEmail').val())
//     ) {
//         if ($('#userPassword').val() === $('#passConfirm').val()) {
//             var regData = {
//                 name: $('#userName').val(),
//                 surname: $('#userSurname').val(),
//                 email: $('#userEmail').val(),
//                 gender: $('input[name="gender"]:checked').val(),
//                 password: $('#userPassword').val()
//             }
//             ajaxReg(regData);

//             $('#userName').val('');
//             $('#userSurname').val('');
//             $('#userEmail').val('');
//             $('#userPassword').val('');
//             $('#passConfirm').val('');

//             $('#regErr').text('');
//             $('#passConfirm').css("box-shadow", "none");
//         } else {
//             $('#regErr').text('Password and Confirmation do not match!');
//             $('#passConfirm').css("box-shadow", "0px 0px 80px red")
//         }
//     } else {
//         $('#regErr').text('Fill in all the fields and check the password and emaila');
//     }
// });

// $('#singIn').on('click', { arg: "#loginForm" }, showForm);

// $('#login').on('click', function () {
//     if($(!'#loginEmail').val() ||
//             !$('#loginPassword').val()){
//                 event.preventDefault();
//                 $('#logErr').text('Email or Password entered incorrectly');
//     }
// });
// $('.close>img').on('click', { arg: "#regForm" }, hideForm);
// $('.close>img').on('click', { arg: "#loginForm" }, hideForm);

