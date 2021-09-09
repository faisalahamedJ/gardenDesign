let container = document.querySelector(".boxContainer");

let html = "";

 fetch("https://612efca08333fa00177e7cce.mockapi.io/garden").then(res => res.json()).then(data =>{
     data.forEach(element => {        
       let htmlSegment = `
                            <div class="box">
                                <div class="boxImg" >
                                    <img class="imgOutside" src="${element.background}" >
                                    <img  class="imgInside" 
                                    src="${element.profile}" alt="">
                                </div>
                                    <p>${element.para}</p>
                                    
                                <div class="readMoreBtn">read more</div>
                            </div>
                        `;
        
        html += htmlSegment;
     });
    container.innerHTML += html;

 })
 .catch(err => console.log(err))
