sql_edit={
    "update_edit":"UPDATE user_info SET user_info.city_id=(SELECT id FROM city WHERE name='{city}'),user_info.province_id=(SELECT id FROM province WHERE NAME='{province}'),nickname='{nickname}',sex_id=(select id from sex where name='{sex}'),birth_data='{birth_data}',tittle='{title}' where id='{user_info_id}'",
    "update_email":"update user set email='{email}' where id='{id}'",
}