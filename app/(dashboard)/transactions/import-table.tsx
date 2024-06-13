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
    onTableHeadSelectsChange: (columnIndex: number, value: string | null)


}