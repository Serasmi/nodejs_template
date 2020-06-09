const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  resolve: {
    alias: {
      '@': resolve('src'),
      '@middleware': resolve('/src/middleware'),
      '@routes': resolve('/src/routes'),
      '@utils': resolve('/src/utils'),
    },
  },
};
