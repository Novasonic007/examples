$( document ).ready(function() {
    const $lastExamplesButton = $('#last-examples-button');
    const $lastExamplesList = $('#last-examples-result--content');
    $("#last-examples-result").hide();

    $lastExamplesButton.click(function() {
        $("#last-examples-result").show();
        $.getJSON( "./recent-examples.json", function( data ) {
            $.each( data, function( key, val ) {
                const parts = val.path.split('\\');
                parts.shift();
                let name = parts.join(' - ');
                name = name.replace('.js', '');
                $lastExamplesList.append(`
                    <div class="result p-2 mb-2">
                        <a href="view.html?src=${val.path}" class="result-title d-block mb-1">
                            ${name}
                        </a>
                    </div>
                `);
            });
        });
    });

    $("body").on("click", function(event){
        // console.log("Event ", event.target)
        const $lastExamplesContainer = $(event.target).closest("#last-examples-button"),
            clickedInLastExamples = $lastExamplesContainer.length > 0;
            if(!clickedInLastExamples){
            $("#last-examples-result").hide();
        }
    });
});

