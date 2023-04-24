import { format } from 'date-fns';

export const COLUMNS = [
    {
        Header: "Fuel in Date",
        Footer: "Fuel in Date",
        accessor: "fuel_in_date",
        Cell: ({value}) => {return format(new Date(value),'dd/MM/yyyy')}
    },
    {
        Header: "Fuel in Code",
        Footer: "Fuel in Code",
        accessor:"fuel_in_code"
    },
    {
        Header: "Driver",
        Footer: "Driver",
        accessor:"driver"
    },
    {
        Header: "Bowser",
        Footer: "Bowser",
        accessor:"bowser"
    },
    {
        Header: "Fuel Name",
        Footer: "Fuel Name",
        accessor:"fuel_name"
    },
    {
        Header: "Tank",
        Footer: "Tank",
        accessor:"tank"
    },
    {
        Header: "Staion",
        Footer: "Staion",
        accessor:"staion"
    },
    {
        Header: "Tank Balance",
        Footer: "Tank Balance",
        accessor:"tank_balance"
    },
    {
        Header: "Recieve Volume(li)",
        Footer: "Recieve Volume(li)",
        accessor:"recieve_volume(li)"
    },
    {
        Header: "Book Volume(li)",
        Footer: "Book Volume(li)",
        accessor:"book_volume(li)"
    },
    {
        Header: "Remark",
        Footer: "Remark",
        accessor:"remark"
    }
]