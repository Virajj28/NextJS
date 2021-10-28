// catch all routes indicates catches all the url segments and maps it into one single file
//useful for some doc site as different segments is needed in the url for better seo in org and 
// at the end of the day layout will remain the same
// testing of route as localhost:3000/docs/dude/it's/insane
import {useRouter } from 'next/router'

export default function Doc () {
    const router = useRouter()
    const {params} = router.query
    console.log(params)

    if (params.length === 2) {
        return (
            <h1>
                Visiting docs for feature {params[0]} and concept {params[1]}
            </h1>
        )
    } else if (params.length === 1) {
        return <h1>Viewing docs for feature {params[0]}</h1>
    }
    return <h1>Docs home page</h1>
}