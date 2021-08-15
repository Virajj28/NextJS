export const getStaticPaths = async () => {
    const res =  await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(peeps =>{
        return {
            params: {id: peeps.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id= context.params.id;
    const res= fetch(`https://jsonplaceholder.typicode.com/users/${id}`); 
    const data= await res.json();

    return {
        props: {peeps:data}
    }
}

const Details = ({peeps}) => {
    return (
        <div className="details">
            <h1>Details Page</h1>
            <p>{peeps.name}</p>
            <p>{peeps.email}</p>
        </div>
    );
    }

export default Details;