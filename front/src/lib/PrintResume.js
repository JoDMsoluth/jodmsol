export default function PrintResume()
{
    const myResume = window.open('http://localhost:3000/print/resume', 'PRINT', 'height=400,width=600');
    myResume.print();

    return true;
}