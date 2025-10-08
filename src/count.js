import fs from "fs";
import XLSX from "xlsx";

// Function to extract and export "TGF" codes
function extractAndExportTGF(markdownFilePath, outputExcelPath) {
  // Read the Markdown file
  const markdownContent = fs.readFileSync(markdownFilePath, "utf8");

  // Regular expression to match codes starting with "TGF"
  const tgfRegex = /\bTGF\w*/g;

  // Find all matches
  const tgfMatches = markdownContent.match(tgfRegex) || [];

  // Get the count of matches
  const count = tgfMatches.length;

  // Prepare data for Excel
  const data = [["Code", "Index"]];
  tgfMatches.forEach((code, index) => {
    data.push([code, index + 1]);
  });

  // Create a workbook and add a sheet
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.aoa_to_sheet(data);

  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, "TGF Codes");

  // Write the workbook to a file
  XLSX.writeFile(workbook, outputExcelPath);

  console.log(`Found ${count} codes starting with "TGF".`);
  console.log(`Excel file has been saved to: ${outputExcelPath}`);
}

// Usage example
const markdownFilePath = "./document-podium2.md"; // Path to your Markdown file
const outputExcelPath = "./TGF_Codes.xlsx"; // Path to save the Excel file

extractAndExportTGF(markdownFilePath, outputExcelPath);
