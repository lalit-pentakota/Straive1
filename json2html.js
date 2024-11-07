// json2html.js
export default function json2html(data) {
  // Define table header based on the keys in the data array
  const headers = ["Name", "Age", "Gender"];

  // Start building the HTML table
  let html = '<table data-user="lalitpentakota007@gmail.com">';
  html += "<thead><tr>";

  // Add header columns
  headers.forEach(header => {
    html += `<th>${header}</th>`;
  });
  html += "</tr></thead><tbody>";

  // Add each row of data
  data.forEach(row => {
    html += "<tr>";
    headers.forEach(header => {
      html += `<td>${row[header] !== undefined ? row[header] : ""}</td>`;
    });
    html += "</tr>";
  });

  html += "</tbody></table>";
  return html;
}
