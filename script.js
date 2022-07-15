async function getData(){ 
    try{
      let data = await fetch("https://api.openbrewerydb.org/breweries");
      let breweries = await data.json();
      console.log(breweries);
      breweries.forEach(brewery => displayBrewery(brewery)); 
    }
    catch{
      alert("Not Found");
    }
  }
  getData();
  function displayBrewery(brewery){
     const div = document.createElement("div");
      div.setAttribute("class","brewery");
      div.innerHTML = `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${brewery.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted"> ${brewery.brewery_type}</h6>
              <p class="card-text" >${brewery.street==null?"NA":brewery.street}</p>
              <a href="#" >${brewery.website_url}</a>
              <a href="#" >Call: ${brewery.phone===null? "NA":brewery.phone}</a>
            </div>
          </div>
        `;
  
        document.body.append(div);
  }