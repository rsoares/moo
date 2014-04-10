var connect = require( "connect" ),
    route = require( "connect-route" ),
    fs = require( "fs" );

connect.createServer(
  connect.static( __dirname ),
  route( function( app ) {
    app.get("/", function( req, res ) {
      fs.readFile( "./app/templates/main.html", function( err, html ) {
        res.writeHeader( 200, { "Content-Type": "text/html" } );
        res.write( html );
        res.end();
      });
    });
  })
).listen( 8080 );
