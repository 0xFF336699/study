select p.type, p.from_type, p.width, p.height, p.username, p.is_video, p.captions, p.tags, 
(select json_agg(ii.*) from (select i.is_video, i.index, (select row_to_json(rr) from (select r.cf_id, r.width, r.height from resource r where r.uuid=i.img_uuid) rr) as image from resource_item i where i.post_uuid = p.uuid) ii) as items
from post p where p.shortcode='B7P62TBHl6q' limit 1

row_to_json image是对象，json_agg items是数组

select json_agg(ii.*) from (select i.is_video, i.index from resource_item i where i.post_uuid = 'afb00766366511ea99e78f656b7b41cb') ii;

select成数组



单个字段返回可以直接是数组

```
houses := []string{}
pg.QueryOne(&houses, `select uuid from user_express_house`)
```