user_sql={
    "addUser":"insert into user(telephone,password,email) values('{telephone}','{password}','{email}')",
    "checkUser":"select password from user where telephone='{telephone}'"
}