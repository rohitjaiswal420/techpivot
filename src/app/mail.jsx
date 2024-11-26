"use server"
import nodemailer from 'nodemailer'

export const sendmail=async(name,email,message)=>{

    const config={

        service:"gmail",
        auth:{
          user:"rohitkumarchau656@gmail.com",
          pass:"pihc knoi rbca lrif"
        }
      }

      const transporter=nodemailer.createTransport(config);
      await transporter.sendMail({

        from:'rohitkumarchau656@gmail.com',
        to:email,
        subject:'Confirmation',
        html:`<table> <th>Name</th> <th>Email</th> <tr> <td>${name}</td>  <td>${email}</td>  </tr> <tr>${message}</tr> </table>`

      });

}