
var numero = 1;

function setValue(value) {
  document.getElementById('num').value = this.value;
}

function less() {
  this.numero--;
  setValue(this.numero);
}

function more() {
  this.numero++;
  setValue(this.numero);
}
