// Função utilitária que atualiza o estado do componente sempre que o valor de um input for alterado.
export default function(e) {
  const value =
    e.target.type === "checkbox" ? e.target.checked : e.target.value;
  this.setState({
    [e.target.name]: value
  });
}
