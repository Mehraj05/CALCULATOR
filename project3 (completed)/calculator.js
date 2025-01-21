
const calculateForm = document.getElementById("calculateForm");

const calculatemarks = (event) => {
    const maxMark=400;

    event.preventDefault();
    const formData = new FormData(calculateForm);
    const data = {};
    
    formData.forEach((value, key) => {
        data[key] = +value;
    });
    
    const totalMarks = data.Maths + data.Physics + data.Chemistry + data.Mechanics;
    const percentage = (totalMarks / maxMark) *100 ;
    
    console.log({totalMarks,percentage});
    const result = document.createElement("p");
    result.className = "result"; 
    result.innerText= ` you have got ${totalMarks} marks out of ${maxMark} and your percenatge is${percentage}%`;
    calculateForm.after(result);
};
