findAll({
  ...
  order: [
    [models.Image, 'updated_at', 'asc]
  ]
  ...
});
models.Image 有别名的话就用别名