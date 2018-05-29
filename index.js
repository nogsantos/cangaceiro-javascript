const _this = document;

let campos = [
    _this.querySelector('#data'),
    _this.querySelector('#valor'),
    _this.querySelector('#quantidade'),
];
campos[0].value = new Date();

let tbody = _this.querySelector('table tbody');

_this.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    let tr = _this.createElement('tr');

    campos.forEach(campo => {
        let td = _this.createElement('td');
        td.textContent= campo.value;
        tr.appendChild(td);
    });


    let tdVolume = _this.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    prepare();

});

const prepare = () => {
    campos.map(campo => {
        campo.value = '';
    });
    campos[0].value = new Date();
};