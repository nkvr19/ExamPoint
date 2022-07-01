function create() {
  var fullname = document.getElementById('fullname').value;
  var college = document.getElementById('college').value;
  var uid = document.getElementById('uid').value;
  var pass1 = document.getElementById('pass1').value;
  var pass2 = document.getElementById('pass2').value;
  var role = document.getElementById('role').value;
  var flag = 0;
  console.log(role);
  if (vname(fullname.trim())) {
    if (vcollege(college.trim())) {
      if (vuid(uid.trim(), 5, 15)) {
        if (pass1 === '') {
          alert('Please enter password');
          document.getElementById('pass1').style.border = '2.5px solid red';
        }
        if (pass2 === '') {
          alert('please re-enter the password');
          document.getElementById('pass2').style.border = '2.5px solid red';
        }

        vpass(pass1, pass2);
        if (role == '') {
          alert('please select the role');
        }
      }
    }
  }

  // console.log(userData);
  if (role === 'teacher') {
    const userData = {
      teacherName: fullname,
      collegeName: college,
      uId: uid,
      password: pass1,
      role: role,
    };
    console.log('test');
    axios({
      method: 'post',
      url: 'http://localhost:3000/addteacher/',
      data: userData,
    })
      .then(res => {
        console.log(res);
        if (res.statusText === 'Created') {
          alert('Successfully Created Teacher Account..');
          document.getElementById('fullname').value = '';
          document.getElementById('college').value = '';
          document.getElementById('uid').value = '';
          document.getElementById('pass1').value = '';
          document.getElementById('pass2').value = '';
          document.getElementById('role').value = '';
        }
      })
      .catch(err => {
        console.log(err);
        alert('ID Already Exists....');
        document.getElementById('uid').style.border = '2.5px solid red';
      });
  } else if (role === 'student') {
    const userData = {
      studentName: fullname,
      collegeName: college,
      uId: uid,
      password: pass1,
      role: role,
    };
    axios({
      method: 'post',
      url: 'http://localhost:3000/addstudent',
      data: userData,
    })
      .then(res => {
        console.log(res);
        if (res.statusText == 'Created') {
          alert('Successfullt Created Student Account..');
          document.getElementById('fullname').value = '';
          document.getElementById('college').value = '';
          document.getElementById('uid').value = '';
          document.getElementById('pass1').value = '';
          document.getElementById('pass2').value = '';
          document.getElementById('role').value = '';
        }
      })
      .catch(err => {
        console.log(err);
        alert('ID Already Exits.......');
        document.getElementById('uid').style.border = '2.5px solid red';
      });
  }
  return false;
}
var re = /\d+/;
function vname(fullname) {
  if (fullname === '' || Boolean(fullname.match(re))) {
    alert('Please enter valid name.');
    // document.getElementById("fullname").focus();
    document.getElementById('fullname').style.border = '2.5px solid red';
  } else {
    document.getElementById('fullname').style.border = null;

    return true;
  }
}
function vcollege(college) {
  if (college === '' || Boolean(college.match(re))) {
    alert('Please enter valid college name.');
    document.getElementById('college').style.border = '2.5px solid red';
  } else {
    document.getElementById('college').style.border = null;
    return true;
  }
}
function vuid(uid, mi, ma) {
  let re = /^[a-zA-Z0-9]+$/;
  if (
    uid === '' ||
    !Boolean(uid.match(re)) ||
    uid.length < mi ||
    uid.length > ma
  ) {
    alert(
      `Create valid unique id(mimimum of ${mi} charecters and maximum of ${ma} charecters.`
    );
    document.getElementById('uid').style.border = '2.5px solid red';
  } else {
    document.getElementById('uid').style.border = null;
    return true;
  }
}
function vpass(pass1, pass2) {
  let re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (!re.test(pass1)) {
    alert('Password is not STRONG');
    document.getElementById('pass1').style.border = '2.5px solid red';
  } else {
    document.getElementById('pass1').style.border = null;
  }
  if (pass1 != pass2) {
    alert('Passwords are not matching');
    document.getElementById('pass2').style.border = '2.5px solid red';
  } else {
    document.getElementById('pass2').style.border = null;
    return true;
  }
}
// Role Validation to be added

function login() {
  var userid = document.getElementById('userid').value;
  var password = document.getElementById('pass').value;

  console.log(userid, password);
}
