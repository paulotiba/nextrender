export function getServerSideProps() {
  return {
    props: {
      numero: Math.random(),
    },
  };
}

export default function Dinamico1(props) {
  return (
    <>
      <h1>Dinâmico #01</h1>
      <h2>{props.numero}</h2>
    </>
  );
}
