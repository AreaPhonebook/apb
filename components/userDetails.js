function userTemplate(user) {
    return `
  <div class="col-12">
        <div class="card">
            <div class="card-header">
                <div class="overflow-hidden">
                    <div class="card-content">
                        <div class="cleartfix">
                            <div class="media align-items-stretch">
                                
                                <div class="media-body">

                                    <h3 class="manu-item"><a href="${user.postLink}">${user.name}</a> </h3>
                                    <div class="row">
                                        <span class="col-6 topic tp1"> <a href="tel:${user.number}">${user.number}</a> </span>
                                        <span class="col-6 topic tp1">ওয়ার্ড নং: ${user.wordNo}</span>
                                        <span class="col-6 topic tp1"><a href="https://www.google.com/search?q=${user.location}" target="_blank">${user.location}</a></span>
                                        <span class="col-6 topic tp4"> <a href="tel:${user.number}"
                                                data-toggle="collapse">কল করুন</a>
                                        </span>
                                    </div>                                                
                                </div>
                                                               
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            

            <div id="${user.id}" class="">
                <div>
                    <small>${user.detail}</small>
                </div>

            </div>
        </div>
    </div>


    

  `;
}

function prepareTemplateWithData(data) {
    document.getElementById("user").innerHTML = `
        ${data.map(userTemplate).join("")}  
        `;
}

// initial call
prepareTemplateWithData(userData)


// filter with word no
const WORDS = {
    '১': '১',
    '২': '২',
    '৩': '৩',
    '৪': '৪',
    '৫': '৫',
    '৬': '৬',
    '৬': '৭',
    '৬': '৮',
    '৬': '৯',
}

$('#word').on('change', function (e) {
    let value = this.value;
    if (!value) {
        prepareTemplateWithData(userData)
        return
    }

    if (value && Object.values(WORDS).includes(value)) {
        let data = userData.filter(function (el) {
            return el.wordNo == value || el.wordNo == 'সমগ্র পাগলা'
          });
        prepareTemplateWithData(data)
    }
});


// <br>
//                 <div>
//                     <iframe
//                         src="${user.videoLink}"
//                         width="100%" height="200" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
//                         allowfullscreen="true"
//                         allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
//                         allowFullScreen="true"></iframe>
//                 </div>
