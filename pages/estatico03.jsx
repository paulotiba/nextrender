export  function getStaticProps() {
    return {
        revalidate: 5,
        props: {
            numero: Math.random()
        }
    }
}



export default function estatico03(props) {
    return (
        <div>
            <h1>Estático #03</h1>
            <p>método revalidate renova o método estático a cada chamada no tempo passado mudando o valor de acordo com tempo minutos horas segundos dias semanas meses e assim por diante.. </p>
            <h2>{props.numero}</h2>
        </div>
    )
}