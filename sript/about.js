//Appending section from html
let section = document.querySelector('.section-two');

//styling section
section.style.height = '70vh';
section.style.marginTop = '2%';
section.style.background = 'rgba(252, 251, 251, 0.532)';

//creating divs in the section
let container = document.createElement('div')

//styling the container
// container.style.height = 'inherit';
// container.style.background = 'red';
// container.style.display = 'flex';

//creating container children
let left_container = document.createElement('div')

let rigth_container = document.createElement('div')

//creating header in left-container
let header = document.createElement('h1');

header.textContent = 'NOTRE MISSION';

//creating paragraph
let paragraph = document.createElement('p');
paragraph.textContent = `Bien que la creation de ce site n'est pas ete facile pour nous, nous avons fait notre possible pour vous
produire le meilleur de nous tout en esperant votre satisfaction. nous avons reunis autant d'information que
nous avons pu, cela dans le seul et unique but de notre efficacite et surtout de satifaire vos attentes.
Avec votre aide, nous ameliorerons nos impecfections grace aux appreciations que vous laisserez dans
l'espace prevu si-dessous.`;

//creating image divs for the right container
let topImage = document.createElement('div');

topImage.setAttribute('class', 'image-content');

//contentDivs
let image1 = document.createElement('div');
image1.setAttribute('class', 'image-background');

//giving images background image
image1.style.backgroundImage = 'url(../asset/img/hero2.webp)';

let image2 = document.createElement('div');
image2.setAttribute('class', 'image-background');
image2.style.backgroundImage = 'url(../asset/img/project.jpg)';

//
let bottom = document.createElement('div');
bottom.setAttribute('class', 'image-container');
bottom.style.backgroundImage = 'url(../asset/img/hero1.jpeg)';

//Meals in other countries
let meal = document.createElement('div');
meal.setAttribute('class', 'bannar');

let head = document.createElement('h2');
head.setAttribute("class", "headingTwo")
head.textContent = 'METS';

let meal_container = document.createElement('div');
meal_container.setAttribute('class', 'container');

//meals contents
let image_contain = document.createElement('div');
image_contain.setAttribute('class', 'image-contain');
// image_contain.style.background = 'green';
let contain1 = document.createElement('div');
contain1.setAttribute('class', 'contain1');

let first_content = document.createElement('div');
first_content.setAttribute('class', 'meal');
first_content.style.backgroundImage = 'url(../asset/img/erru.jpg)';


let contain2 = document.createElement('div');
contain2.setAttribute('class', 'contain1');

let secound_content = document.createElement('div');
secound_content.setAttribute('class', 'meal');
secound_content.style.backgroundImage = 'url(../asset/img/euro.jpg)'

let contain3 = document.createElement('div');
contain3.setAttribute('class', 'contain1');
let third_content = document.createElement('div');
third_content.setAttribute('class', 'meal');
third_content.style.backgroundImage = 'url(../asset/img/italian.jpg)'


let contain4 = document.createElement('div');
contain4.setAttribute('class', 'contain1');

let fourth_content = document.createElement('div');
fourth_content.setAttribute('class', 'meal');
fourth_content.style.backgroundImage = 'url(../asset/img/chinese.jpeg)'


//creating buttons and paragraph
let para1 = document.createElement('p');
para1.textContent = 'Mets Africain';
para1.setAttribute('class', 'para')

let button1 = document.createElement('button');
button1.textContent = 'ACHETER';
button1.setAttribute('class', 'btn');

//creating buttons and paragraph
let para2 = document.createElement('p');
para2.textContent = 'Mets Europeen';
para2.setAttribute('class', 'para')


let button2 = document.createElement('button');
button2.textContent = 'ACHETER';
button2.setAttribute('class', 'btn');

//creating buttons and paragraph
let para3 = document.createElement('p');
para3.textContent = 'Mets Italien';
para3.setAttribute('class', 'para')


let button3 = document.createElement('button');
button3.textContent = 'ACHETER';
button3.setAttribute('class', 'btn');

//creating buttons and paragraph
let para4 = document.createElement('p');
para4.textContent = 'Mets Chinois';
para4.setAttribute('class', 'para')


let button4 = document.createElement('button');
button4.textContent = 'ACHETER';
button4.setAttribute('class', 'btn');


//setting a class to the container div
container.setAttribute('class', 'container');

left_container.setAttribute('class', 'left-container');

rigth_container.setAttribute('class', 'right-container');




//appending child to parent
section.appendChild(container);

container.appendChild(left_container);
container.appendChild(rigth_container);
left_container.appendChild(header);
left_container.appendChild(paragraph);
rigth_container.appendChild(topImage);
rigth_container.appendChild(bottom);
topImage.appendChild(image1);
topImage.appendChild(image2);
section.appendChild(meal);
meal.appendChild(head);
meal.appendChild(meal_container);
meal_container.appendChild(image_contain);
image_contain.appendChild(contain1);
image_contain.appendChild(contain2);
image_contain.appendChild(contain3);
image_contain.appendChild(contain4);
contain1.appendChild(first_content);
contain2.appendChild(secound_content);
contain3.appendChild(third_content);
contain4.appendChild(fourth_content);
contain1.appendChild(para1);
contain1.appendChild(button1);
contain2.appendChild(para2);
contain2.appendChild(button2);
contain3.appendChild(para3);
contain3.appendChild(button3);
contain4.appendChild(para4);
contain4.appendChild(button4);


let fass = document.querySelectorAll('.fas');
let submit = document.querySelector('.submit');
let object = document.querySelector('.object');


object.style.display = 'none';
fass.forEach((fass) => {
    fass.style.color = 'white'
    fass.addEventListener('click', function () {
        if (fass.style.color == 'white') {
            fass.style.color = 'gold';
        } else {
            fass.style.color = 'white';
        }
    });
})


submit.addEventListener('click', function (e) {
    if (object.style.display == 'none') {
        object.style.dislay = 'block'
        object.style.transition = '1s'
        alert("Thank You for your Rating")
    }else{
        object.style.dislay = 'none'

    }
    function store() {

        let comment = document.getElementById('comment');

        if (localStorage.getItem("comment") == null) {
            let userData = [];
            let user = {
                Comment: comment.value
            }

            userData.push(user)
            localStorage.setItem('comment', JSON.stringify(userData));
            alert('We thank you!')
            // window.location.href = '/index1.html';
        } else {
            let data = localStorage.getItem("comment");
            let users = JSON.parse(data);
            // let foundUser = users.find(user => user.email == email.value);
            // if (!foundUser) {
                // create user here
                // const hasrshedPas = CryptoJS.SHA256(pass).toString();
                let user = {
                    Comment: comment.value
                }
                users.push(user)
                localStorage.setItem('comment', JSON.stringify(users));
                return;
            }
            // window.location.href = '/index1.html';

        // }
        return;
    }
    store();
})