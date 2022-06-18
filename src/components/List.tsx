import React from 'react';

// Generic список
interface ListProps<T> {
    items: T[]
    renderItem: (item: T) => React.ReactNode
    listName: string
}

export default function List<T>(props: ListProps<T>) {
    return(
        <div>
            <h2>Универсальный список : {props.listName}</h2>
            {props.items.map(props.renderItem)}
        </div>
    )
}

// const FC = <T extends {}>(props: ListProps<T>) => {
//     return(
//         <div>
//             <h2>Универсальный список : {props.listName}</h2>
//             {props.items.map(props.renderItem)}
//         </div>
//     )
// }
