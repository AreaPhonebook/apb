function userTemplate(user) {
    return `
  <div class="col-xl-4 col-md-6">
        <div class="card">
            <div class="card-header">
                <div class="overflow-hidden">
                    <div class="card-content">
                        <div class="cleartfix">
                            <div class="media align-items-stretch">
                                <div class="align-self-center">
                                    <a class="pop">
                                        <img class="manu-img"
                                            src="${user.photo}"
                                            alt="${user.name}">
                                    </a>
                                </div>
                                <div class="media-body">

                                    <h3 class="manu-item"><a href="${user.postLink}" target="_blank">${user.name}</a> </h3>
                                    <div class="row">
                                        <span class="col-6 topic tp1"> <a href="tel:${user.number}">${user.number}</a> </span>
                                        
                                        <span class="col-6 topic tp4"> <a href="#${user.id}"
                                                data-toggle="collapse">আরো দেখুন <i
                                                    class="fa fa-chevron-down"></i></a> </span>
                                    </div>                                                
                                </div>
                                <div class="align-self-center">
                                    <a href="tel:${user.number}">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                    </svg>
                                    </a>
                                </div>                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            

            <div id="${user.id}" class="collapse">
                <div>
                    <small>${user.detail}</small>
                </div>

            </div>
        </div>
    </div>


    

  `;
}

document.getElementById("user").innerHTML = `
  ${userData.map(userTemplate).join("")}  
`;