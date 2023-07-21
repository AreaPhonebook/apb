
function items(items) {
    return `
      ${items.map(item => `<div class="col-6"><span class="topic"><a href="${item.link}" class="lol">${item.name}</a></span></div>`).join("")}
  `;
  }
  
  
  
  function catagoryTemplate(card) {
    return `
    <div class="col-xl-4 col-md-6">
        <div class="card">
            <div class="card-header" data-toggle="collapse" data-target="#${card.id}">
                <div class="overflow-hidden">
                    <div class="card-content">
                        <div class="cleartfix">
                              <a href="${card.link}" target="_blank">
                                  <div class="media align-items-stretch">
                                      <h3 class="manu-item" style="margin: 10px 0 0 20px; font-size: 25px;">${card.name}</h3>
  
                                  </div>
                              </a>
                        </div>
                    </div>
                </div>
            </div>
  
            <div id="${card.id}" class="collapse sader" data-parent="#accordionExample">
                <div class="row">
                    ${card.subcategory ? items(card.subcategory) : ""}
                </div>
            </div>
        </div>
    </div>
    `;
  }
  
  document.getElementById("card").innerHTML = `
    ${cardData.map(catagoryTemplate).join("")}  
  `;
  