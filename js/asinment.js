const loadUniverse = async ()=>{
    toggle(true);
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    hubCard(data.data.tools);
}
const hubCard = (items)  =>{
    console.log(items.lenght);
    const divOfParantCard = document.getElementById('parent-divOf-card');
    divOfParantCard.textContent = '';   
    items.forEach(item => {
        const divOfCard = document.createElement('div');
        divOfCard.classList.add('col');
        divOfCard.innerHTML = `
        <div class="card  h-100">
                 <img src=" ${item.image}" class="card-img-top" alt="..."></img> 
                <div class="card-body">
                  <h5 class="card-title">Features</h5>
                  <p class="card-text">1. ${item.features[0]} </p>
                  <p class="card-text">2. ${item.features[1]} </p>
                  <p class="card-text">3. ${item.features[2]} </p>
                  <div class="card-footer bg-white d-flex justify-content-between">
                    <div>
                        <h5 class="card-title">${item.name}</h5>
                        <small class="text-body-secondary text-secondary"><i class="fa-solid fa-calendar-days"> </i>   ${item.published_in}</small>
                    </div>
                    <div>
                        <button onclick="loadandloadphone('${item.id}')" class="border border-0  bg-danger-subtle p-3 rounded-pill text-danger" data-bs-toggle="modal" data-bs-target="#modalId"><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                  </div>
                </div>
              </div>
        `;
        divOfParantCard.appendChild(divOfCard);
        toggle(false);
    });
}
const toggle = loder=>{
    const toggleSpanar = document.getElementById('loder');
    if(loder){
        toggleSpanar.classList.remove('d-none');
    }
    else{
        toggleSpanar.classList.add('d-none');
    }
}

const loadandloadphone = async id =>{
    const url =`https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    loadDisplay(data.data)
    
}
const loadDisplay = fata => {
    console.log(fata.accuracy.score);
    // Modal Title-1
    const modalTitle = document.getElementById('exampleModalLabel');
    // Modal body 
    const modalBody = document.getElementById('modal-body-id');
    modalBody.innerHTML = `
    <div class="d-flex gap-0 column-gap-3 ms-5 mb-4">
      <div class="border border-danger-subtle bg-danger-subtle p-5 rounded">
        <div class="fs-5 text fw-bolder mb-4">${fata.description}</div>
        <div class="d-flex gap-0 column-gap-5">
          <p class="bg-white py-3 px-4 rounded-4 fw-semibold text-success text-center"><span>${fata.pricing[0] ? fata.pricing[0].price : 'No Cost'}</span><br>
          <span>${fata.pricing[0].plan}</span></p>
          <p class="bg-white py-3 px-4 rounded-4 fw-semibold text-warning text-center"><span>${fata.pricing[1].price}</span><br>
          <span>${fata.pricing[1].plan}</span></p>
          <p class="bg-white py-3 px-2 rounded-4 fw-semibold text-danger text-center"><span>${fata.pricing[2].price}</span><br>
          <span>${fata.pricing[2].plan}</span></p>
        </div>
        <div class="d-flex gap-0 column-gap-4">
          <div>
            <h5>Features</h5>
          <ul class="text-secondary">
            <li>${fata.features[1].feature_name}</li>
            <li>${fata.features[2].feature_name}</li>
            <li>${fata.features[3].feature_name}</li>
          </ul>
          </div>
          <div>
            <h5>Integrations</h5>
            <ul class="text-secondary">
              <li>${fata.integrations[0]}</li>
              <li>${fata.integrations[1]}</li>
              <li>${fata.integrations[2]}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="border p-5 rounded d-flex flex-column">
        <p class="bg-danger text-white px-1 rounded-end position-absolute mt-1 d-flex justify-content-end">
          <small>${fata.accuracy.score}% accuracy</small>
        </p>
        <img src="${fata.image_link[0]}" class="img-thumbnail border border-0" alt="">
        <h4 class="mt-5 text-center">${fata.input_output_examples[0].input}</h4>
        <p class="text-center mt-3">${fata.input_output_examples[0].output}</p>
      </div>
    </div>
    `;


}

loadUniverse();