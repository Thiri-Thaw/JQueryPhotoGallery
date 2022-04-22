$( document ).ready( function ()
{
    // search function
    var current_li;
    $( "#search" ).keyup( function ()
    {
        var current_query = $( "#search" ).val()
        if ( current_query != "" )
        {
            $( "#portfolio li" ).hide();
            $( "#portfolio li" ).each( function ()
            {
                var current_keyword = $( this ).attr( "data-keywords" );
                if ( current_keyword.indexOf( current_query ) >= 0 )
                {
                    $( this ).show();
                }
            } );

        } else
        {
            $( "#portfolio li" ).show();
        }
    } );

    // sorting images
    $( "#portfolio" ).sortable();

    // description
    function setImg( src, id )
    {
        $( "#main" ).attr( "src", src );
        var path = "text/" + id + ".txt";
        $.get( path, function ( data )
        {
            $( "#description p" ).html( data );
        } );
    }

    $( "#portfolio img" ).click( function ()
    {
        var src = $( this ).attr( "src" );
        var id = $( this ).attr( "id" )
        current_li = $( this ).parent();
        setImg( src, id )
        $( "#frame" ).show();
        $( "#overlay" ).show();

    } );

    $( "#overlay" ).click( function ()
    {
        $( this ).hide();
        $( "#frame" ).hide();
    } );
    $( "#right" ).click( function ()
    {
        if ( current_li.is( ":last-child" ) )
        {
            var next_li = $( "#portfolio li" ).first();
        }
        else
        {
            var next_li = current_li.next();

        }
        var next_src = next_li.children( "img" ).attr( "src" );
        var id = next_li.children( "img" ).attr( "id" );
        $( "#main" ).attr( "src", next_src );
        setImg( next_src, id );
        current_li = next_li;
    } );

    // func:of arrow
    $( "#left" ).click( function ()
    {
        if ( current_li.is( ":first-child" ) )
        {
            var prev_li = $( "#portfolio li" ).last();
        }
        else
        {
            var prev_li = current_li.prev();
        }
        var prev_src = prev_li.children( "img" ).attr( "src" );
        var id = prev_li.children( "img" ).attr( "id" );
        setImg( prev_src, id );
        $( "#main" ).attr( "src", prev_src );
        current_li = prev_li;
    } );

    // arrow
    $( "#right,#left" ).mouseover( function ()
    {
        $( this ).css( "opacity", "0.75" );
    } );
    $( "#right,#left" ).mouseleave( function ()
    {
        $( this ).css( "opacity", "0.08" );
    } );
} );