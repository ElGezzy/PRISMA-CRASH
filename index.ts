import { PrismaClient } from '@prisma/client';
import { CLIENT_RENEG_LIMIT } from 'tls';

const prisma = new PrismaClient();

async function main() {
    // Prisma Queries
    // Create User
    // const user = await prisma.user.create({
    //     data:{
    //         name: 'John Doe',
    //         email: 'john@gmail.com',
    //     }
    // });

    //Get all users
    // const users = await prisma.user.findMany();

    //Get all users with their articles
    // const users = await prisma.user.findMany({
    //     include: {
    //         articles: true,
    //     }
    // });

    //Create article and associate it with user
    // const article = await prisma.article.create({
    //     data: {
    //         title: 'Johns First Article',
    //         body: 'This is Johns first article',
    //         author: {
    //             connect:{
    //                 id: 1,
    //             }
    //         }
    //     }
    // })

    //Get all articles
    const articles = await prisma.article.findMany();

    //Create user and article and associate them
    // const user = await prisma.user.create({
    //     data: {
    //         name:   'Sara Smith',
    //         email: 'sara@gmail.com',
    //         articles: {
    //             create: {
    //                 title: 'Saras First Article',
    //                 body: 'This is saras first'
    //             }
    //         }
    //     }
    // })

    //Create user and article and associate them
    // const user = await prisma.user.create({
    //     data:{
    //         name: 'Paul Doe',
    //         email: 'paul@gmail.com',
    //         articles: {
    //             create: {
    //                 title: 'Pauls first Article',
    //                 body: 'This is Pauls first Article ever'
    //             }
    //         }
    //     }
    // })

    //Create another article and linking it to Sara who has an id of 2
    // const article = await prisma.article.create({
    //     data: {
    //         title: 'Sample Article',
    //         body: 'This is a sample article',
    //         author:{
    //             connect: {
    //                 id: 2,
    //             }
    //         }
    //     }
    // })

    // console.log(users);
    // console.log(articles);

    //Loop over to get each of the users and all their respective articles
    // users.forEach((user) => {
    //     console.log(`User ${user.id}: ${user.name}, Email: ${user.email}`);
    //     console.log(`Articles: `);
    //     user.articles.forEach((article, idx) =>{
    //         //'article' is just from the database, while 'idx' is simply a counter to count for each author starting from one 
    //         console.log(`- Article ${idx + 1}; Title: ${article.title}, body: ${article.body}`)
    //     })
    //     console.log('')
    // })

    // Update data
    // const user = await prisma.user.update({
    //     where: {
    //         //Which Id of the user you want to update
    //         id: 1
    //     },
    //     data: {
    //         name: 'John Doe Jr.'
    //     }
    // })

    // console.log(users);

    // Remove Article
    // const article = await prisma.article.delete({
    //     where :{
    //         id: 4
    //     }
    // })

    console.log(articles);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
         await prisma.$disconnect();
         process.exit(1);
    })