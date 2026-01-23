//helpline number js
//national emergency number
const history = [];

document.getElementById('national').addEventListener('click', function () {
        alert('calling to national emergency number!');

        const availableCoins = parseInt(document.getElementById('coins').innerText);
        const decreaseCoins = 20;

        if(0 >= availableCoins){
                alert('not enought coins!');
                return;
        }

        const called = availableCoins - decreaseCoins;
        document.getElementById('coins').innerText = called;

        const data = {
                name: 'National Emergency Number',
                number: '999',
                time: new Date().toLocaleTimeString()
        }

        history.push(data);

        const historyData = document.getElementById('historyDetails');
        historyData.innerText = '';

        for (const data of history) {
                const div = document.createElement('div');
                div.innerHTML = `
                <div class="flex justify-between items-center mt-2 rounded-lg py-2 px-5 shadow-[0_2px_5px_rgba(0,0,0,0.3)]">
                        <div>
                                <p>${data.name}</p>
                                <p>${data.number}</p>
                        </div>
                        <div>
                                <p>${data.time}</p>
                        </div>
                </div>
                `

                historyData.appendChild(div);
        }
});


//poice helpline number
document.getElementById('police').addEventListener('click', function () {
        alert('calling to police helpline number!');

        const availableCoins = parseInt(document.getElementById('coins').innerText);
        const decreaseCoins = 20;

        if(0 >= availableCoins){
                alert('not enought coins!');
                return;
        }

        const called = availableCoins - decreaseCoins;
        document.getElementById('coins').innerText = called;

        const data = {
                name: 'Police Helpline Number',
                number: '999',
                time: new Date().toLocaleTimeString()
        }

        history.push(data);

        const historyData = document.getElementById('historyDetails');
        historyData.innerText = '';

        for (const data of history) {
                const div = document.createElement('div');
                div.innerHTML = `
                <div class="flex justify-between items-center mt-2 rounded-lg py-2 px-5 shadow-[0_2px_5px_rgba(0,0,0,0.3)]">
                        <div>
                                <p>${data.name}</p>
                                <p>${data.number}</p>
                        </div>
                        <div>
                                <p>${data.time}</p>
                        </div>
                </div>
                `

                historyData.appendChild(div);
        }
});

//fire service number
document.getElementById('fire-service').addEventListener('click', function () {
        alert('calling to fire service number!');

        const availableCoins = parseInt(document.getElementById('coins').innerText);
        const decreaseCoins = 20;

        if(0 >= availableCoins){
                alert('not enought coins!');
                return;
        }

        const called = availableCoins - decreaseCoins;
        document.getElementById('coins').innerText = called;

        const data = {
                name: 'Fire Service Number',
                number: '999',
                time: new Date().toLocaleTimeString()
        }

        history.push(data);

        const historyData = document.getElementById('historyDetails');
        historyData.innerText = '';

        for (const data of history) {
                const div = document.createElement('div');
                div.innerHTML = `
                <div class="flex justify-between items-center mt-2 rounded-lg py-2 px-5 shadow-[0_2px_5px_rgba(0,0,0,0.3)]">
                        <div>
                                <p>${data.name}</p>
                                <p>${data.number}</p>
                        </div>
                        <div>
                                <p>${data.time}</p>
                        </div>
                </div>
                `

                historyData.appendChild(div);
        }
});

//ambulance service
document.getElementById('ambulance-service').addEventListener('click', function () {
        alert('calling to ambulance service number!');

        const availableCoins = parseInt(document.getElementById('coins').innerText);
        const decreaseCoins = 20;

        if(0 >= availableCoins){
                alert('not enought coins!');
                return;
        }

        const called = availableCoins - decreaseCoins;
        document.getElementById('coins').innerText = called;

        const data = {
                name: 'Ambulance Service',
                number: '1994-999999',
                time: new Date().toLocaleTimeString()
        }

        history.push(data);

        const historyData = document.getElementById('historyDetails');
        historyData.innerText = '';

        for (const data of history) {
                const div = document.createElement('div');
                div.innerHTML = `
                <div class="flex justify-between items-center mt-2 rounded-lg py-2 px-5 shadow-[0_2px_5px_rgba(0,0,0,0.3)]">
                        <div>
                                <p>${data.name}</p>
                                <p>${data.number}</p>
                        </div>
                        <div>
                                <p>${data.time}</p>
                        </div>
                </div>
                `

                historyData.appendChild(div);
        }
});

