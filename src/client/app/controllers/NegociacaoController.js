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

		this.setaData();
		this.valor.focus();
	}
	/**
	 * Seta data inicial
	 *
	 * @memberof NegociacaoController
	 */
	setaData() {
		let day = new Date().getDate();
		let month = new Date().getMonth() + 1;
		let year = new Date().getFullYear();

		this.data.value = `${day <= 9 ? '0' + day : day}/${month <= 9 ? '0' + month : month}/${year}`;
	}
	/**
	 * Adiciona um evento
	 *
	 * @param {*} event
	 * @memberof NegociacaoController
	 */
	adiciona(event) {
		event.preventDefault();
		let negociacao = new Negociacao(this.formataData(this.data.value), parseInt(this.quantidade.value), parseFloat(this.valor.value));
		console.log(negociacao);
	}
	/**
	 * Formata data para cadastro
	 *
	 * @memberof NegociacaoController
	 */
	formataData(dataIn) {
		if (!dataIn) {
			return new Date();
		}
		let splData = dataIn.split('/');
		let maping = splData.map((item, indice) => parseInt(item) - (indice % 2));
		return new Date(...maping.reverse());
	}
}
