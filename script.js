
const testimonialContainer = document.querySelector('.box')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.name')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/men/27.jpg',
        text: "I would recommend this web developer for anyone trying to get the word out about their business. It has saved me so much time!. This is the second time I've hired him, and I'll hire him again in the future. I have tried a lot of similar products and web developer is the best!"
    },
    {
        name: 'June Cha',
        position: 'Softwere Engr',
        photo: 'https://randomuser.me/api/portraits/men/44.jpg',
        text: 'I love web developer! This is an amazing service and it has saved me and my small business so much time. I plan to use it for a long time to come. With web developer, we have finally accomplished things that have been waiting forever to get done.'
    },
    {
        name: 'Iida Niskanen',
        position: 'Data Entry',
        photo: 'https://randomuser.me/api/portraits/men/68.jpg',
        text: 'With web developer, communication between all of us is far more efficient. A game changer. web developer has helped my team and I stay on the same page. Previously, we were all over the board. Using web developer has definitely saved us time and money.'
    },
    {
        name: 'Jhonathan Nunfiez',
        position: 'Graphic Designer',
        photo: 'https://randomuser.me/api/portraits/men/17.jpg',
        text: "I highly recommend web developer. It has been so important for us as we continue to grow our company. This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future. I have tried a lot of similar products and web developer is the best!"
    },
    {
        name: 'Sasha Ho',
        position: 'Accountant',
        photo: 'https://randomuser.me/api/portraits/men/77.jpg',
        text: "I would recommend web developer for anyone trying to get the word out about their business. It has saved me so much time! This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future."
    },
    {
        name: 'Veeti Seppanen',
        position: 'Director',
        photo: 'https://randomuser.me/api/portraits/men/97.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus inventore hic quo ipsum nihil.Incidunt qui ipsum quisquam sequi maxime architecto similique reiciendis quidem facilis corporis libero nam nemo ratione id necessitatibus ab debitis nulla harum.Optio corrupti dolorum debitis incidunt est architecto voluptas aut nobis amet corporis accusamus.'
    }
]

let index = 0;
setInterval(() => {
    showTestimonial()
    index++
    if(index == testimonials.length){
        index = 0
    }
},5000);

function showTestimonial(){ 
    testimonial.innerHTML = testimonials[index].text
    username.innerHTML = testimonials[index].name
    role.innerHTML = testimonials[index].position
    userImage.src = testimonials[index].photo 
}