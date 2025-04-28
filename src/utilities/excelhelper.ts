// Import xlsx

import * as EXCEL from 'xlsx';
import fs from 'fs';

// Define data structure for Excel data
interface TestRecord{
    Skill1: string;
    Skill2: string;
}

//Create method to read excel file
export function  readExcelFile(filePath : string){

    // Read excelfile as binary string
    const file = fs.readFileSync(filePath);

    //parse into workbok
    const workbook = EXCEL.read(file);

    //Get  first sheet
    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    //Convert sheet to JSON
    const rawData : any[] = EXCEL.utils.sheet_to_json(sheet, { header: 1 });


    //convert raw data intp testRecord
    const records : TestRecord[] = rawData.slice(1).map((column : any) => ({
        Skill1: column[0] ,
        Skill2: column[1]
    }));

    return records;


}