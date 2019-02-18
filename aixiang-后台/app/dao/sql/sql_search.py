sql_search={
    "select_caption":"select a.id,a.title,a.collect_count,a.praise_count,caption_url,c.nickname,c.icon_url,d.album_name from caption as a inner JOIN caption_img as b inner join user_info as c inner JOIN album as d on a.id=b.caption_id and a.album_id=d.id and a.user_id=c.id and a.title like '{name}'",
    "select_album":"select album_name,title,album_url from album where title like '{name1}' || album_name like '{name2}'",
    "select_article":"select a.title,a.article_cover,b.nickname,b.icon_url from article as a INNER JOIN user_info as b on a.u_id=b.users_id where a.title like '{name3}'",
    "select_superman":"select icon_url,nickname,follows,fans from user_info where title like '{name4}' || nickname like '{name5}'"
}