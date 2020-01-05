// /*
//  After you have changed the settings under responsive_images
//  run this with one of these options:
//   "grunt" alone creates a new, completed images directory
//   "grunt clean" removes the images directory
//   "grunt responsive_images" re-processes images without removing the old ones
// */

module.exports = function (grunt) {
  grunt.initConfig({
    image: {
      static: {
        options: {
          pngquant: true,
          optipng: false,
          zopflipng: true,
          jpegRecompress: false,
          jpegoptim: true,
          mozjpeg: true,
          gifsicle: true,
          svgo: true
        },
        files: {
          'dist/img.png': 'src/img.png',
          'dist/img.jpg': 'src/img.jpg',
          'dist/img.gif': 'src/img.gif',
          'dist/img.svg': 'src/img.svg'
        }
      },
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'img/'
        }]
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-image');
  grunt.registerTask('default', ['image']);
};