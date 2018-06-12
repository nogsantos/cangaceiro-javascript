/**
 *
 *
 * @class DateConverter
 */
class DateConverter {
	/**
	 * Creates an instance of DateConverter.
	 *
	 * @memberof DateConverter
	 */
	constructor() {
		throw new Error('Sorry, this class can`t be instanciated, it is only for static methods');
	}
	/**
	 *
	 *
	 * @param {*} data
	 * @memberof DateConverter
	 */
	static paraApresentacao() {
		let day = new Date().getDate();
		let month = new Date().getMonth() + 1;
		let year = new Date().getFullYear();

		return `${day <= 9 ? '0' + day : day}/${month <= 9 ? '0' + month : month}/${year}`;
	}
	/**
	 *
	 *
	 * @param {*} data
	 * @returns
	 * @memberof DateConverter
	 */
	static paraTexto(data) {
		return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
	}
	/**
	 *
	 *
	 * @param {*} data
	 * @returns
	 * @memberof DateConverter
	 */
	static paraData(data) {
		let dataReg = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
		if (!data) {
			return new Date();
		}
		if (!dataReg.test(data)) {
			throw new Error('Formato correto para a data: dd/mm/yyyy');
		}
		let splData = data.split('/');
		let maping = splData.map((item, indice) => parseInt(item) - (indice % 2));
		return new Date(...maping.reverse());
	}
}
