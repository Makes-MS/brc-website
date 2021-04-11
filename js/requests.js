const requestURL = 'https://server.brconsulting.com.ua/approve/getClientsTickets.php'

function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)

        xhr.responseType = 'json'

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send()
    })
}

let tickets = ""
let archiveTicketsBlock = document.getElementById('request')
let existTicketsBlock = document.getElementById('podaty')

sendRequest("GET", requestURL)
    .then (data => {
        tickets = data
        getExistTickets()
        // getAllTickets()
    })
    .catch (err => console.log(err))

// document.addEventListener("DOMContentLoaded", () => {
//     for (const [key, value] of Object.entries(tickets)) {
//         console.log(`${key}: ${value}`);
//         counter++
//       }


//     let container = document.getElementById('container');
//     let tick = document.createElement('div');
//     tick.className = "ticket";
    
//     for (let i = 0; i <= 2; i++) {
//         let div = document.createElement('div');
//         div.innerHTML = "123"
//         tick.append(div);
//     }
    
//     container.appendChild(tick);
// })


function getExistTickets() {
    for (const [key, value] of Object.entries(tickets)) {
        if (value.Finished === false) {
      const tick = document.createElement('div');
      tick.className = "ticket";
      const div = document.createElement('div');
      div.className = `${key}`
      div.innerHTML = `${key}`
      const div2 = document.createElement('div');
      div2.className = `${key}`
      div2.innerHTML = `${value.Name}`
      const div3 = document.createElement('div');
      div3.className = `${key}`
      div3.innerHTML = `${value.CreatedDate}`
      tick.append(div);
      tick.appendChild(div2);
      tick.appendChild(div3);  
      archiveTicketsBlock.appendChild(tick);
      }
    }
}

// function getAllTickets() {
//     for (const [key, value] of Object.entries(tickets)) {
//       const tick = document.createElement('div');
//       tick.className = "ticket";
//       const div = document.createElement('div');
//       div.className = `${key}`
//       div.innerHTML = `${key}`
//       const div2 = document.createElement('div');
//       div2.className = `${key}`
//       div2.innerHTML = `${value.Name}`
//       const div3 = document.createElement('div');
//       div3.className = `${key}`
//       div3.innerHTML = `${value.CreatedDate}`
//       tick.append(div);
//       tick.appendChild(div2);
//       tick.appendChild(div3);  
//       archiveTicketsBlock.appendChild(tick);
//       }
// }


document.addEventListener('click', (event) => {
    
    const action = event.target.className
    const popup = document.createElement('div')
    popup.className = 'popup'
    const popupBlock = document.createElement('div')
    popupBlock.className = 'popup__block'
    popup.append(popupBlock)
    const p1 = document.createElement('p')
    const span1 = document.createElement('span')
    span1.className = 'popup__span'
    span1.innerHTML = 'Номер заявки'
    p1.append(span1)
    p1.innerHTML = tickets[`${action}`].Code
    popupBlock.appendChild(p1)

    const p2 = document.createElement('p')
    p2.innerHTML = tickets[`${action}`].Name
    popupBlock.appendChild(p2)

    const p3 = document.createElement('p')
    p3.innerHTML = tickets[`${action}`].Description
    popupBlock.appendChild(p3)

    const p4 = document.createElement('p')
    p4.innerHTML = tickets[`${action}`].AuthorTicket
    popupBlock.appendChild(p4)

    const p5 = document.createElement('p')
    p5.innerHTML = tickets[`${action}`].Client
    popupBlock.appendChild(p5)

    const p6 = document.createElement('p')
    p6.innerHTML = tickets[`${action}`].Software
    popupBlock.appendChild(p6)

    const p7 = document.createElement('p')
    p7.innerHTML = tickets[`${action}`].Date
    popupBlock.appendChild(p7)

    const p8 = document.createElement('p')
    p8.innerHTML = tickets[`${action}`].Finished
    popupBlock.appendChild(p8)

    document.body.appendChild(popup)

    const cro = document.createElement('div')
    cro.className = "cross"
    popup.appendChild(cro)

    const cross = document.querySelector('.cross')

    cross.addEventListener('click', (event) => {
    const pop = document.querySelector('.popup')
    if (typeof(pop) != 'undefined' && pop != null) {
        pop.remove()
    }
})
})



