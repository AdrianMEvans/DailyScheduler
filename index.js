// create current date and time by using date-fns
const clock = document.querySelector(".clock");
// const datefns = require("date-fns");

const tick = () => {
    const now = new Date();
    
    console.log(now);

    // console.log(dateFns.format(now, 'MMMM'))
    const h = dateFns.format(now, 'HH');
    const m = dateFns.format(now, 'mm');
    const s = dateFns.format(now, 'ss');
    const day = dateFns.format(now, 'dddd');
    const d = dateFns.format(now, 'Do');
    const mo = dateFns.format(now, 'MMMM');

    // create spans to display Date and time elememnts
    const html = `
    <span>Date: ${day} ${d} of ${mo}</span>
    <br><br>
    <span>Time: ${h}:</span><span>${m}:</span><span>${s}</span>
    `;
    // console.log(h,m,s)
    
    clock.innerHTML = html;
};

setInterval(tick, 1000);

const times = [08, 09, 10, 11, 12, 13, 14, 15, 16]

for (let i = 0; i < times.length; i++) {
    
    console.log(times[i]);
    let rowHtml = `
    <div class="row">
    <div class="col hour time-block" id="time${times[i]}">
    ${times[i]}
    </div>
    <div class="col text-block">
    <!-- text input -->
    <textarea name="" id="text${times[i]} "cols="30" rows="0" placeholder="enter text here"></textarea>
    </div>
    <button class="col saveBtn btn-block" i:hover id="btn${times[i]}"><i class="far fa-save"></i></button>
    </div>
    </div>`
    
    console.log(rowHtml);

    let newRows = document.querySelector(".rowContainer");
    newRows.innerHTML += rowHtml;
}

console.log('loop finished');

// create a variable consisting of an array with the hours for the scheduler 
// create row with 3 columns
// give each colum an id referencing the time for that row 
