document.querySelector('button').addEventListener('click', generateName)

function generateName(){

    const food = document.getElementById('drink').value
    const hobby = document.getElementById('hobby').value
    const dessert = document.getElementById('dessert').value
    const vacation = document.getElementById('vacation').value
    const show = document.getElementById('show').value

    let selections = document.querySelectorAll('select')
    let result = 0;

        selections.forEach(select => {
            result += parseInt(select.value);
        });

    let display = document.querySelector('h3')

    if(result == 5){
        display.innerText = 'Lactose Ninja'
    }else if(result >=6 && result >= 9){
        display.innerText = 'slammin Mama'
    }else if(result >= 10 && result >= 13){
        display.innerText = 'Mischevious Snowflake'
    }else if(result >= 14 && result >= 17){
        display.innerText = 'Slippery Yoyo'
    }else if(result > 18){
        display.innerText = 'Traveling Chipmunk'
    }

}


