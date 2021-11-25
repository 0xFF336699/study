```
ParseIsOk          bool       `json:"parse_is_ok" pg:",use_zero"` // use_zero是可以使用false的意思
EnabledForSuperior bool       `json:"enabled_for_superior" pg:",use_zero"`
CreateTime         *time.Time `json:"create_time" pg:",default:now(),use_zero" sql:",notnull"`
```

```
排除字段需要用中划线，不是下划线

	BrowserInfo string `json:"browser_info" pg:"-" sql:"-"`
```



https://github.com/go-pg/pg/issues/1558

```

type Renamed struct {
	TableName struct{}     `sql:"items,alias:item"`
	Id        int          `sql:"item_id,pk"`
	Mapping   *ItemMapping `pg:"fk:item_id"`
}

type Subscription struct {
	tableName struct{} `pg:"\"Subscriptions\",discard_unknown_columns"`

	ID        string    `pg:"_id,pk,type:uuid"`
	Status    string    `pg:"status"`
...
	AddressID string    `pg:"address__id"`

	Address *Address `pg:"fk:address__id" json:"Address"`

}

type Address struct {
	tableName struct{} `pg:"\"Addresses\",discard_unknown_columns"`

	ID        string    `pg:"_id,pk,type:uuid"`
	Line1     string    `pg:"line1,notnull"`
	Line2     *string   `pg:"line2"`
	City      string    `pg:"city,notnull"`
	State     string    `pg:"state,notnull"`
	ZipCode   string    `pg:"zipCode,notnull"`
	Longitude float64   `pg:"longitude"`
	Latitude  float64   `pg:"latitude"`
	CreatedAt time.Time `pg:"created_at,notnull"`
	UpdatedAt time.Time `pg:"updated_at,notnull"`
}

func (c *Client) Get(id string) (*Subscription, error) {
	sub := &Subscription{}
	q := c.db.Model(sub)
         // q = q.Relation("Addresses") This doesn't work for some reason. Gives relationship not found error. But Address does use Addresses in the query.
	q = q.Relation("Address")
	err := q.Where(`"subscription"."_id" = ?`, id).Select()
	if err != nil {
		return nil, err
	}
	return sub, nil
}
```