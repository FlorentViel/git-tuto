// On écoute le click sur les éléments qui ont la classe .nav-item
$('.nav-item').click(function (event) {
    // console.log(event);
    // event.currentTarget == this
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
});

var word = $('#tap-text').text().trim();

$('#tap-text').text('');

// Parcourir les lettres du mot  

for (let i = 0; i < word.length; i++){
    //console.log(word[i]);

setTimeout(function(){
    console.log(word[i]);

    $('#tap-text').append(word[i]);
}, 150 * i);
}

