import Link from "next/link"

type userType = {
    id: number;
    name: string;
    username: string;
    email: string;
}

export default async function UsersPage() {
    // const users = await fetch('https://jsonplaceholder.typicode.com/users', {'cache': 'no-store'}) // don't store cache
    // const users = await fetch('https://jsonplaceholder.typicode.com/users', {'cache': 'no-cache'}) // don't cache
    // const users = await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 10 } }) // cache and then revalidate the cache every 10s
    const users: userType[] = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()

    return (
        <section>
            <h2>
                <div className="">UsersPage</div>
                <div className="">
                    <Link href="/" className="font-bold text-sm text-blue-600">Back home</Link>
                </div>
            </h2>
            <div className="">
                {
                    users.map(ech => {
                        return (
                            <div key={`${ech.id}-${ech.username}`} className="my-5">
                                <div className="">Name: {ech.name}</div>
                                <div className="">Email: {ech.email}</div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}