//women and child helpline
document.getElementById('women-child').addEventListener('click', function () {
        alert('calling to women and child helpline number!');

        const availableCoins = parseInt(document.getElementById('coins').innerText);
        const decreaseCoins = 20;

        if(0 >= availableCoins){
                alert('not enought coins!');
                return;
        }

        const called = availableCoins - decreaseCoins;
        document.getElementById('coins').innerText = called;

        const data = {
                name: 'Women & Child Helpline',
                number: '109',
                time: new Date().toLocaleTimeString()
        }

        history.push(data);

        const historyData = document.getElementById('historyDetails');
        historyData.innerText = '';

        for (const data of history) {
                const div = document.createElement('div');
                div.innerHTML = `
                <div class="flex justify-between items-center mt-2 rounded-lg py-2 px-5 shadow-[0_2px_5px_rgba(0,0,0,0.3)]">
                        <div>
                                <p>${data.name}</p>
                                <p>${data.number}</p>
                        </div>
                        <div>
                                <p>${data.time}</p>
                        </div>
                </div>
                `

                historyData.appendChild(div);
        }
});

//anti-corruption helpline
document.getElementById('anti-corruption').addEventListener('click', function () {
        alert('calling to anti-corruption helpline number!');

        const availableCoins = parseInt(document.getElementById('coins').innerText);
        const decreaseCoins = 20;

        if(0 >= availableCoins){
                alert('not enought coins!');
                return;
        }

        const called = availableCoins - decreaseCoins;
        document.getElementById('coins').innerText = called;

        const data = {
                name: 'Anti-Corruption Helpline',
                number: '106',
                time: new Date().toLocaleTimeString()
        }

        history.push(data);

        const historyData = document.getElementById('historyDetails');
        historyData.innerText = '';

        for (const data of history) {
                const div = document.createElement('div');
                div.innerHTML = `
                <div class="flex justify-between items-center mt-2 rounded-lg py-2 px-5 shadow-[0_2px_5px_rgba(0,0,0,0.3)]">
                        <div>
                                <p>${data.name}</p>
                                <p>${data.number}</p>
                        </div>
                        <div>
                                <p>${data.time}</p>
                        </div>
                </div>
                `

                historyData.appendChild(div);
        }
});

//electricity helpline
document.getElementById('electricity').addEventListener('click', function () {
        alert('calling to electricity helpline number!');

        const availableCoins = parseInt(document.getElementById('coins').innerText);
        const decreaseCoins = 20;

        if(0 >= availableCoins){
                alert('not enought coins!');
                return;
        }

        const called = availableCoins - decreaseCoins;
        document.getElementById('coins').innerText = called;

        const data = {
                name: 'Electricity Helpline',
                number: '16216',
                time: new Date().toLocaleTimeString()
        }

        history.push(data);

        const historyData = document.getElementById('historyDetails');
        historyData.innerText = '';

        for (const data of history) {
                const div = document.createElement('div');
                div.innerHTML = `
                <div class="flex justify-between items-center mt-2 rounded-lg py-2 px-5 shadow-[0_2px_5px_rgba(0,0,0,0.3)]">
                        <div>
                                <p>${data.name}</p>
                                <p>${data.number}</p>
                        </div>
                        <div>
                                <p>${data.time}</p>
                        </div>
                </div>
                `

                historyData.appendChild(div);
        }
});

