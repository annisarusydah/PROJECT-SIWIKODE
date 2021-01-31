function validationAdmin() 
{
    let username=document.forms["form"]["username"].value;
    let password=document.forms["form"]["password"].value;

    if(username=="admin" && password=="admin")
        {
            alert("Login berhasil");
            window.open("admin.html");
        }
    else
        {
            alert("Gagal Login. Username atau Password Salah");
        }
}