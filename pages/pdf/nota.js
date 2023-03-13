import { useState } from 'react';

export default () => {
	const [line, setLine] = useState([]);

	const loadIt = (event) => {
		const txt = event.target.value;

		const nfe = parseInt(
			txt
				.match(/(?<=NF-e Nº )(?<result>[\d.]+) SÉRIE:/)
				.groups.result.replace(/\./g, '')
		);

		const cliente = txt.match(/(?<=UF INSCRIÇÃO ESTADUAL )(?<result>\w+)\s/)
			.groups.result;

		const data = txt.match(
			/(?<=\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2} )(?<result>\d{2}\/\d{2}\/\d{4})/
		).groups.result;

		const vencimento = txt.match(
			/(?<=RESERVADO AO FISCO.*enc\.\: )(?<result>\d{2}\/\d{2}\/\d{2}(\d{2})?)/
		).groups.result;

		const valor = txt.match(/(?<=alor(.)?\: )(?<result>[\d.,]+)\s[A-z]/)
			.groups.result;

		setLine([nfe, '', '', cliente, data, vencimento, valor]);
	};

	const copyIt = () => {
		var copyArea = document.getElementById('copyArea');
		navigator.clipboard.writeText(copyArea.innerText);

		alert(
			'Linha copiada com sucesso. Vá para a planilha "Vendas" no arquivo "PEDIDOS ALLIAGE 2022 - 2023", na coluna "A", selecione a primeira célula vazia logo abaixo da última célula não vazia e cole o conteúdo sem formatar as células.'
		);
	};

	return (
		<div style={{ padding: '50px', marginTop: '100px' }}>
			<label htmlFor="text">
				<b>Texto da NOTA FISCAL:</b>
			</label>
			<br />
			<input
				id="text"
				type="text"
				placeholder="Cole o texto do PDF aqui."
				onChange={loadIt}
				style={{
					border: '1px solid #46b5ff',
					padding: '10px',
					margin: '10px',
					color: '#46b5ff',
					borderRadius: '5px'
				}}
			/>
			<button
				style={{
					padding: '10px',
					margin: '10px',
					backgroundColor: '#46b5ff',
					borderRadius: '5px',
					color: 'white'
				}}
				onClick={copyIt}
			>
				Copiar
			</button>
			<div id="copyArea">
				<pre>{line.length > 0 ? `${line[0]}	${line[1]}	${line[2]}	${line[3]}	${line[4]}	${line[5]}	${line[6]}` : ""}</pre>
			</div>
		</div>
	);
};
