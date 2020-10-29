import React from "react";

import { useTable } from "react-table";
import styled from "styled-components";

import {getDataAndColumn} from "./index.service";

const Container = styled.div`
	display:flex;
`;

const Grid:React.FC = () => {
	const {data, columns} = getDataAndColumn();
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({columns, data});
	return (
		<Container>
			<div>

			</div>
			<div>
				<table {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup, key) => (
							<tr {...headerGroup.getHeaderGroupProps()} key={key}>
								{headerGroup.headers.map((column, key) => (
									<th {...column.getHeaderProps()} key={key}>{column.render("Header")}</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{rows.map((row, i) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps()} key={i}>
									{row.cells.map((cell, key) => {
										return (<td {...cell.getCellProps()} key={key}>{cell.render("Cell")}</td>);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</Container>
	);
};

export default Grid;