// import { PrismaClient } from '@prisma/client'


// export const getServerSideProps = async ({ req }) => {
//     const prisma = new PrismaClient({})
//     const job = await prisma.job.create({
//         data: {
//             id: '20',
//             jobName : 'idk',
//             createTime : 'sdf',
//             status : 'sfsd',
//             inputLocation : 'sdf',
//             outputLocation : 'sdf',
//             author: '1',
//             authorID: '1',
//         }
//         })
//     console.log(job);
//     return { props: { job } }
//   }

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const body = { title, content };
      await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      await Router.push('/drafts');
    } catch (error) {
      console.error(error);
    }
  };
