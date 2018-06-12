/**
 *
 *
 * @class NegociacaoController
 */
class NegociacaoController {
	/**
	 * Creates an instance of NegociacaoController.
	 *
	 * @memberof NegociacaoController
	 */
	constructor() {
		let $ = document.querySelector.bind(document);

		this.data = $('#data');
		this.valor = $('#valor');
		this.quantidade = $('#quantidade');

		this.valor.focus();
		this.setaData();
	}
	/**
	 * Seta data inicial
	 *
	 * @memberof NegociacaoController
	 */
	setaData() {
		this.data.value = DateConverter.paraApresentacao();
	}
	/**
	 * Adiciona um evento
	 *
	 * @param {*} event
	 * @memberof NegociacaoController
	 */
	adiciona(event) {
		event.preventDefault();

		let data = DateConverter.paraData(this.data.value);

		let negociacao = new Negociacao(data, parseInt(this.quantidade.value), parseFloat(this.valor.value));

		let txtData = DateConverter.paraTexto(negociacao.data);

		console.log(txtData, negociacao);
	}
}
