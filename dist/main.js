import { series } from "./data.js";
import { serie } from "./serie.js";
function renderSeriesTable(seriesList) {
    const tableBody = document.getElementById("series-table-body");
    if (!tableBody)
        return;
    tableBody.innerHTML = '';
    let totalSeasons = 0;
    seriesList.forEach(serie => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <th scope="row">${serie.id}</th>
            <td>${serie.Name}</td>
            <td>${serie.Channel}</td>
            <td>${serie.Seasons}</td>
        `;
        tableBody.appendChild(row);
        totalSeasons += serie.Seasons;
    });
    const promedio = Math.round(totalSeasons / seriesList.length);
    const promedioRow = document.createElement("tr");
    promedioRow.innerHTML = `
        <td colspan="4"><strong>Seasons average: ${promedio}</strong></td>
    `;
    tableBody.appendChild(promedioRow);
}
renderSeriesTable(series);
//# sourceMappingURL=main.js.map