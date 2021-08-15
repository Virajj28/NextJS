import Link from 'next/Link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props: { peeps: data}
    }

}

const peeps = ({peeps}) => {
    return(
        <div>
            <h1>Hey !Peep</h1>
            {peeps.map(peeps => (
                <Link href={`/peeps/` + peeps.id} key={peeps.id}>
                 <h2>{peeps.name}</h2>
                </Link>
            ))}
        </div>
    );
}

export default peeps;