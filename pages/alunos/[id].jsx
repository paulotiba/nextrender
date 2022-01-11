export async function getStaticPaths() {
    const resp = await fetch('http://localhost:3000/api/alunos/tutores')
    const ids = await resp.json()
     
    const paths = ids.map(id => {
        return { params: { id: `${id}` }}
    })


    return {
        fallback: false, // 404 erro 
        paths: [
            { params: {id: '1'}},
            { params: {id: '2'}},
            { params: {id: '3'}},
        ]
    }
}




export async function getStaticProps( {params} ) {
    const resp = await fetch(`http://localhost:3000/api/alunos/${params.id}`)
    const aluno = await resp.json()
    return {
        props: {
            aluno
        }
    }
}



export default function AlunoPorId(props) {
    const { aluno } = props
    return(
        <div>
            <h1>Detalhes do Aluno.</h1>
            <ul>
                <li>{aluno.id}</li>
                <li>{aluno.nome}</li>
                <li>{aluno.email}</li>
            </ul>
        </div>
    )
}