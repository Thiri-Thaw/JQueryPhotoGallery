$( document ).ready( function ()
{
    //     $( "#filter li" ).click( function ()
    //     {
    //         var category = $( this ).html();
    //         $( "#portfolio li" ).fadeOut();

    //         $( "#portfolio li" ).each( function ()
    //         {
    //             if ( $( this ).hasClass( category ) )
    // {
    //                 $( this ).fadeIn();
    //             }
    //         } );
    //     } );
    $( "#filter button" ).click( function ()
    {
        var category = $( this ).attr( "data-filter" );
        // $( "#portfolio li" ).fadeOut();
        if ( category == "all" )
        {
            $( ".filter" ).show();
        }
        else
        {
            $( ".filter" ).not( "." + category ).hide();
            $( ".filter" ).filter( "." + category ).show();
        }
        $( "button" ).click( function ()
        {
            $( this ).addClass( "active" ).siblings().removeClass( "active" );
        } )


    } );
} );