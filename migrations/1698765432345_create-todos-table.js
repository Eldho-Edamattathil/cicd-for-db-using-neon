exports.up = (pgm) => {
  pgm.createTable('todos', {
    id: 'id',
    title: { type: 'varchar(255)', notNull: true },
    name: { type: 'varchar(255)', notNull: false },
    completed: { type: 'boolean', notNull: true, default: false },
	 
	  
  });
};

exports.down = (pgm) => {
  pgm.dropTable('todos');
};
