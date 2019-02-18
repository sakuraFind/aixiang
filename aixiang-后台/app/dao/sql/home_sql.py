home_sql={
    "load":"SELECT icon.icon_url,user_info.nickname,user_info.title,article.title,article_img.article_url FROM icon INNER JOIN user_info INNER JOIN article INNER JOIN article_img ON icon.use_id=user_info.users_id and user_info.users_id=article.u_id AND article.id=article_img.articles_id ORDER BY RAND() LIMIT 4",
    "celebrity_load":"SELECT icon.icon_url as icon,user_info.nickname as name, user_info.title as title FROM icon INNER JOIN user_info on icon.use_id=user_info.users_id ORDER BY RAND() LIMIT 4",
    "nav":"SELECT icon.icon_url as iocns,user_info.nickname as nickname FROM icon INNER JOIN user_info on icon.use_id=user_info.users_id WHERE users_id={users_id}",
    "getid":"SELECT id FROM `user` WHERE telephone='{telephone}'"
}