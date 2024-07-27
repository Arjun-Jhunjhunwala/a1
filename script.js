const blogs = [
    {
        id: 1,
        title: 'Exploring the Mysteries of the Universe',
        content: 'The universe is a vast and enigmatic expanse that has captivated humanity\'s imagination for centuries. From the twinkling stars in the night sky to the distant galaxies, the cosmos holds many secrets waiting to be discovered. Scientists continue to explore and study the universe, uncovering new wonders and expanding our understanding of the cosmos.',
        date: '15 July, 2024',
        author: {
            name: 'Jane Smith',
            pic: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDEwNjF8MHwxfGFsbHwxfHx8fHx8fHwxNjE4OTIzNzY1&ixlib=rb-1.2.1&q=80&w=1080'
        },
        categories: ["space", "science", "exploration"],
        tags: ["universe", "cosmos", "astronomy"]
    },{
        id: 2,
        title: 'The Art of Mindfulness',
        content: 'Mindfulness is the practice of being present in the moment and fully engaging with whatever you are doing. It involves paying attention to your thoughts, feelings, and sensations without judgment. By practicing mindfulness, individuals can reduce stress, improve mental clarity, and enhance their overall well-being.',
        date: '12 October, 2023',
        author: {
            name: 'Sarah Johnson',
            pic: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDEwNjF8MHwxfGFsbHwxfHx8fHx8fHwxNjE4OTIzNzY1&ixlib=rb-1.2.1&q=80&w=1080'
        },
        categories: ["wellness", "mental health"],
        tags: ["mindfulness", "well-being", "meditation"]
    },{
        id: 3,
        title: 'The Future of Artificial Intelligence',
        content: 'Artificial Intelligence (AI) is transforming industries and reshaping the way we live and work. From self-driving cars to intelligent personal assistants, AI technology is advancing rapidly. As AI continues to evolve, it has the potential to solve complex problems, automate tasks, and create new opportunities for innovation.',
        date: '5 March, 2022',
        author: {
            name: 'Michael Davis',
            pic: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDEwNjF8MHwxfGFsbHwxfHx8fHx8fHwxNjE4OTIzNzY1&ixlib=rb-1.2.1&q=80&w=1080'
        },
        categories: ["technology", "AI"],
        tags: ["artificial intelligence", "technology", "innovation"]
    },
    {
        id: 4,
        title: 'Sustainable Living: Tips and Tricks',
        content: 'Living sustainably involves making choices that reduce your environmental impact and promote a healthier planet. Simple steps such as reducing waste, conserving energy, and choosing eco-friendly products can make a significant difference. This blog provides practical tips and tricks for incorporating sustainability into your daily life.',
        date: '18 June, 2023',
        author: {
            name: 'Emily White',
            pic: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDEwNjF8MHwxfGFsbHwxfHx8fHx8fHwxNjE4OTIzNzY1&ixlib=rb-1.2.1&q=80&w=1080'
        },
        categories: ["environment", "lifestyle"],
        tags: ["sustainability", "green living", "eco-friendly"]
    },{
        id: 5,
        title: 'The Joy of Cooking: Easy Recipes for Beginners',
        content: 'Cooking at home can be a delightful and rewarding experience. This blog offers easy-to-follow recipes for beginners, helping you create delicious meals with simple ingredients. From quick weeknight dinners to indulgent desserts, discover the joy of cooking and the satisfaction of making homemade meals.',
        date: '25 November, 2021',
        author: {
            name: 'David Brown',
            pic: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDEwNjF8MHwxfGFsbHwxfHx8fHx8fHwxNjE4OTIzNzY1&ixlib=rb-1.2.1&q=80&w=1080'
        },
        categories: ["cooking", "food"],
        tags: ["recipes", "cooking", "beginners"]
    }
];


function renderBlogsList(){
    const blogList = document.getElementById('blogs');
    blogs.forEach(blog => {
        const blogCard = document.createElement('div');
        blogCard.className = 'sm:rounded-l-full h-36 md:h-48 flex  items-center justify-between overflow-hidden gap-1 bg-gray-200 shadow-lg shadow-gray-400 cursor-pointer hover:bg-gray-300 hover:scale-105 duration-300';
        blogCard.innerHTML = `
            <div class="hidden sm:block">
                <img class="h-36 w-36 md:h-48 md:w-48 object-cover rounded-full p-2" src="${blog.author.pic}" alt="author-img">
            </div>
            <div class="flex flex-col max-w-80 sm:w-96 max-h-full p-4 justify-between">
                <div>
                    <p class="text-2xl overflow-hidden max-h-16 max-w-80 text-ellipsis font-semibold">${blog.title}</p>
                </div>
                <div>
                    <div class="text-md overflow-hidden text-ellipsis line-clamp-1 md:line-clamp-2">${blog.content}</div>
                </div>
                <div>
                    <p class="text-sm text-gray-700 mt-1">by ${blog.author.name} on ${blog.date}</p>
                </div>
            </div>
        `;
        blogCard.addEventListener('click', () => {
            window.location.href = `blog.html?id=${blog.id}`;
        });
        blogList.appendChild(blogCard);
    });
}

function renderBlogDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = parseInt(urlParams.get('id'));
    const blog = blogs.find(b => b.id === blogId);

    if (blog) {
        document.getElementById('blogTitle').innerText = blog.title;
        document.getElementById('authorImg').src = blog.author.pic;
        document.getElementById('blogMeta').innerText = `by ${blog.author.name} on ${blog.date}`;
        document.getElementById('blogContent').innerText = blog.content;

        const categoriesList = document.getElementById('categoriesList');
        blog.categories.forEach(category => {
            const categoryItem = document.createElement('span');
            categoryItem.className = 'px-3 py-1 rounded-full bg-gray-300';
            categoryItem.innerText = category;
            categoriesList.appendChild(categoryItem);
        });

        const tagsList = document.getElementById('tagsList');
        blog.tags.forEach(tag => {
            const tagItem = document.createElement('span');
            tagItem.className = 'px-3 py-1 rounded-full bg-gray-300';
            tagItem.innerText = tag;
            tagsList.appendChild(tagItem);
        });
    } else {
        document.getElementById('blogTitle').innerText = 'Blog Not Found';
        document.getElementById('blogContent').innerText = 'The blog post you are looking for does not exist.';
    }
}

// Initialize the blog details based on the current page
if (document.getElementById('blogTitle')) {
    renderBlogDetails();
} else if (document.getElementById('blogs')) {
    renderBlogsList();
}