//brac helpline
document.getElementById('brac').addEventListener('click', function () {
        alert('calling to brac helpline number!');

        const availableCoins = parseInt(document.getElementById('coins').innerText);
        const decreaseCoins = 20;

        if(0 >= availableCoins){
                alert('not enought coins!');
                return;
        }

        const called = availableCoins - decreaseCoins;
        document.getElementById('coins').innerText = called;

        const data = {
                name: 'Brac Helpline',
                number: '16445',
                time: new Date().toLocaleTimeString()
        }

        history.push(data);

        const historyData = document.getElementById('historyDetails');
        historyData.innerText = '';

        for (const data of history) {
                const div = document.createElement('div');
                div.innerHTML = `
                <div class="flex justify-between items-center mt-2 rounded-lg py-2 px-5 shadow-[0_2px_5px_rgba(0,0,0,0.3)]">
                        <div>
                                <p>${data.name}</p>
                                <p>${data.number}</p>
                        </div>
                        <div>
                                <p>${data.time}</p>
                        </div>
                </div>
                `

                historyData.appendChild(div);
        }
});

//bangladesh railway helpline
document.getElementById('railway').addEventListener('click', function () {
        alert('calling to bangladesh railway helpline number!');

        const availableCoins = parseInt(document.getElementById('coins').innerText);
        const decreaseCoins = 20;

        if(0 >= availableCoins){
                alert('not enought coins!');
                return;
        }

        const called = availableCoins - decreaseCoins;
        document.getElementById('coins').innerText = called;

        const data = {
                name: 'Bangladesh Railway Helpline',
                number: '163',
                time: new Date().toLocaleTimeString()
        }

        history.push(data);

        const historyData = document.getElementById('historyDetails');
        historyData.innerText = '';

        for (const data of history) {
                const div = document.createElement('div');
                div.innerHTML = `
                <div class="flex justify-between items-center mt-2 rounded-lg py-2 px-5 shadow-[0_2px_5px_rgba(0,0,0,0.3)]">
                        <div>
                                <p>${data.name}</p>
                                <p>${data.number}</p>
                        </div>
                        <div>
                                <p>${data.time}</p>
                        </div>
                </div>
                `

                historyData.appendChild(div);
        }
});


//clear history js
document.getElementById('clear-history').addEventListener('click', function(){
        const historyList = document.getElementById('historyDetails');
        historyList.innerHTML = '';
});


//favorite buttons js
const likeButtons = document.querySelectorAll('.favorite');
const Count = document.getElementById('count');

let totalCount = 0;

likeButtons.forEach(btn => {
  btn.addEventListener('click', () => {

    if (!btn.classList.contains('liked')) {
      totalCount++;
      btn.classList.add('liked', 'text-red-500');
      btn.classList.remove('text-black-500');
    } else {
      totalCount--;
      btn.classList.remove('liked', 'text-red-500');
      btn.classList.add('text-black-500');
    }

        Count.innerText = totalCount;
  });
});


//copy js
//1
document.getElementById("copyBtn").addEventListener("click", function () {
    const text = document.getElementById("copyText").innerText;

    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  });

//2
document.getElementById("copyBtn2").addEventListener("click", function () {
    const text = document.getElementById("copyText2").innerText;

    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  });

//3
document.getElementById("copyBtn3").addEventListener("click", function () {
    const text = document.getElementById("copyText3").innerText;

    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  });

//4
document.getElementById("copyBtn4").addEventListener("click", function () {
    const text = document.getElementById("copyText4").innerText;

    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  });

//5
document.getElementById("copyBtn5").addEventListener("click", function () {
    const text = document.getElementById("copyText5").innerText;

    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  });

//6
document.getElementById("copyBtn6").addEventListener("click", function () {
    const text = document.getElementById("copyText6").innerText;

    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  });

//7
document.getElementById("copyBtn7").addEventListener("click", function () {
    const text = document.getElementById("copyText7").innerText;

    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  });

//8
document.getElementById("copyBtn8").addEventListener("click", function () {
    const text = document.getElementById("copyText8").innerText;

    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  });

//9
document.getElementById("copyBtn9").addEventListener("click", function () {
    const text = document.getElementById("copyText9").innerText;

    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  });