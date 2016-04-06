$(document).ready(function () {
	$("#slide img:eq(0)").addClass("ativo").show();
});

 //com esse código nós inserimos uma tag <p>
var texto = $(".ativo").attr("alt");
$("#slide").prepend("<p>" + "Motos ùnicas e customizadas" + "</p>");

 //intervalo da função
setInterval(slide, 3000);

 //função slide
function slide() {
	//aqui vai o código do nosso slide
	if ($(".ativo").next().size()) {
		/* se houver, escondemos a imagem em um efeito de fadeOut
		 * e retiramos a classe ".ativo" da imagem atual
		 * capturamos a tage que vem em seguida e fazemos ela aparecer com efeito fadeIn
		 * inserimos na imagem seguinte a classe ".ativo"
		 */
		$(".ativo").fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
	} else {
		/* se não, irá retornar ao estado inicial do slide
		 * retiramos a classe ".ativo" e procuramos pela 1ª imagem do slide
		 * add novamente a classe ".ativo" na 1ª imagem
		 */
		$(".ativo").fadeOut().removeClass("ativo");
		$("#slide img:eq(0)").fadeIn().addClass("ativo");
		/* agora faremos um código para guardar o texto da legenda dentro de uma váriavel
		 * escondemos a legenda de forma mais direta(rápida)
		 * colocaremos o texta da váriavel "texto"
		 * e exibiremos após meio segundo
		 */
		$("#slide p").hide().html(texto).delay(500).fadeIn();

	}
};