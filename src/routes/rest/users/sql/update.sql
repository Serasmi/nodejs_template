update users set (${this:name}) = (${this:csv}) where id = ${id} returning id;
