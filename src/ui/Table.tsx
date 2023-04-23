import {FC} from "react";
import {CommonUiComponentProps} from "@/ui/common";
import {Column, useTable} from 'react-table';
import clsx from "clsx";
import {Simulate} from "react-dom/test-utils";
import keyUp = Simulate.keyUp;

export type TableProps = {
    data: Array<any>;
    columns: Array<Column>;
    wrapperClassName?: string;
    bodyClassName?: string;
} & CommonUiComponentProps;

export const Table: FC<TableProps> = (props) => {
    const {
        data,
        columns,
        className,
        wrapperClassName,
        bodyClassName,
    } = props;
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        data,
        columns
    });

    const cls = clsx(
        'border-separate border-spacing-y-3 w-full',
        className
    );

    const bodyCls = clsx(
        'overflow-y-auto block',
        bodyClassName
    );

    return (
        <div className={wrapperClassName}>
            <table {...getTableProps()} className={cls}>
                <thead>
                {headerGroups.map(headerGroup => {
                    const {key: headerKey, ...headerProps} = headerGroup.getHeaderGroupProps();
                    return (
                        <tr key={headerKey} {...headerProps} className='text-left flex'>
                        {headerGroup.headers.map(column => {
                            const {
                                width,
                                maxWidth
                            } = column;
                            return (
                                // eslint-disable-next-line react/jsx-key
                                <th {...column.getHeaderProps()} align={column.id === 'actions' ? 'center' : 'left'} style={{width, maxWidth}}>{column.render('Header')}</th>
                            )
                        })}
                    </tr>)
                })}
                </thead>
                <tbody {...getTableBodyProps()} className={bodyCls}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    const {key: rowKey, ...rowProps} = row.getRowProps();
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <tr key={rowKey} {...rowProps}>
                            {row.cells.map(cell => {
                                const {
                                    width,
                                    maxWidth
                                } = cell.column;
                                // eslint-disable-next-line react/jsx-key
                                return <td {...cell.getCellProps()} align={cell.column.id === 'actions' ? 'center' : 'left'} style={{width, maxWidth}}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}