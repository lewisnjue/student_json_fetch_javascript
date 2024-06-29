document.addEventListener('DOMContentLoaded',()=>{
    const button = document.querySelector('.submit');
    button.addEventListener('click',getdata);
    function getdata(){
        const path = document.querySelector('input').value;
        const xhr = new XMLHttpRequest();
        xhr.open('GET',path);
        xhr.onload = ()=>{
            const tablediv = document.querySelector('.table');
            const students = JSON.parse(xhr.responseText);
            students.forEach(student => {
                let tr = document.createElement('tr');
                let tbody = document.querySelector('tbody');
                Object.keys(student).forEach(key => {
                    // do my funtionality here 
                    let td = document.createElement('td');
                    td.innerHTML = student[key];
                    tr.append(td);
                  });
                  tbody.append(tr);
                  
                
            });
        }
        xhr.onerror = ()=>{
            console.log('error');
        }
        xhr.send();
    }
})

console.log('waht')