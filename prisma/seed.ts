import { PrismaClient } from "@prisma/client";
// import axios from "axios";

const prisma = new PrismaClient();

async function main(): Promise<void> {

//  await prisma.user.create({
//   data: {
//     username: "Emily880",
//     password: "xd",
//   }
//  })

  // await prisma.user.create({
  //   data: {
  //     username: "emily880",
  //     password: "1234"
  //   },
  // });
  // const user = await prisma.user.findUnique({
  //   where: {
  //     username: "emily880",
  //   },
  //   include:{
  //     contacts: true
  //   }
  // });
  // var contacts = await (await axios.get("https://my.api.mockaroo.com/contact_list.json?key=fceb27d0")).data;
  // for (let i = 0; i < contacts.length; i++) {
  //   await prisma.contact.create({
  //     data: {
  //       email: contacts[i].email,
  //       name: contacts[i].name,
  //       profesion: contacts[i].profesion,
  //       linkedin: contacts[i].linkedin,
  //       github: contacts[i].github,
  //       extra: contacts[i].extra,
  //       user: {
  //         connect: {
  //           id: "ckwhjttti00067t2eg47yo5to"
  //         }
  //       }
  //     }
  //   });
  // }
  // const contacto = await prisma.contact.create({
  //     data: {
  //       email: "emily.moraima.cruz@hotmail.com",
  //       name: "emily",
  //       profesion: "full stack",
  //       linkedin: "asdfgtrewdefrtg",
  //       github: "dfghfgfadfgbfdrfe",
  //       extra : "dfghtgrfewfrghrfew",
  //       user: {
  //         connect: {
  //           id: user?.id,
  //         }
  //       },
  //     }
  // })
  // console.log(user);
  // console.log(contacto);
  // eliminar un contacto

  // await prisma.contact.deleteMany({
  //   where: {
  //     userId: "ckwb8ti760000yb2eswyugtof",
  //   },
  // });
  // await prisma.user.delete({
  //   where: {
  //     username: "emily880",
  //   },
  // });
}

main()
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });
