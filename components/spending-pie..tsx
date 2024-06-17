import { FileSearch, PieChart, Radar, Target } from 'lucide-react';
import { useState } from 'react';
import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle 
} from '@/components/ui/card';

import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectValue,
    SelectItem,
} from './ui/select';

type Props = {
    data: {
        name: string;
        value: number;
    }[];
};

export const SpendingPie = ({ data }: Props) => {
    const [chartType, setChartType] = useState('pie');
    const onTypeChange = (type: string) => {
        setChartType(type);
    };
    return (
        <Card className="border-none drop-shadow-sm">
            <CardHeader className="flex space-y-2 lg:flex-row lg:items-center justify-between">
                <CardTitle className="text-xl line-clamp-1">
                    Categories
                </CardTitle>
                <Select
                    defaultValue={chartType}
                    onValueChange={onTypeChange}
                >
                    <SelectTrigger className='lg:w-auto h-9 rounded-md px-3'>
                        <SelectValue placeholder='Chart type'/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value='pie'>
                            <div className='flex items-center'>
                                <PieChart className='size-4 mr-2 shrink-0' />
                                <p className='line-clamp-1'>
                                    Pie chart
                                </p>
                            </div>
                        </SelectItem>
                        <SelectItem value='radar'>
                            <div className='flex items-center'>
                                <Radar className='size-4 mr-2 shrink-0' />
                                <p className='line-clamp-1'>
                                    Radar chart
                                </p>
                            </div>
                        </SelectItem>
                        <SelectItem value='radial'>
                            <div className='flex items-center'>
                                <Target className='size-4 mr-2 shrink-0' />
                                <p className='line-clamp-1'>
                                    Radio chart
                                </p>
                            </div>
                        </SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent>
                {data.length === 0 ? (
                    <div className="flex flex-col gap-y-4 items-center justify-center h-[350px] w-full">
                        <FileSearch className="size-6 text-muted-foreground" />
                        <p className="text-muted-foreground text-small">
                            No data for this period
                        </p>
                    </div>
                ) : (
                    <>
                        {chartType === 'pie' && <AreaVariant data={data} />}
                        {chartType === 'radar' && <BarVariant data={data}/>}
                        {chartType === 'radio' && <LineVariant data={data} />}
                    </>
                )}
            </CardContent>
        </Card>
    );
};
