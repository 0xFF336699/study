var uuids []string

res, err := db.QueryOne(pg.Array(&uuids), 'select xx')



var name string

res, err:= db.QueryOne(pg.Scan(&name), 'select xx');