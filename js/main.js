$(document).ready(function(){
    $('header button').click(function(){
       $('form').slideDown();
    })

    $('#btn-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();

        const enderecoNovaImg = $(`#endereco-img-nova`).val();

        const novoItem = $('<li style="display:none">    </li>');
        $(`<img src="${enderecoNovaImg}" />`).appendTo(novoItem);

        $(`
            <div class="overlay-img-link">
                <a href="${enderecoNovaImg}" target="_blank" title="Ver imagem em tamanho real" />
                Ver imagem em tamanho real
            </div>
            `).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(2000);

            $('#endereco-img-nova').val(' ');
    })
})