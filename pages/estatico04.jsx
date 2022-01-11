// gera o conteúdo somente no servidor 

export async function getStaticProps() {
    console.log('[servidor] gerando so servidor')
  const resp = await fetch("http://localhost:3000/api/produtos");
  const produtos = await resp.json();

  return {
    props: {
      produtos,
    },
  };
}

export default function estatico04(props) {
  function renderizarProdutos() {
    return props.produtos.map((produto) => {
        console.log('[cliente], renderizando o componente!!')
      return (
        <li key={produto.id}>
          {produto.nome} tem preço de R${produto.preco}
        </li>
      );
    });
  }
  return (
    <div>
      <h1>Estático #04</h1>
      <ul>
          {renderizarProdutos()}
      </ul>
    </div>
  );
}
