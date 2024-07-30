import Timestamp from '../ui/Timestamp';
import SubmenuTrigger from '../ui/SubmenuTrigger';
import TruncatedText from '../components/TruncatedText';
import { NavLink } from 'react-router-dom';

export const DASHBOARD_COLUMN_DEFS = [
    {
        title: 'Date & Time',
        dataIndex: 'time',
        width: '10%',
        render: timestamp => <Timestamp date={timestamp}/>,
    },
    {
        title: 'Title',
        dataIndex: 'title',
        // responsive: ['lg'],  
        width: '20%',
        render: title => <TruncatedText className="font-heading font-bold" lines={1} text={title} />
    },
    {
        title: 'Sumary',
        dataIndex: 'sumary',
        responsive: ['xl'],
        width: '40%',
        render: sumary => <div className="flex flex-1 gap-5 bg-input-bg border border-input-border h-20 rounded-md
                            max-w-[500px] p-4 overflow-hidden">
                            <div className="flex-1 max-w-[513px]">
                                <TruncatedText className="flex-1" text={sumary} width={'513px'} />
                            </div>
                        </div>
    },
    {
        title: 'Source',
        dataIndex: 'source',
        responsive: ['xxl'],
        width: '10%',
        render: source => <span className='text-accent capitalize'>{source}</span>
    },
    {
        title: 'tags',
        dataIndex: 'tagList',
        responsive: ['xl'],
        width: '10%',
        render: tagList => tagList?.map(tag => <span className="capitalize">{tag}, </span>)
    },
    {
        title: 'Actions',
        dataIndex: 'actions',
        width: '5%',
        render: () =>
            <div className="flex items-center justify-end gap-11">
                <NavLink aria-label="Edit">
                    <i className="icon icon-pen-to-square-regular text-lg leading-none"/>
                </NavLink>
                <SubmenuTrigger/>
            </div>
    }
];