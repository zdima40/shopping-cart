const stat = [1,2,3]

const stat = [
    {
        id: 1,
        val: 1
    },    
    {
        id: 2,
        val: 2
    },
    {
        id: 2,
        val: 2
    },
]


const rendElement = e => (<Articls key={e.id} name={e.name} text={e.text}/>)

<div>{stat.map((e) => rendElement(e))}</div>;
