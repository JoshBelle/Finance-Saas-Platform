import { TableHeadSelect } from './table-head-select'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table'

type Props = {
    headers: string[],
    body: string[][],
    selectedColumns: Record<string, string | null>
    onTableHeadSelectsChange: (columnIndex: number, value: string | null) => void
}

export const ImportTable = ({
    headers,
    body,
    selectedColumns,
    onTableHeadSelectsChange
}:Props) => {
    <div className='rounded-md border overflow-hidden'>
        <Table>
            <TableHeader className='bg-muted'>
                <TableRow>
                    {headers.map((_item, index) => (
                        <TableHead key={index}>
                            <TableHeadSelect 
                                columnIndex={index}
                                selectedColumns={selectedColumns}
                                onChange={onTableHeadSelectsChange}
                            />
                        </TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {body.map((row: string[], index) => (
                    <TableRow key={index}>
                        {row.map((cell, index) => (
                            <TableCell key={index}>
                                {cell}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
}