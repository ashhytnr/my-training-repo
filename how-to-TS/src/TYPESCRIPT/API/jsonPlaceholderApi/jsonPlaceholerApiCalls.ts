interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
}

interface Comment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}

interface Album {
    userId: number;
    id: number,
    title: string,
}

interface Photo {
    albumId: number
    id: number;
    title: string,
    url: string,
    thumbnailUrl: string,
}

interface Todo {
    userID: number,
    id: number,
    title: string,
    completed: string,
}

class ApiTrainingClass {

    async callApiAllPosts() {
        const url:string =  'https://jsonplaceholder.typicode.com/posts';

        try {
            const response = await fetch(url);

            const data = await response.json() as Post[];

            // console.log(data); --- did this before Post interface was created

            data.forEach(post => console.log(`${post.title} id - ${post.id}`))

        } catch (error) {
            console.error('API call failed', error);
        }

    }

    async callApiIndividualPost() {
        const url = 'https://jsonplaceholder.typicode.com/posts/1';

        try {
            const response = await fetch(url);
            const data = await response.json() as Post;
            console.log(`title:${data.title} - id:${data.id}`);
        } catch (error) {
            console.error('API call failed', error);
        }
    }

    async callApiPostComments() {
        //     post as in blog, not http post
        const url = 'https://jsonplaceholder.typicode.com/posts/1/comments';

        try {
            const response = await fetch(url);
            const data = await response.json() as Comment[];
            data.forEach(comment => console.log(`name: ${comment.name} - id:${comment.id}`))
        } catch (error) {
            console.error('API call failed', error)
        }
    }



    async callApiAlbumTitles() {
        const url = 'https://jsonplaceholder.typicode.com/albums';

        try {
            const response = await fetch(url);
            const data = await response.json() as Album[];
            data.forEach(album => console.log(`id - ${album.id}, Album title: ${album.title}`))
        } catch (error) {
            console.error(`API called failed`, error)
        }
    }

    async callApiTodoStatus() {
        const url = 'https://jsonplaceholder.typicode.com/todos';

        try {
            const response = await fetch(url);
            const data = await response.json() as Todo[];
            data.forEach(todo => console.log(`id - ${todo.id}, title: ${todo.title}, completed: ${todo.completed}`))
        } catch (error) {
            console.error(`API called failed`, error)
        }
    }

    async callApiPhotoTitles() {
        const url = 'https://jsonplaceholder.typicode.com/photos';

        try {
            const response = await fetch(url);
            const data = await response.json() as Photo[];
            data.forEach(photo => console.log(`photo title: ${photo.title}`))
        } catch (error) {
            console.error(`API called failed`, error)
        }
    }
}

const myClassInstance = new ApiTrainingClass();

// myClassInstance.helloThere();

// myClassInstance.callApiAllPosts();  -- works for first async

// myClassInstance.callApiIndividualPost();

// myClassInstance.callApiPostComments();

// myClassInstance.callApiAlbumTitles()

// myClassInstance.callApiTodoStatus()

myClassInstance.callApiPhotoTitles()