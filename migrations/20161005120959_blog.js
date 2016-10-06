
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blog_tbl', function(table) {
    table.increments();
    table.string('title');
    table.text('content');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blog_tbl')
};
