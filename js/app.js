const teamMembers = [
    {
        name: "Comely Daniel",
        image: "../img/comely.jpg",
        bestFood: "Ekpang Nkukwo",
        complexion: "slightly fair skinned",
        thingsLearnt: ["html", " css", " javascript"],
        bestMovie: "The witcher",
        age: 23,
    }, {
        name: "Merit Dike",
        image: "../img/merit.png",
        bestFood: "Spaghetti",
        complexion: "slightly fair skinned",
        thingsLearnt: ["html", " css", " javascript"],
        bestMovie: "Harry potter",
        age: 25,
    }, {
        name: "Abdulsamad Raji",
        image: "../img/abdulsamad.jpg",
        bestFood: "Beans and ripe plantain",
        complexion: "dark skinned",
        thingsLearnt: ["html", " css", " javascript"],
        bestMovie: "Snow Piercer",
        age: 26,
    }, {
        name: "Daniel Ejeh",
        image: "../img/ayo.jpg",
        bestFood: "Fried rice",
        complexion: "dark skinned",
        thingsLearnt: ["html", " css", " javascript"],
        bestMovie: "Halo series",
        age: 24,
    }, {
        name: "Ayobami Ogundiya",
        image: "../img/danny.png",
        bestFood: "Egg sauce with fried yam",
        complexion: "dark skinned",
        thingsLearnt: ["html", " css", " javascript"],
        bestMovie: "Shadow and Bones",
        age: 26,
    }, {
        name: "Gabriel Ekpo",
        image: "../img/gabriel.png",
        bestFood: "Afang soup",
        complexion: "dark skinned",
        thingsLearnt: ["html", " css", " javascript"],
        bestMovie: "Game of thrones",
        age: 28,
    }, {
        name: "Emmanuel Stephen",
        image:  "../img/emmanuel.png",
        bestFood: "Atama soup",
        complexion: "fair skinned",
        thingsLearnt: ["html", " css", " javascript"],
        bestMovie: "The wheel of time",
        age: 23,
    }, {
        name: "Ekpenyoung Amah",
        image: "../img/ekpenyoung.jpg",
        bestFood: "Not picky",
        complexion: "dark skinned",
        thingsLearnt: ["html", " css", " javascript"],
        bestMovie: "The hobbit",
        age: 27,
    }]

console.log(teamMembers);

let header = "";

for (let i = 0; i < teamMembers.length; i++) {
    header += ` <div class="a-card mt-5 p-5 p-md-3 container rounded">
   <div class="show"> 
       <div class="d-flex flex-column align-items-center p-1">
            <div class="image-div">
               <img src="${teamMembers[i].image}" alt="" class="rounded-circle" width=100%>
            </div>
            <h2 class="header text-center">${teamMembers[i].name}</h2>
        </div>
        <div class="details mt-5 text-center">
            <h3>DETAILS</h3>
            <ul class="list">
                 <li>Best Food: ${teamMembers[i].bestFood}</li>
                 <li>Complexion: ${teamMembers[i].complexion}</li>
                 <li>Things Learnt: ${teamMembers[i].thingsLearnt}</li>
                 <li>Best Movie: ${teamMembers[i].bestMovie}</li>
                <li>Age: ${teamMembers[i].age}</li>
            </ul>
        </div>
        <div class="ms-lg-5 ps-lg-5 ms-3">
            <button class="btn btn-primary ms-5 px-lg-5" onclick="clickHere(${i})"">Click Here</button>
        </div>
   </div>
</div> `;
}

function clickHere(i) {
    alert(`Hi, I'm ${teamMembers[i].name}. Nice to meet you` ); 
}

document.querySelector(".loop-card").innerHTML = header;





