const fs = require('fs');

function ReadFile (fileName)
{
    const data = fs.readFileSync(fileName, 'utf-8');
    return JSON.parse(data);
}

function WriteFile (fileName, result)
{
    const ReaderFile = result.map(result => `${result.category}: ${result.value}`).join('\n');
    fs.writeFileSync(fileName, ReaderFile);
}

function AnalyzeJSON (jsonData)
{
    result = [];

    for (item of jsonData)
    {
        if (item.txt === "Доходи, усього" || item.txt === "Витрати, усього")
        {
            result.push({category: item.txt, value: item.value});
        }
    }
    return result;
}

function main()
{
    fileInput = "data.json";
    fileOutPut = "output.txt";

    try{
        const dataJSON = ReadFile(fileInput);
        const Analyze = AnalyzeJSON(dataJSON);
        WriteFile(fileOutPut, result);
        console.log("ваш вайл записано у файл");
    } catch(error)
    {
        console.log("ПОМИЛКА(((((");
    }
}
main();