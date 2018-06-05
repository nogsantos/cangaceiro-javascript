/**
 *
 *
 * @class NegociacaoController
 */
class NegociacaoController {
	constructor() {
		let $ = document.querySelector.bind(document);

		this.data = $('#data');
		this.valor = $('#valor');
		this.quantidade = $('#quantidade');

		this.data.focus();
		// this.data.value = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`;
	}
	/**
	 *
	 *
	 * @param {*} event
	 * @memberof NegociacaoController
	 */
	adiciona(event) {
		event.preventDefault();
		let arrData = this.data.value;
		let splData = arrData.split('/');
		let dt = new Date(splData.map((item, indice) => item - (indice % 2)));

		// let negociacao = new Negociacao(data, parseInt(this.quantidade.value), parseFloat(this.valor.value));

		console.log(dt);
	}
}
