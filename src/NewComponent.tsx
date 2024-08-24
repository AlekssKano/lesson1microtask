import React from 'react';

export type NewComponentType = {
    students: Array<StudentType>;
    //students: StudentType[] второй вариант типизирования
}
type StudentType = {
    id: number,
    name: string,
    age: number
}
export const topCars = [
    {manufacturer: 'BMV', model: 'mcs'},
    {manufacturer: 'Toyota', model: 'Helux'},
    {manufacturer: 'Kia', model: 'Rio'}
]
type CarPropsType = {

    manufacturer: string,
    model: string
}
export type Cars = {
    cars:Array<CarPropsType>
}

export const NewComponent = (props:Cars) => {


    return (
        <>
            {props.cars.map((cars: CarPropsType, index )=> {
                return (
                <table>
                <tbody>
                <tr>
                <th key={index} > {cars.model} </th>
                <th > {cars.manufacturer} </th>
                </tr>
                </tbody>
                </table>
                )
            })
            }
            </>
                )

}



            {/*<ul>*/}
            {/*    {props.students.map((students: StudentType) => {*/}
            {/*        return (*/}
            {/*            <>*/}
            {/*                <li key={students.id}>{students.name} {students.age}</li>*/}
            {/*                /!*<li key={students.id}>{students.age}</li>*!/*/}

            {/*            </>*/}
            {/*        )*/}
            {/*    })}*/}


            {/*</ul>*/}

