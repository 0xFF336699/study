
		ids := []string{}  
		_, err := db.Query(pg.Array(&ids), `select array_agg(uuid) from (select post.uuid from post where id > 0 order by id limit 10) f`)