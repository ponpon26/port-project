const rows = document.querySelector("#rows");
const name=fetch("../data/activity.json")
.then((response)=> response.text())
.then((text)=> {
    console.log(text)

    const activity = JSON.parse(text);
    console.log(activity)
    for (const act of activity){
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td><img width="200px" class="cover" src="${act.image}" alt="${act.name}"></td>
          <td>${act.name}</td>
          <td>${act.year}</td> 
        `;
    
        rows.append(tr);
    }

    

})





